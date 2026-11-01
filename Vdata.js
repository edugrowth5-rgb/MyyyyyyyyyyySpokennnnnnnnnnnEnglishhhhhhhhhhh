// VaniCraft Content & Topics Data
const appData = [
    {
        id: "about",
        title: "ABOUT APP",
        isAbout: true,
        content: `
            <div class="about-card">
                <h2 style="font-size: 22px; font-weight: 900; color: #fcd34d; margin-bottom: 12px;">✨ VaniCraft Overview</h2>
                <p style="font-size: 14px; color: #cbd5e1; line-height: 1.6; margin-bottom: 16px;">
                    यह एक मॉड्युलर और आधुनिक स्पोकन इंग्लिश PWA ऐप है। इसमें आप दैनिक जीवन की बातचीत (Conversations) को Male और Female दोनों की आकर्षक आवाज़ों में सुन सकते हैं।
                </p>
                <div style="display: flex; gap: 8px; margin-bottom: 20px;">
                    <span style="background: rgba(99,102,241,0.2); color: #818cf8; padding: 4px 12px; border-radius: 20px; font-size: 11px; border: 1px solid rgba(99,102,241,0.3);">👨‍🦱 Dual Voice Support</span>
                    <span style="background: rgba(236,72,153,0.2); color: #f472b6; padding: 4px 12px; border-radius: 20px; font-size: 11px; border: 1px solid rgba(236,72,153,0.3);">🎨 Modular Design</span>
                </div>
                <button onclick="selectTopic(1)" style="padding: 10px 24px; background: linear-gradient(135deg, #db2777, #7c3aed); color: white; border: none; border-radius: 12px; font-weight: bold; cursor: pointer;">
                    START LEARNING 🚀
                </button>
            </div>
        `
    },
    {
        id: 1,
        title: "At a Grocery Shop",
        description: "Grocery shopping and asking prices.",
        dialogues: [
            { speaker: "male", name: "Rahul", text: "Hello, do you have fresh green vegetables?" },
            { speaker: "female", name: "Priya", text: "Yes, sir! We have fresh tomatoes, potatoes, and spinach." },
            { speaker: "male", name: "Rahul", text: "Give me one kilo of tomatoes and half a kilo of potatoes." },
            { speaker: "female", name: "Priya", text: "Sure, that will be 60 rupees in total." }
        ]
    },
      {
        id: 2,
        title: "Introducing a Friend",
        description: "Peter introducing his friend Harry to Jenny.",
        dialogues: [
            { speaker: "male", name: "Rahul", text: "Hi Priya! Good morning." },
            { speaker: "female", name: "Priya", text: "Good morning, Rahul. How are you?" },
            { speaker: "male", name: "Rahul", text: "I'm fine. Thanks. How are you doing?" },
            { speaker: "female", name: "Priya", text: "I'm doing great." },
            { speaker: "male", name: "Rahul", text: "Meet Amit. He is my friend." },
            { speaker: "female", name: "Priya", text: "Hi, Amit! Nice to meet you." },
            { speaker: "male", name: "Amit", text: "Hi Priya! Nice to meet you too." },
            { speaker: "male", name: "Rahul", text: "Amit is here for the weekend." },
            { speaker: "female", name: "Priya", text: "Great. We will have lots of fun." },
            { speaker: "male", name: "Amit", text: "Sure." }
        ]
    },
      {
        id: 3,
        title: "Saying Goodbyes at a Party",
        description: "Different ways people say goodbye when leaving a party at night.",
        dialogues: [
            { speaker: "female", name: "Lily", text: "I am getting late, I should go. Bye." },
            { speaker: "female", name: "Priya", text: "Ok, see you later." },
            { speaker: "male", name: "Rahul", text: "See you tomorrow, Priya. Are you coming along, Anjali?" },
            { speaker: "female", name: "Anjali", text: "Yes I am. Wait for me Rahul. It was nice meeting you Priya. Goodbye." },
            { speaker: "female", name: "Priya", text: "Same here, Anjali, see you." },
            { speaker: "male", name: "Amit", text: "Would you come tomorrow?" },
            { speaker: "female", name: "Priya", text: "No. I don't think I can. I am sorry." },
            { speaker: "female", name: "Ritu", text: "Alright then, Priya. Good night." },
            { speaker: "female", name: "Priya", text: "Good night to both of you. Take care, Bye." }
        ]
    },
      {
        id: 4,
        title: "Talking About Soccer Legend",
        description: "Rahul and Priya talking about the English soccer legend David Beckham.",
        dialogues: [
            { speaker: "male", name: "Rahul", text: "Oh! So you are watching soccer." },
            { speaker: "female", name: "Priya", text: "Yes. I like to watch Beckham playing." },
            { speaker: "male", name: "Rahul", text: "So you are a Beckham fan?" },
            { speaker: "female", name: "Priya", text: "Yes, I watch soccer just because of him." },
            { speaker: "male", name: "Rahul", text: "My friends are meeting to watch FIFA together this evening." },
            { speaker: "female", name: "Priya", text: "Can I join you all?" },
            { speaker: "male", name: "Rahul", text: "Sure. Why not?" },
            { speaker: "female", name: "Priya", text: "I am going to market in the evening. I'll reach there as soon as possible." },
            { speaker: "male", name: "Rahul", text: "That will be fine." },
            { speaker: "female", name: "Priya", text: "See you at 7 sharp." }
        ]
    },
      {
        id: 5,
        title: "Preparing for Tennis Match",
        description: "Rahul and Priya talking about Priya's lawn tennis match preparation.",
        dialogues: [
            { speaker: "male", name: "Rahul", text: "Hi dear! How are you? Seems busy." },
            { speaker: "female", name: "Priya", text: "Yes I am, Rahul. I am preparing for my tennis match." },
            { speaker: "male", name: "Rahul", text: "How is it going?" },
            { speaker: "female", name: "Priya", text: "Good, but I need to work more on my back-hand shot." },
            { speaker: "male", name: "Rahul", text: "Do you need any help?" },
            { speaker: "female", name: "Priya", text: "Yes I do. It'll be great if you join me. Can you?" },
            { speaker: "male", name: "Rahul", text: "Yes, I can." },
            { speaker: "female", name: "Priya", text: "Great. Let's go to stadium tomorrow at 6." },
            { speaker: "male", name: "Rahul", text: "No, let's make it 5:30." }
        ]
    },
      {
        id: 6,
        title: "Everyday Schedule at Hostel",
        description: "Rahul talking about his everyday schedule at hostel with Mom.",
        dialogues: [
            { speaker: "female", name: "Mom", text: "Do you wake up so late in hostel too?" },
            { speaker: "male", name: "Rahul", text: "No Mom, I wake up there at 6 a.m. everyday." },
            { speaker: "female", name: "Mom", text: "What time do you have your breakfast then?" },
            { speaker: "male", name: "Rahul", text: "Breakfast is always at 8 in the morning. Mom, when does Anjali go to school?" },
            { speaker: "female", name: "Mom", text: "She usually goes to school at 10:30 a.m." },
            { speaker: "male", name: "Rahul", text: "I go to school at 11:00 a.m. regularly." },
            { speaker: "female", name: "Mom", text: "Okay. Do you go to watch movies sometimes?" },
            { speaker: "male", name: "Rahul", text: "Yes we do, but not so often. Does Anjali ever miss me?" },
            { speaker: "female", name: "Mom", text: "She definitely does. After all she is your little sister." },
            { speaker: "male", name: "Rahul", text: "Does Dad go on tour frequently?" },
          { speaker: "female", name: "Mom", text: "He seldom goes on tour these days." }
        ]
    },
      {
        id: 7,
        title: "Meeting an Old Friend at Café",
        description: "Priya and Rahul having tea and meeting George at a cafe.",
        dialogues: [
            { speaker: "female", name: "Priya", text: "Hello Rahul, have a cup of tea." },
            { speaker: "male", name: "Rahul", text: "Thanks, but I don't take tea." },
            { speaker: "female", name: "Priya", text: "I don't remember when did we meet last?" },
            { speaker: "male", name: "Rahul", text: "In the public library, but we don't go there now." },
            { speaker: "female", name: "Priya", text: "Don't you think he is Amit?" },
            { speaker: "male", name: "Rahul", text: "Oh yes, he is. He doesn't wear glasses now. Let us meet him." },
            { speaker: "male", name: "Rahul", text: "Hello, Amit! How are you?" },
            { speaker: "male", name: "Amit", text: "Fine, thanks! You both don't look busy." },
            { speaker: "male", name: "Rahul", text: "You are right. We don't have any company here." },
            { speaker: "male", name: "Amit", text: "Don't worry. We don't need anybody now." }
        ]
    },
      {
        id: 8,
        title: "At the Reservation Counter",
        description: "Rahul enquiring about trains and booking a ticket with Priya at the counter.",
        dialogues: [
            { speaker: "male", name: "Rahul", text: "Can you give me some information?" },
            { speaker: "female", name: "Priya", text: "Sure sir, how can I help you?" },
            { speaker: "male", name: "Rahul", text: "I want to go to Oxford. What time does the next train leave?" },
            { speaker: "female", name: "Priya", text: "Trains for Oxford leave every hour. What time do you want to reach there?" },
            { speaker: "male", name: "Rahul", text: "I want to reach there by 5 p.m. How long does it take to reach there?" },
            { speaker: "female", name: "Priya", text: "It takes six hours approximately. Do you want to travel in an A.C. coach?" },
            { speaker: "male", name: "Rahul", text: "Yes, what's the fare?" },
            { speaker: "female", name: "Priya", text: "It's five hundred fifty for A.C." },
            { speaker: "male", name: "Rahul", text: "Please book a ticket for me. Is the train on time?" },
            { speaker: "female", name: "Priya", text: "Yes, it's on time. Don't you have change?" },
            { speaker: "male", name: "Rahul", text: "No, I am sorry. Can you manage?" },
          { speaker: "female", name: "Priya", text: "Sure, Here is your ticket and the change." },
        ]
    },
      {
        id: 9,
        title: "At the Airport Conversation",
        description: "Priya and Rahul talking about flights and travel at the airport.",
        dialogues: [
            { speaker: "female", name: "Priya", text: "Hi Rahul! Where are you going?" },
            { speaker: "male", name: "Rahul", text: "Hi! I am not going anywhere. I have come here to receive my parents." },
            { speaker: "female", name: "Priya", text: "So they are coming today. Where are they coming from?" },
            { speaker: "male", name: "Rahul", text: "They are coming from Paris by Air France flight. What about you?" },
            { speaker: "female", name: "Priya", text: "I am going to London by Air India." },
            { speaker: "male", name: "Rahul", text: "At what time does your flight leave?" },
            { speaker: "female", name: "Priya", text: "At 5:30 in the morning. Are you staying here until then?" },
            { speaker: "male", name: "Rahul", text: "Yes I am. Air France flight arrives at 6 a.m. here." },
            { speaker: "male", name: "Rahul", text: "Do you often go to U.K.?" },
            { speaker: "female", name: "Priya", text: "Not very often. I go when my elder brother calls me. He works there." },
            { speaker: "male", name: "Rahul", text: "Do you have your passport and tickets ready? It's check-in time now." },
          { speaker: "female", name: "Priya", text: "Yes,here they are,thanks." },
        ]
    },
      {
        id: 10,
        title: "Asking for Directions",
        description: "Rahul asking for directions from a policeman and a citizen in the town.",
        dialogues: [
            { speaker: "male", name: "Rahul", text: "Good morning officer! Can you tell me how to get to this address? My son lives in flat there." },
            { speaker: "male", name: "Amit", text: "Have you come here for the first time? Do you have some idea of this town?" },
            { speaker: "male", name: "Rahul", text: "I don't have any idea." },
            { speaker: "male", name: "Amit", text: "Go to the bus stand and take bus number 4 for town hall." },
            { speaker: "male", name: "Rahul", text: "Thanks." },
            { speaker: "male", name: "Rahul", text: "Excuse me. I have a problem finding this address. Please help me." },
            { speaker: "female", name: "Priya", text: "Walk to the corner and turn left. It's a short distance down the street." },
            { speaker: "male", name: "Rahul", text: "I have got no experience of this place. Can you accompany me?" },
            { speaker: "female", name: "Priya", text: "Sorry, I have got to go. But don't worry it's nearby." },
            { speaker: "male", name: "Rahul", text: "Thank you very much. I think I have a fairly good idea now." },
            { speaker: "female", name: "Priya", text: "That's alright." }
        ]
    },
      {
        id: 11,
        title: "Exploring a New City",
        description: "Rahul and Priya exploring a new city and trying to find directions to reach the fort on time.",
        dialogues: [
            { speaker: "male", name: "Rahul", text: "You have a camera Priya?" },
            { speaker: "female", name: "Priya", text: "Yes, I have." },
            { speaker: "male", name: "Rahul", text: "Great! We have to reach the fort on time." },
            { speaker: "female", name: "Priya", text: "We have to catch the bus. But we don't have the roadmap." },
            { speaker: "male", name: "Rahul", text: "Let us ask this shopkeeper, if he has got a city bus route chart." },
            { speaker: "female", name: "Priya", text: "I have already asked him. He hasn't got one." },
            { speaker: "male", name: "Rahul", text: "There is a travel agency, they may have one." },
            { speaker: "female", name: "Priya", text: "Hey! There is a sign board at the bus stop. It has a map also." },
            { speaker: "male", name: "Rahul", text: "Oh! Great! At least we have the directions figured out now." }
        ]
    },
      {
        id: 12,
        title: "Booking Tickets to Goa",
        description: "Rahul and Amit talking about booking vacation tickets to Goa.",
        dialogues: [
            { speaker: "male", name: "Rahul", text: "Where were you? I was looking for you all over." },
            { speaker: "male", name: "Amit", text: "I was at the bus station to book my tickets to Goa." },
            { speaker: "male", name: "Rahul", text: "It is a great place. My friend was there last summer." },
            { speaker: "male", name: "Amit", text: "There was a big queue at the booking counter." },
            { speaker: "male", name: "Rahul", text: "Did you get the tickets then?" },
            { speaker: "male", name: "Amit", text: "I was lucky to get them. Where did your friend stay in Goa?" },
            { speaker: "male", name: "Rahul", text: "She was at Club Mahindra. What about you?" },
            { speaker: "male", name: "Amit", text: "I was to book Citade Goa but got the booking with Alfresco." },
            { speaker: "male", name: "Rahul", text: "Are you going alone?" },
            { speaker: "male", name: "Amit", text: "No, we are four friends on this trip." },
          { speaker: "male", name: "Rahul", text: "Great!Take a lot of pictures. It's sopposed to be the best time of the year." }
        ]
    },
      {
        id: 13,
        title: "Trip to Goa Experience",
        description: "Rahul and Amit talking about Amit's trip and experiences in Goa.",
        dialogues: [
            { speaker: "male", name: "Rahul", text: "Hi Amit! How was your trip?" },
            { speaker: "male", name: "Amit", text: "I enjoyed a lot. We went to the beach. We drank fenny and ate fresh cashew nuts." },
            { speaker: "male", name: "Rahul", text: "Did you visit the Church?" },
            { speaker: "male", name: "Amit", text: "Yes, we visited the Church. We also took the ferry ride. I got a beach cap for you." },
            { speaker: "male", name: "Rahul", text: "Oh! Thanks. It's quite nice." },
            { speaker: "male", name: "Amit", text: "The beach was beautiful. We swam and slept on the sand." },
            { speaker: "male", name: "Rahul", text: "Oh! Great!" },
            { speaker: "male", name: "Amit", text: "My friend went to market. They were busy shopping for Goan arts." },
            { speaker: "male", name: "Rahul", text: "So it was a pleasant time." },
            { speaker: "male", name: "Amit", text: "Yes! I never went to such an amazing place before." }
        ]
    },
      {
        id: 14,
        title: "Sunday Morning Family Conversation",
        description: "Rahul, Priya, and Mom talking about household chores and preparations on a Sunday morning.",
        dialogues: [
            { speaker: "male", name: "Dad", text: "Priya, I just went to the store but didn't find your items." },
            { speaker: "female", name: "Priya", text: "It's okay Dad. Mom, here are your chopped vegetables." },
            { speaker: "female", name: "Mom", text: "Thanks Priya. Where is your brother?" },
            { speaker: "female", name: "Priya", text: "He is arranging the garden for the evening party." },
            { speaker: "female", name: "Mom", text: "It's ok. Why don't you and Dad clean the living room too?" },
            { speaker: "male", name: "Dad", text: "I already cleaned it Priya. You just help your mom in kitchen." },
            { speaker: "female", name: "Priya", text: "Okay Dad. As you say." },
            { speaker: "female", name: "Mom", text: "Priya, I think the potatoes are fried enough, take them out." },
            { speaker: "female", name: "Priya", text: "Right mom, I got it." },
          { speaker: "female", name: "Mom", text: "Be careful with oil, stay a bit far off." }
        ]
    }


    // नया कंटेंट यहाँ आसानी से जोड़ते जाएंगे...
];
