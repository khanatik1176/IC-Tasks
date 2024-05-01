

let data = prompt("Enter a string!! ");

function questionsMarks(str) { 

    let counter = 0;
    let message = '';
    let num1 = null;
    let num2 = null;
    
      for(let i =0; i<str.length; i++)
      {
        if(str[i] == '?')
        {
          counter++;
        }
    
        else if (str[i]>= '0' && str[i]<='9')
        {
          if(num1 === null )
          {
           num1 = parseInt(str[i]);
          }
          else
          {
             num2 = parseInt(str[i]);
    
             if(num1+num2 === 10 && counter === 3)
             {
               message = 'true';
               num1 = null;
               num2 = null;
               counter = 0; 
             }
    
             else
             {
               message = 'false';
               
             }
          }
    
        }
        
        
    
      }
        
        return message;
    }

    let result = questionsMarks(data);
    alert(result);