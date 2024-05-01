
function spaceRemover(string)
{
    console.log('Before Removing WhiteSpace : '+ string );

    let removedString = string.split(" ").join("");

    console.log('After Removing : '+ removedString);

}

spaceRemover('      Faisal                 ');