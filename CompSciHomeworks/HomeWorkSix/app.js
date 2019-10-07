//01

const totalTimeInSeconds = 
    //created an array from the li list in the html file
    Array.from(document.querySelectorAll('#ul-id-timelist>li'))
    //filtering the timelist for flexbox video 
    .filter(liItem => liItem.textContent=="Flexbox Video")
    //extracting the attribute data time
    .map(liNode => liNode.getAttribute('data-time'))
    //splitting the data time from the colon 
    .map(liTime => liTime.split(':')
    //converting the time into seconds
    .map((str, index, origArray) => index == 0 ? 60 * str : str * 1)
        //basically summing the seconds of each data time list
        .reduce((prevVal, curVal) => prevVal + curVal, 0))
    //calculating total secs
    //set inital value as zero which indicates summing first curVal, using 0 as prevVal  
    .reduce((prevVal, curVal) => prevVal + curVal, 0);

console.log(`total time in seconds: ${totalTimeInSeconds}`); 




//Q2

const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92]

console.log(`original array ${numbers}`); 
console.log(`filtered array over 70: ${numbers.filter(over70 => over70 > 70) }`); 


