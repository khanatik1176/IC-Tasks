function fizzBuzz(number)
{
    let num = number;
    let message = 'empty';

    if(num%3 == 0 && num%5 == 0)
    {
        message = 'FizzBuzz';

    }

    else if (num%3 == 0)
    {
        message = 'Buzz';
    }

    else if (num%5 == 0)
    {
        message = 'Fizz';
    }

    else
    {
        message = 'Not FizzBuzz';
    }
    return message;
}

let checker = fizzBuzz(15);

console.log(checker);


