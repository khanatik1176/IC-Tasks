function namta(number)
{
    let namta_number = number;
    let storage = [];

    let output = '';

    for (let i = 1; i<11; i++ )
    {
        let tr1 = namta_number*i;
        storage.push(tr1);
    }

    output = `
    ${number}*1 = ${storage[0]} 
     ${number}*2 = ${storage[1]} 
     ${number}*3 = ${storage[2]} 
     ${number}*4 = ${storage[3]} 
     ${number}*5 = ${storage[4]} 
     ${number}*6= ${storage[5]} 
    ${number}*7 = ${storage[6]} 
    ${number}*8 = ${storage[7]} 
    ${number}*9 = ${storage[8]}
     ${number}*10 = ${storage[9]} `;

    return output;

}

console.log(namta(12));