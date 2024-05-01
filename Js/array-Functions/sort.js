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

const sortByName = characters.sort((a, b) => {
    return a.name.localeCompare(b.name);
});

console.log("The characters sorted by name are:", sortByName);

const sortByMass = characters.sort((a,b)=>
{
    return parseInt(a.mass) - parseInt(b.mass);
});

console.log("The characters sorted by mass are:", sortByMass);

const sortByHeight = characters.sort((a,b)=>
{
    return parseInt(a.height) - parseInt(b.height);
}
);

console.log("The characters sorted by height are:", sortByHeight);


const sortByGender = characters.sort((a,b)=>
{
    return a.gender.localeCompare(b.gender);
}
);

console.log("The characters sorted by gender are:", sortByGender); 



