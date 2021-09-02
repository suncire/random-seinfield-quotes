const message1 = "if you take everything i've accomplished in my entire life and condense it down into a day... it looks decent!";
const message2 = "Do you ever yearn? Often I sit… and yearn";
const message3 = "I don't want hope. Hope is killing me. My dream is to become hopeless. When you're hopeless you don't care. And when you don't care, that indifference makes you attractive";
const message4 = "Do you have any conceivable reason for even getting up in the morning)";
const message5 = "It's not a lie if you believe it";
const message6 = "How do you eat it, with your hands?";
const message7 = "The sea was angry my friends. Like an old man trying to return soup at a deli!";
const message8 = "This woman hates me so much... I'm starting to like her";
const message9 = "Some people should just give up. I have.";
const message10 = "I lived my whole life with shame. Why die with dignity?";
const message11 = "You know I always wanted to pretend to be an archited";
const message12 = "Did anybody call here asking for Vandelay Industries?";
const message13 = "Seemingly, seemingly... to the untrained eye I can understand how you got that impression"

const messages = [message1, 
    message2, 
    message3, 
    message4, 
    message5, 
    message6, 
    message7, 
    message8, 
    message9, 
    message10, 
    message11, 
    message12,
    message13
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message);
}

module.exports = { randomMsg };