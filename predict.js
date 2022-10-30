
const deGame = (rangeStart, rangeEnd)=> {
    
    const user = prompt(' enter username');
    
    let point= 0;
    let stage = 1;
    alert(` ${user} Welcome to stage ${stage}. for this stage the range of prediction is between ${rangeStart} and ${rangeEnd}, Goodluck! you will need it Lol.`)
    let outcome = Math.ceil(Math.random() * (rangeEnd - 1) );
    let guess = parseInt(prompt(`Predict an outcome between ${rangeStart} through ${rangeEnd}`))
    const play = () => {
        point += 1;
        rangeEnd += 1;
        stage += 1;
        outcome = Math.ceil(Math.random() * (rangeEnd - 1) );
        guess = parseInt(prompt(`Predict an outcome between ${rangeStart} through ${rangeEnd}`))    
        if(guess === outcome) {
            play()
        }
    }
    if(guess === outcome) {
        play()
    }
    
    alert(`${user}!!, you only made it to  stage ${stage} your total point is ${point}. Thanks for playing`)
    return outcome
    
}

