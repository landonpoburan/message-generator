// Codecademy JavaScript Random Message Generator

// Message Object
const messageArray = {
    'weather': ['Gloomy', 'Bright & Sunny', 'Cold & Rainy', 'Hot & Sweaty'],
    'activity': ['Netflix & Chill', 'Walk Along the Beach', 'Get Lost in a Book', 'Let Your Freak Flag Fly', 'Get Lost in the Forest'],
    'fortune': ['Financial Abundance', 'What You Have Been Seeking', 'The Person of your Dreams', 'a Tasty Pie']
};

// Function to generate random index for each message
function randomizer(num) {
    return Math.floor(Math.random() * num);
}

// Function to print message to the screen
function fancyDisplay(str) {
    console.log(str);
}

// Assemble the random message
function randomMessage(messages) {
    let finalMessage = '';

    for (let message in messages) {
        const messageId = randomizer(messages[message].length);

        switch (message) {
            case 'weather':
                finalMessage += 'If Today Is ' + messages[message][messageId] + ' ';
                break;
            case 'activity':
                finalMessage += 'And You ' + messages[message][messageId] + '... ';
                break;
            case 'fortune':
                finalMessage += messages[message][messageId] + ' May Be In Your Future ;)';
                break;
            default:
                finalMessage = 'Something went terribly wrong!';
                break;
        }
    }

    return fancyDisplay(finalMessage);
}

randomMessage(messageArray);