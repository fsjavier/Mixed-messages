const inputString = {
    messages1: ["Hey there", "Your quote of the day is:", "Howdy?"],
    messages2: ['Be yourself; everyone else is already taken',
    'Live as if you were to die tomorrow. Learn as if you were to live forever.', 
    'Without music, life would be a mistake.', 
    'It is never too late to be what you might have been.', 
    'Life isn\'t about finding yourself. Life is about creating yourself.'],
    messages3: ['Have a great day!', 'Go for it!', 'You got it!']
}

const selectRandomPhrase = arr => {
    const arrLen = arr.length;
    const randomIndex = Math.floor(Math.random() * arrLen);
    return arr[randomIndex]
}

const messageBuilder = () => {
    const message1 = selectRandomPhrase(inputString.messages1);
    const message2 = selectRandomPhrase(inputString.messages2);
    const message3 = selectRandomPhrase(inputString.messages3);
    const msg = `
    ${message1}
    ${message2}
    ${message3}`
    return msg
}

console.log(messageBuilder())