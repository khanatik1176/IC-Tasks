function vowelsCounter(string)
{

    let count = 0;

    for (let i = 0; i<string.length; i++)
    {
        if(string[i] == 'a' || string[i] == 'A')
        {
        }


        else if (string[i] == 'e' || string[i] == 'E'|| string[i] == 'i' || string[i] == 'I'|| string[i] == 'o' || string[i] == 'O'|| string[i] == 'u' || string[i] == 'U')
        {
            count++;
        }

        else
        {
        }


    }

    console.log('Total Vowels except A is '+ count);

}

vowelsCounter('Elephant');