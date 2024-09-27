/* script.js */
// Add any interactivity or dynamic features here, if needed
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded');
});


document.addEventListener('DOMContentLoaded', () => {
    const venkybot = document.getElementById('venkybot');
    const openChat = document.getElementById('openChat');
    const closeChat = document.getElementById('closeChat');
    const venkybotMessages = document.getElementById('venkybotMessages');
    const venkybotInput = document.getElementById('venkybotInput');
    const sendMessage = document.getElementById('sendMessage');

    // Toggle chatbot open/close
    openChat.addEventListener('click', () => {
        venkybot.style.display = 'block';
        openChat.style.display = 'none';
    });

    closeChat.addEventListener('click', () => {
        venkybot.style.display = 'none';
        openChat.style.display = 'block';
    });

    // Bot responses
    const botResponses = {
        "name": "My name is VenkyBot. I'm here to help you learn more about Venky.",
        "email": "You can contact Venky at vv11venky@gmail.com.",
        "skills": "Venky is skilled in Java, Python, C++, HTML, CSS, JavaScript, and MySQL.",
        "education": "Venky has a Bachelor's in Computer Science and is pursuing a Master's in Computer Application (MCA).",
        "certifications": "Venky is certified in JavaScript Essentials (Cisco), Java (NPTEL), and Python for Data Science (NPTEL).",
        "projects": "Venky has worked on projects like an Online Exam Anti-Cheat Tool and a Smart Cup Coaster."
    };

    const funReplies = [
        "I wish I knew that, but I'm just a bot!",
        "Oops! I need more coffee to understand that.",
        "Beep boop! I think you’re speaking human.",
        "That sounds interesting! But I don’t have the answer... yet!",
        "Sorry, I'm still learning. Maybe ask me something else?",
        "I’d tell you, but it's a secret! 🤫"
    ];

    // Send and receive messages
    sendMessage.addEventListener('click', () => {
        const userMessage = venkybotInput.value.toLowerCase().trim();
        if (userMessage) {
            appendMessage('user', userMessage);
            generateBotResponse(userMessage);
            venkybotInput.value = ''; // Clear the input field after sending
        }
    });

    // Append messages to the chatbox
    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        venkybotMessages.appendChild(messageElement);
        venkybotMessages.scrollTop = venkybotMessages.scrollHeight; // Auto-scroll to latest message
    }

    // Generate bot response based on input
    function generateBotResponse(userMessage) {
        let botReply = botResponses[userMessage]; // Check if we have a predefined response

        if (!botReply) {
            // If no predefined response, choose a fun reply
            botReply = funReplies[Math.floor(Math.random() * funReplies.length)];
        }

        appendMessage('bot', botReply);
    }
});
