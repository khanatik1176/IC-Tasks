
let converter = {

    bmi: function(weight, height){
        return weight/(height**height);
    },
    mtrToCm: function(meter)
    {
        return meter*100;
    },

    usdToBdt: function(USD)
    {
        return USD*100;
    },

    dayToSec: function(day)
    {
        return day*80*60*24;
    }, 

};


console.log("The BMI is: "+converter.bmi(120,1.82).toFixed(2));
console.log("BDT rate is: "+converter.usdToBdt(1000));
console.log("In centimeter : "+converter.mtrToCm(2));
console.log("In seconds: "+converter.dayToSec(2));
