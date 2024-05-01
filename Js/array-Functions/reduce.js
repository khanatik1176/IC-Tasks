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

const totalMass = characters.reduce((acc, character) =>
{
    let Mass = parseInt(character.mass);
    return acc + Mass;
}, 0);

console.log(`Total mass: ${totalMass} kg`);

const totalHeight = characters.reduce((acc, character) =>
{
    let height = parseInt(character.height);
    return acc + height;
}, 0);

console.log(`Total height: ${totalHeight} cm`);

const totalCharacterinCharacterName = characters.reduce((acc, character) =>
{
    return acc + character.name.length;
}, 0);

console.log(`Total characters in character names: ${totalCharacterinCharacterName}`);

const charactersEyeColor = characters.reduce((acc, character) =>
{
    return acc+character.eye_color.length;
},0);

console.log(`Total characters in all eye colors: ${charactersEyeColor}`);

