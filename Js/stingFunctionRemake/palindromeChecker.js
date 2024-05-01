function palindromeChecker(string)
{
    let frontString = "";
    
    let reverseString = ""; 

    for (let i = 0; i<string.length; i++)
    {

        frontString += string[i];

        frontString = frontString.toLowerCase();



    }

    for (let j = string.length-1; j>=0; j--)
    {

        reverseString += string[j];

        reverseString = reverseString.toLowerCase();


    }

    if(frontString[0] == reverseString[0] && frontString[string.length-1] == reverseString[string.length-1])
    {
        console.log("It is a Palindrome");

    }

    else
    {
        console.log("It is not a Palindrome");
    }


}



palindromeChecker("deified");