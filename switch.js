
/**
 * Example #1
 * Switching on weekday taking an assumption
 * that week starts on a monday.
 * @type {number}
 */
const weekDay = 2;
switch (weekDay) {
    case 1:
        console.log("Today is a Monday");
        break;
    case 2:
        console.log("Today is a Tuesday");
        break;
    case 3:
        console.log("Today is a Wednesday");
        break;
    case 4:
        console.log("Today is a Thursday");
        break;
    case 5:
        console.log("Today is a Friday");
        break;
    case 6:
        console.log("Today is a Saturday");
        break;
    default:
        console.log("Today is a Sunday");
}

/**
 * Example #2
 * @type {number}
 */

const age = 19;
switch (age) {
    case age < 18:
        console.log("You can not register for voting")
        break;
    default:
        console.log("You can register for voting")
}

/**
 * Example #3
 * @type {number}
 */

let score = 25;
let grade;

switch (true) {
    case score >= 90:
        grade = "A";
        break;
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    case score >= 60:
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log(`Your grade is :  ${grade}`);