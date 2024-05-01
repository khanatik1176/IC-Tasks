

let data = prompt("Enter a number to find factorial: ");

let interger = parseInt(data);

let factVal = 0;

function factorial(n)
{
    if(n ==0)
    {
        factVal = 1;
        return factVal;
    }

    else if( n>0 && n<19)
    {
        factVal = n;
        let temp = 1;
        for(let i = 1; i<n; i++)
        {
           temp = temp *i;  

        }
        
        factVal = factVal * temp;

        return factVal;
    }

    else
    {
        alert("Please enter a number between 0 and 18");
    
    }
}

let result = parseInt(factorial(interger));

alert("Factorial of " + interger + " is: " + result);