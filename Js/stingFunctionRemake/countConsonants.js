function vowelsCounter(string)
{
    consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];

    str= string.toLowerCase();

    let count = 0;

    for (let i = 0; i<str.length; i++)
    {
      
        if (consonants.includes(str[i]))
        {
            count++;
        }

        else
        {
            
        }


    }

    console.log('Total Consonants are: '+ count);

}

vowelsCounter('Elephant');