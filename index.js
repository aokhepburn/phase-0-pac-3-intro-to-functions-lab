function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
// shout("Hello")
// whisper("Hello")

function logShout(string){
    console.log(`${string.toUpperCase()}`)
}
function logWhisper(string){
    console.log(`${string.toLowerCase()}`)
}

// logShout("hello")
// logWhisper("hello")

function sayHiToHeadphonedRoommate(string) {
    if (string === undefined || string === string.toLowerCase()) {
        return "I can't hear you!"
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!"
    } else if (string === `Let's have dinner together!`) {
        return "I would love to!"
    }
}

// sayHiToHeadphonedRoommate(undefined)
