let calculator = { 
    add: function(...add){

        let sum = 0;
        
        for(let i = 0; i<add.length; i++)
        {
            sum += add[i];
        }

        return sum;
        
    },

    Minus: function(...min)
    {
        let sub = 0;
        
        for(let i = 0; i<min.length; i++)
        {
            sub -= min[i];
        }

        return sub;
        
    },

    Multiply: function(...mul)
    {
        let multy = 1;
        
        for(let i = 0; i<mul.length; i++)
        {
            multy *= mul[i];
        }

        return multy;
        
    }

};


console.log("Total Addition is: "+calculator.add(10,20,30,30));
console.log("Total Subtration is: "+calculator.Minus(10,20,10,30));
console.log("Total Multiply is: "+calculator.Multiply(10,20,10,30));