const computerPlay = () => {
    const options = ['Rock', 'Paper', 'Scissors']
    const randNum = Math.floor(Math.random() * 3)

    console.log(options[randNum])
    return options[randNum]

}

computerPlay()
