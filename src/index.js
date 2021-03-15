module.exports = function toReadable (number) {
    if (number == 0)
    { 
        return "zero"
    }
    let first = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let second = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    let third = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    let answer='',num=number, i=0, ost=0, length,len ;
    length=String(number).length;
    for(i=0;i<length;i++)
    {   
        switch(i)
        {   case 0:
            if(((num%100)>9) && ((num%100)<20) )
            {   ost=num%10
                answer=String(second[ost]);
                num=Math.trunc(num/10);
                break
            }
            else
            {   
                ost=num%10
                num=Math.trunc(num/10)
                if (ost!=0 || length==1){
                answer=answer + String(first[ost]);
                }
                break
            }
            case 1:
            ost=num%10;
            num=Math.trunc(num/10);
            if (num>20)
            {
                if(ost!=0 && ost>2){
                answer=String(third[ost-2]) + ' ' + answer;
                }
                else{
                    if(ost>2){
                    answer=String(third[ost-2]) + answer;
                    }  
                }
                break;
            };
            
                if (num<20 && num>9)
                {
                    answer=String(second[ost]);
                    break;
                };
                    
                    if(ost!=0 && ost>1)
                    {   
                        answer=String(third[ost-2])+ ' ' + answer;
                        break;
                    };
            break;

            case 2:
            ost=num%10;
            num=Math.trunc(num/10);
            answer=String(first[ost]) + ' hundred ' + answer;
            break
        
        }    
    }
    if (answer[answer.length - 1] == ' ')
        return answer.slice(0, answer.length - 1);
    return answer
} 
