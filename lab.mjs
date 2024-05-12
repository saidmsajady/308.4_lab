/* Part One */
console.log(`\nPart One: Refactoring Old Code`);
console.log(`Done ( Commented Out )`);

// const str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// let array1 = [];
// let array2 = [];
// let array3 = [];
// let array4 = [];
// let placeholder = ``;  
// let counter = 0;

// for (let char of str) {
//   switch (char) {

//     // If comma do this
//     case ',':
//       counter++;
//       if (array1.length === 0) {
//         array1.push(placeholder);
//         placeholder = ``;
//       } else if (array2.length === 0) {
//         array2.push(placeholder);
//         placeholder = ``;
//       } else if (array3.length === 0) {
//         array3.push(placeholder);
//         placeholder = ``;
//       } else if (array4.length === 0) {
//         array4.push(placeholder);
//         placeholder = ``;
//       }
//       break;

//     // If new line do this
//     case '\n':
//       counter++;
//       array4.push(placeholder);
//       placeholder = ``;
//       console.log(array1.join(','), array2.join(','), array3.join(','), array4.join(','));
//       array1 = [];
//       array2 = [];
//       array3 = [];
//       array4 = [];
//       break;
      
//     // If normal char do this
//     default:
//       counter++;
//       placeholder += char;
//   }
// }

// // To check if there is still data in placeholder ( for the last row )
// if (placeholder) {
//     array4.push(placeholder);
//     console.log(array1.join(','), array2.join(','), array3.join(','), array4.join(','));
// }

/* Part Two */
console.log(`\nPart Two: Expanding Functionality`);
console.log(`Done ( Commented Out )`);

// const string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// let array2dimensional = [];
// let row = [];
// let placeholder = ``;
// let firstRow = true;

// for (let char of string) {
//     switch (char) {
//         case `,`:
//             row.push(placeholder);
//             placeholder = ``;
//             break;

//         case `\n`:
//             row.push(placeholder);
//             placeholder = ``;
            
//             if(firstRow) {
//                 array2dimensional.push(row);
//                 firstRow = false;
//                 row = [];
//             } else {
//                 array2dimensional.push(row);
//                 row = [];
//             }
//             break;

//         default:
//             placeholder += char;
//             break;
//     }
// }

// if (placeholder !== '') {
//     row.push(placeholder);
//     array2dimensional.push(row);
// }
  
// console.log(array2dimensional);

/* Part Three */
console.log(`\nPart Three: Tranforming Data\n`);

let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;


let array2dimensional = [];
let row = [];
let placeholder = ``;
let firstRow = true;
let headings = [];
  
for (let char of string) {
    switch (char) {
        case `,`:
        row.push(placeholder);
        placeholder = ``;
        break;
  
        case `\n`:
        row.push(placeholder);
        placeholder = ``;
              
          if (firstRow) {
            firstRow = false;
            for (let i = 0; i < row.length; i++) {
                headings.push(row[i].toLowerCase());
            }
            row = [];
          } else {
            const obj = {};
            for (let i = 0; i < row.length; i++) {
                obj[headings[i]] = row[i];
            }
            array2dimensional.push(obj);
            row = [];
          }
        break;
  
        default:
            placeholder += char;
            break;
      }
}
  
if (placeholder !== '') {
    row.push(placeholder);
}
  
if (row.length > 0) {
    const obj = {};
    for (let i = 0; i < row.length; i++) {
        obj[headings[i]] = row[i];
    }
    array2dimensional.push(obj);
}
  
console.log(array2dimensional);

/* Part Four */
console.log(`\nPart Four: Sorting and Manipulating Data\n`);

// Part A - Remove the last element from the sorted array.
array2dimensional.pop();

// Part B - Insert the following object at index 1:
//{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
array2dimensional.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Part C - Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
array2dimensional.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// Showing Output for Part A-C
console.log(array2dimensional);

// Part D - Use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.
let totalAge = 0;
for ( let i = 0; i < array2dimensional.length; i++ ) {
  totalAge = totalAge + +array2dimensional[i].age; // turning string into a number with the additional `+`
}
const averageAge = totalAge / array2dimensional.length;
console.log("\nAverage age of the group:", averageAge);

// Part Five
console.log(`\nPart Five: Full Circle\n`);

let csvFormatString = '';
csvFormatString += 'ID,Name,Occupation,Age\n';
for (let i = 0; i < array2dimensional.length; i++) {
  let obj = array2dimensional[i];
  csvFormatString += obj.id + ',' + obj.name + ',' + obj.occupation + ',' + obj.age + '\n';
}

console.log(csvFormatString);
console.log(`\nDONEEEEEE`)