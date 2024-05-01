const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

    const massGreater100 = characters.filter((character) => 
    {
        return parseInt(character.mass)>100;
    });

    console.log("The characters with mass greater than 100 are:", massGreater100);


    const heightLess200 = characters.filter((character)=>
{
    return parseInt(character.height)<200;
});

console.log("The characters with height less than 200 are:", heightLess200);

const maleGender = characters.filter((character)=>
{
    return character.gender === 'male';
}

);

console.log("The male characters are ", maleGender);

const femaleGender = characters.filter((character)=>
{
    return character.gender === 'female';
}

);

console.log("The female characters are ", femaleGender);
