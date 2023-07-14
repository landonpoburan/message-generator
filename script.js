// Codecademy JavaScript Random Message Generator

// If today is WEATHER, if you do XYZ, you will FORTUNE
// ... If Today Is ...
// Weather Array: Gloomy, Bright & Sunny, Cold or Rainy, Hot & Sweaty
// ... And You ...
// Activity Arrary: Netflix & Chill, Walk Along The Beach, Get Lost In A Book, Let Your Freak Flag Fly, Get Lost In The Forest
// ... Financial Abundance, Exactly What You've Been Seeking, The Person Of Your Dreams, A Tasty Pie
// ... Might Be In Your Future.

const messageArray = {
    'weather': ['Gloomy', 'Bright & Sunny', 'Cold & Rainy', 'Hot & Sweaty'],
    'activity': ['Netflix & Chill', 'Walk Along the Beach', 'Get Lost in a Book', 'Let Your Freak Flag Fly', 'Get Lost in the Forest'],
    'fortune': ['Financial Abundance', 'What You Have Been Seeking', 'The Person of your Dreams', 'a Tasty Pie']
};

//console.log(messageArray['activity'].length);

// Generate random number based on the length of each key in the object.
// messageArray['activity'].length
// Function for random number assignment
// Build string

function randomizer(num) {
    return Math.floor(Math.random() * num);
}

