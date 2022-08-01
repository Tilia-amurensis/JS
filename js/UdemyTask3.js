//Циклы//

let n = 5;
while (n < 11) {
    console.log(n);
    n++;
}
 
for(let i = 20; i > 13; i-- ) {
    console.log(i)
}

for(let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let i = 2;
while(i <= 15) {
    if (i % 2 !== 0) {
        console.log(i);
     }
     i++;
}

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}
