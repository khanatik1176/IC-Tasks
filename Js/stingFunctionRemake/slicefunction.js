function sliceString(str, start, end)
{

    let output = "";

    for (let i = start; i<end; i++)
    {

        output += str[i];
    }

     console.log(output);

}

sliceString('Bangladesh',4,8);