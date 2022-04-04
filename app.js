console.log("Hello World!\n==========\n");

// Exercise 1 Section

//WHILE LOOP
//let num = 1;

// while (num <= 100) {
//    if(num % 2 == 1) {
//        console.log(num);
//    } 
//    num ++; 
//}


//DO WHILE LOOP

//let num = 1;

//do {
//    if (num % 2 == 1) {
//       console.log(num);
//    }
//    num ++;
//} While (num <= 100)

// // for Loop
// for (let num = 1; num <= 100; num++) {
//     if (num % 2 == 1) {
//     console.log(num);
//     }      (//else if {(num % 2 == 0) }
// }          //continue;   (this is still the same with more coding/nn))
// }

// if you had people needing to get off on diffent foor(elevator)

const totalFloors = 15
let stops = [2, 3, 4, 7, 8, 9];

for (let floor = 1; floor <= totalFloors; floor++) {
if (stops.includes(floor)) {
    console.log(`Stopped at ${floor}.`);
}
if (stops.indexOf(floor) == stops.length - 1) {
    break;
}
}




// Exercise 2 Section
//FIZZBUZZ

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0){   // OR.....if (i % 15 == 0){
    console.log(`${i} FIZZBUZZ`);
} else if (i % 5 == 0) {
    console.log(`${i} BUZZ`);
    } else if (i % 3 == 0 ) {
        console.log(`${i} FIZZ`);
    } else {
         console.log(i);  // to print out all #
    }
}
   






