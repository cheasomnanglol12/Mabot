const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const botToken = '7259089235:AAEZVP3yge29t7NfJUzO4VgZu9LmYpyNnkU'; // Replace with your Telegram bot token
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}`;
    
    // Parse the request from Telegram
    const body = JSON.parse(event.body);
    
    // Assuming this is a message from the user
    const chatId = body.message.chat.id;
    const text = body.message.text;

    // Basic response
    const responseMessage = `You said: ${text}`;
    
    // Send the response back to the Telegram API
    await fetch(`${telegramApiUrl}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: responseMessage,
        }),
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ status: 'Message sent' }),
    };
};
