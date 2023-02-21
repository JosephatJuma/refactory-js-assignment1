/**
 * Switching on weekday taking an assumption
 * that week starts on a monday.
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
const age = 19;
switch (age) {
    case age < 18:
        console.log("You can not register for voting")
        break;
    default:
        console.log("You can register for voting")
}