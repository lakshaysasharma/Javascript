// Switch case

switch(new Date().getDay()) {

    // The getDay() method returns the weekday as a number between 0 and 6

    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
    
}

// Switch uses strict comparison (===)

console.log(new Date().getDay());

switch(new Date().getDay()) {

    default:
        console.log("This is default");
        break;
    case 0:
        console.log("Sunday");
        break;
    case 6:
        console.log("Saturday");
}