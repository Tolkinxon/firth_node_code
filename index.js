// function add(x){
//     let sum = x;
//     function resultFn(y){
//         sum += y;
//         return resultFn;
//     }
//     resultFn.valueOf = function(){
//             return sum;
//         };
//         console.log(resultFn.valueOf);
//     return resultFn;
// }





// const a = add(1)(2)

// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript




function parseInt(string) {
    
    
    
    const arr = ['zero','one', 'tw', 'th', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven','for', 'fif', 'hundred', 'thousand', 'milloin']

    const integerObj = {'zero': 0, 'one': 1, 'tw': 2, 'th': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11,'for': 4, 'fif': 5, 'hundred': 100, 'thousand': 1000, 'million': 1000000}


    
    const separatingArray = string.split(' ')

    const preparingList = []

    for(let i = 0; i < separatingArray.length; i++){

        const item = separatingArray[i]
        
 

        if(!item.includes('-') && (item.slice(-2) === 'ty') && !(item.slice(-4) === 'teen')){

            for(let key of arr){
                 if(item.includes(key)){
                     preparingList[i] = integerObj[key] * 10
                 }
             }
         }
         else if(!item.includes('-') && !(item.slice(-2) === 'ty') && (item.slice(-4) === 'teen')){

            for(let key of arr){
                 if(item.includes(key)){
                     preparingList[i] = integerObj[key] + 10
                 }
             }
         }
         else if(!item.includes('-') && !(item.slice(-2) === 'ty') && !(item.slice(-4) === 'teen')){

            for(let key of arr){
                 if(item.includes(key)){
                     preparingList[i] = integerObj[key]
                 }
             }
         }
        else if(item.includes('-') && !(item.slice(-2) === 'ty') && !(item.slice(-4) === 'teen')){

            let assignTens = 0
            item.split('-').map(itemMap => {
                for(let key of arr){
                    if(itemMap.includes(key)){
                        if(assignTens !== 0){
                            assignTens = assignTens * 10 + integerObj[key]
                        }
                        else{
                            assignTens = integerObj[key]
                        }
                    }
                }
            })
            preparingList[i] = assignTens
         }

        
    }

    console.log(preparingList);








  
  }


  

parseInt("two thousand hundred twenty-one fifty-nine")



























  //https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5/train/javascript