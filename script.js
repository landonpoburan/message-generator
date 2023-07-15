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

// Assemble the random message
function randomMessage(messages) {
    const weatherIndex = randomizer(messageArray['weather'].length);
    const weatherMessage = messages['weather'][weatherIndex];
    
    const activityIndex = randomizer(messageArray['activity'].length);
    const activityMessage = messages['activity'][activityIndex];
    
    const fortuneIndex = randomizer(messageArray['fortune'].length);
    const fortuneMessage = messages['fortune'][fortuneIndex];

    return 'If Today Is ' + weatherMessage + ' And You ' + activityMessage + '... ' + fortuneMessage + ' May Be In Your Future ;)';
}

// Call function and return random message
console.log(randomMessage(messageArray));