function countSeconds(Day)
{
    let givenDay = Day;

    let hour = 24*givenDay;

    let minute = hour*60;

    let seconds = minute*60

    return seconds;

}

let checker = countSeconds(3);

console.log(checker+' Seconds');