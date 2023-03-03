console.log('1st task');

const a = 8;
const b = 9;

if (a > b) {
    console.log(a);
} if (b > a) {
    console.log(b);
}   else {
    console.log(a, 'equals', b);
};

console.log('------');
    console.log('2nd task');

for (let i = 1; i < 11; i++) {
    console.log(i);
  };

  console.log('------');
    console.log('3rd task');

for (let i = 0; i < 11; i += 2) {
    console.log(i);
  };

  console.log('------');
  console.log('4th task');

let numbers = [];

for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 6) + 1);
};

console.log(numbers);

console.log('------');
console.log('5th task');

let randomNum = 0;
while (randomNum !== 5) {
  randomNum = Math.floor(Math.random() * 10) + 1;
  console.log(randomNum);
};

console.log('------');
console.log('6th task');

const masyvoIlgis = Math.floor(Math.random() * 11) + 20;
const masyvas = [];

for (let i = 0; i < masyvoIlgis; i++) {
  const randomNum = Math.floor(Math.random() * 21) + 10;
  masyvas.push(randomNum);
}

console.log(masyvas);

let maxNum = masyvas[0];
for (let i = 1; i < masyvas.length; i++) {
  if (masyvas[i] > maxNum) {
    maxNum = masyvas[i];
  }
}

console.log('Numbers in array:', masyvas.length);
console.log('The largest number is:', maxNum);


console.log('------');
console.log('7th task');

const Abcd = "ABCD";

const randomAbcd = [...Array(100)].map(
  (_) => Abcd[Math.floor(Math.random() * Abcd.length)]
);

const sumA = randomAbcd.reduce(
  (sum, currentEl) => (currentEl === "A" ? sum + 1 : sum),
  0
);

const sumB = randomAbcd.reduce(
  (sum, currentEl) => (currentEl === "B" ? sum + 1 : sum),
  0
);

const sumC = randomAbcd.reduce(
  (sum, currentEl) => (currentEl === "C" ? sum + 1 : sum),
  0
);

const sumD = randomAbcd.reduce(
  (sum, currentEl) => (currentEl === "D" ? sum + 1 : sum),
  0
);

console.log(randomAbcd);
console.log('Letters in array:', randomAbcd.length);
console.log('A letters total:', sumA);
console.log('B letters total:', sumB);
console.log('C letters total:', sumC);
console.log('D letters total:', sumD);

console.log('------');
console.log('8th task');

function lygineSuma(x, xx) {
    if (
        (typeof x === 'number' && typeof xx === 'number') ||
        (Array.isArray(x) && Array.isArray(xx))
       ){
        if (typeof x === 'number' && typeof xx === 'number') {
            const sum = x + xx;
            if (sum % 2 === 1) {
                return "Sum is ODD";
            } else {
                return sum;
            }
        }
        if (Array.isArray(x) && Array.isArray(xx)) {
            const sum = x.length + xx.length;
            if (sum % 2 === 1) {
                return "Sum is ODD";
            }   else {
                return sum;
            }
        }
        }
        return 'Bad variables';
}
    console.log(lygineSuma(2, 3));
    console.log(lygineSuma(2, 4));
    console.log(lygineSuma([1, 2, 3], [4, 5, 6]));
    console.log(lygineSuma([1, 2, 3], [4, 5, 6, 7]));
    console.log(lygineSuma(3, [2, 4, 6]));

console.log('------');
console.log('9th task');

 function pirminisSkaicius(n) {
     if (typeof n !== 'number') {
       return 'Klaida: pateiktas parametras nėra skaičius.';
     }
     if (n < 2) {
       return false;
     }
     for (let i = 2; i <= Math.sqrt(n); i++) {
       if (n % i === 0) {
         return false;
    }
    }
  
    return true;
}

console.log(pirminisSkaicius(3));
console.log(pirminisSkaicius(6));

console.log('------');
console.log('10th task');
console.log(':((((');

masyvasTLF = [];
function telefonoNumeris(masyvasTLF) {
    
}

