const noOfRecords = {
    "Red": 1000,
    "Green": 150000,
    "Blue": 20000000
}

//Function to return array of balls
function getArrayOfBalls() {
    let balls = []
    for (let i = 0; i < noOfRecords.Red; i++) {
        balls.push("Red")
    }
    for (let i = 0; i < noOfRecords.Green; i++) {
        balls.push("Green")
    }
    for (let i = 0; i < noOfRecords.Blue; i++) {
        balls.push("Blue")
    }
    return balls
}

const balls = getArrayOfBalls()

//Function to generate random number
function generateRandomNumber() {
    return Math.floor(Math.random() * balls.length)
}

//Function to pick random balls for the first two draws
function generateRandomPick() {
    let firstNo = generateRandomNumber()
    let secondNo = generateRandomNumber()

    while (firstNo === secondNo) {
        firstNo = generateRandomNumber()
        secondNo = generateRandomNumber()
    }

    const firstBall = balls[firstNo];
    const secondBall = balls[secondNo];

    balls.splice(balls[firstNo], 1);
    balls.splice(balls[secondNo], 1);

    noOfRecords[`${firstBall}`] = noOfRecords[`${firstBall}`] - 1;
    noOfRecords[`${secondBall}`] = noOfRecords[`${secondBall}`] - 1;

    return {
        firstBall,
        secondBall
    }

}

// To calculate the probabity of picking same colour balls in 3rd draw
function probablity() {
    let i = 1
    let number
    let n = 3;
    let totalNoOfBalls
    let { Red, Green, Blue } = noOfRecords
    while (i <= n - 1) {
        number = generateRandomPick()
        // console.log(`Pick no: ${i}  firstBall:${number.firstBall} secondBall:${number.secondBall}`)
        totalNoOfBalls = noOfRecords.Red + noOfRecords.Blue + noOfRecords.Green
        Red = noOfRecords.Red
        Green = noOfRecords.Green
        Blue = noOfRecords.Blue
        i = i + 1
    }
    //console.log(totalNoOfBalls, Red, Green, Blue);
    let finalNoOfBalls = totalNoOfBalls * (totalNoOfBalls - 1)
    let probablityOfBothRed = ((Red * (Red - 1)) / (finalNoOfBalls))
    let probablityOfBothGreen = ((Green * (Green - 1)) / (finalNoOfBalls))
    let probablityOfBothBlue = ((Blue * (Blue - 1)) / (finalNoOfBalls))
    let finalProbablity = probablityOfBothRed + probablityOfBothGreen + probablityOfBothBlue

    return `Probablity of picking same colour balls in ${n}rd draw is: ${finalProbablity.toFixed(2)}`
}

//Print the result 
console.log(probablity())
