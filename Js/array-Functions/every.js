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

const blueEyes = characters.every((character)=>
{
    return character.eye_color === 'blue';
});

console.log("Does every character have blue eyes?", blueEyes);

const massMoreThan40 = characters.every((character)=>
{
    return parseInt(character.mass)>40;
});

console.log("Is the mass of every character greater than 40?", massMoreThan40);

const shorterThan200 = characters.every((character)=>
{
    return parseInt(character.height)<200;
}
);

console.log("Is every character shorter than 200?", shorterThan200);

const genderMale = characters.every((character)=>
{
    return character.gender === 'male';
});

console.log("Is every character male ", genderMale);

