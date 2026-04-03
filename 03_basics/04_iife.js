// Immediately Invoked Function Expressions (IFFE)
// we have used IFFE to remove the pollution of the global scope variables

(function chai() {  // named IFFE
    console.log(`DB CONNECTED`);
}) ();
// () ()
// we use ";" after ()() to end the execution so that the consecute IFFE can run

// console.log("Hello");

( (name) => {  // unnamed IFFE
    console.log(`DB CONNECTED TWO ${name}`);
}) ('LAKSHAY')