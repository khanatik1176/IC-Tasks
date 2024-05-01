function isLeapYear(year)
{
    let givenYear = year;
    let message = 'Empty';

    if(givenYear%4 == 0)
    {
        message = 'Leap Year';
    }

    else
    {
        message =  'Not Leap Year';

    }

    return message;
} 

let checker = isLeapYear(2024);

console.log(checker);