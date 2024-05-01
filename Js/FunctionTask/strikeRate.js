function strikeRate(currentRun, ballFaced)
{
    let scroredRun = currentRun;
    let facedBalls = ballFaced;

    let strikerate = (currentRun/ballFaced)*100;

    return strikerate;
}

let checker = strikeRate(50,20);

console.log('Strike Rate is '+checker+'%');
