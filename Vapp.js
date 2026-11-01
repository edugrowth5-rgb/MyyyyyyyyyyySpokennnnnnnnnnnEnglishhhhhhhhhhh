let currentTopic = null;
let currentDialogueIndex = 0;
let isPlaying = false;
let speechRate = 1.0;
let synth = window.speechSynthesis;

// Run when page is fully loaded
window.addEventListener("DOMContentLoaded", () => {
    renderSidebar();
    selectTopic('about');
});

// Toggle Sidebar Collapse/Expand
function toggleSidebar() {
    const container = document.getElementById('app-container');
    if (container) {
        container.classList.toggle('sidebar-collapsed');
    }
}

// Render Left Sidebar Topics List
function renderSidebar() {
    const list = document.getElementById('sidebar-topics-list');
    if (!list) return;
    list.innerHTML = '';

    appData.forEach((item, index) => {
        let div = document.createElement('div');
        div.className = "topic-item";
        div.onclick = () => selectTopic(item.id);
        
        div.innerHTML = `
            <span>${item.isAbout ? '1. ABOUT APP' : (index + 1) + '. ' + item.title}</span>
            <span>→</span>
        `;
        list.appendChild(div);
    });
}

// Select Topic and Load Content in Right Panel
function selectTopic(id) {
    if (synth) synth.cancel();
    isPlaying = false;
    currentTopic = appData.find(t => t.id === id);
    
    const mainArea = document.getElementById('main-content-area');
    const audioBar = document.getElementById('audio-control-bar');

    if (!mainArea) return;

    if (currentTopic.isAbout) {
        if (audioBar) audioBar.classList.add('hidden');
        mainArea.innerHTML = currentTopic.content;
    } else {
        if (audioBar) audioBar.classList.remove('hidden');
        currentDialogueIndex = 0;
        renderDialoguesInMain();
    }
}

// Render Dialogues inside Main Area
function renderDialoguesInMain() {
    const mainArea = document.getElementById('main-content-area');
    if (!mainArea || !currentTopic) return;
    
    let html = `
        <div class="topic-box" style="margin-bottom: 20px;">
            <h2 style="font-size: 18px; font-weight: bold; color: #fcd34d;">${currentTopic.title}</h2>
            <p style="font-size: 12px; color: #94a3b8; margin-top: 4px;">${currentTopic.description}</p>
        </div>
        <div>
    `;

    currentTopic.dialogues.forEach((d, index) => {
        let isActive = index === currentDialogueIndex;
        let bubbleClass = d.speaker === 'male' ? 'male-bubble' : 'female-bubble';
        
        html += `
            <div class="dialogue-bubble ${bubbleClass}" style="${isActive ? 'border: 2px solid #fcd34d;' : ''}">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <span style="font-size: 12px; font-weight: bold; color: ${d.speaker === 'male' ? '#818cf8' : '#f472b6'};">
                        ${d.speaker === 'male' ? '👨‍🦱' : '👩‍🦰'} ${d.name}
                    </span>
                    <button onclick="playSpecificDialogue(${index})" style="padding: 4px 12px; background: #334155; color: #fff; border: none; border-radius: 20px; font-size: 11px; cursor: pointer;">
                        🔊 Play Line
                    </button>
                </div>
                <p style="font-size: 14px; font-weight: 500; color: #f8fafc;">${d.text}</p>
            </div>
        `;
    });

    html += `</div>`;
    mainArea.innerHTML = html;
}

// Play Specific Dialogue Line with Dual-Voice
function playSpecificDialogue(index) {
    if (synth) synth.cancel();
    currentDialogueIndex = index;
    renderDialoguesInMain();

    let d = currentTopic.dialogues[currentDialogueIndex];
    let utterance = new SpeechSynthesisUtterance(d.text);
    utterance.lang = 'en-IN';
    utterance.rate = speechRate;
    utterance.pitch = (d.speaker === 'female') ? 1.3 : 0.8;

    utterance.onend = () => {
        if (isPlaying && currentDialogueIndex < currentTopic.dialogues.length - 1) {
            currentDialogueIndex++;
            renderDialoguesInMain();
            playSpecificDialogue(currentDialogueIndex);
        } else {
            isPlaying = false;
            let playBtn = document.getElementById('play-pause-btn');
            if (playBtn) playBtn.innerHTML = '▶️ Play Audio';
        }
    };

    isPlaying = true;
    let playBtn = document.getElementById('play-pause-btn');
    if (playBtn) playBtn.innerHTML = '⏸️ Pause';
    if (synth) synth.speak(utterance);
}

// Toggle Play/Pause
function togglePlayPause() {
    if (!currentTopic || currentTopic.isAbout) return;
    if (isPlaying) {
        if (synth) synth.pause();
        isPlaying = false;
        let btn = document.getElementById('play-pause-btn');
        if (btn) btn.innerHTML = '▶️ Resume';
    } else {
        if (synth && synth.paused) {
            synth.resume();
            isPlaying = true;
            let btn = document.getElementById('play-pause-btn');
            if (btn) btn.innerHTML = '⏸️ Pause';
        } else {
            playSpecificDialogue(currentDialogueIndex);
        }
    }
}

// Play Next Line
function playNext() {
    if (!currentTopic || currentTopic.isAbout) return;
    if (currentDialogueIndex < currentTopic.dialogues.length - 1) {
        playSpecificDialogue(currentDialogueIndex + 1);
    }
}

// Play Previous Line
function playPrevious() {
    if (!currentTopic || currentTopic.isAbout) return;
    if (currentDialogueIndex > 0) {
        playSpecificDialogue(currentDialogueIndex - 1);
    }
}

// Set Audio Speed
function setSpeed(rate) {
    speechRate = rate;
    ['075', '1', '125'].forEach(r => {
        let btn = document.getElementById(`speed-${r}`);
        if (btn) btn.className = "speed-btn";
    });
    let activeBtn = document.getElementById(`speed-${rate.toString().replace('.', '')}`);
    if (activeBtn) activeBtn.className = "speed-btn active";
}
