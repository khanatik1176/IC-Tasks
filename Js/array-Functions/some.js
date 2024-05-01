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

const atLeastOneMale = characters.some((character)=>
{
    return character.gender === 'male';
});

console.log('At least one male available', atLeastOneMale);

const atLeastOneBlueEyes = characters.some((character)=>
{
    return character.eye_color === 'blue';
}
);

console.log('At least one character has blue eyes', atLeastOneBlueEyes);

const tallerThan200 = characters.some((character)=>
{
    return parseInt(character.height)>200;
});

console.log('At least one character is taller than 200', tallerThan200);

const massLessThan50 = characters.some((character)=>
{
    return parseInt(character.mass)<50;
});

console.log('At least one character has mass less than 50', massLessThan50);

