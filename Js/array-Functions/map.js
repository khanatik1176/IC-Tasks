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


const characterName = characters.map((character) => {return character.name;})

console.log(`The Names are: ${characterName}`);


const characterHeight = characters.map(function(character)
{
    return character.height;
})

console.log(`The heights are: ${characterHeight}`);

const chracternameHeight = characters.map(function(character)
{
    return character.name + ',' + character.height;
}
)
console.log(`The names and heights are: ${chracternameHeight}`);

const characterFirstName = characters.map(function(character)
{
    return character.name.split(' ')[0];
})

console.log(`The first names are: ${characterFirstName}`);
