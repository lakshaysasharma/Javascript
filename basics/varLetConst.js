// 1. var is function scoped while let, const are braces/block scoped.

function testScopeForVar() {

    for(var i = 1; i < 12; i++) {
        console.log(i);
    }
    console.log(i);
}
// testScopeForVar();


function testScopeForLet() {

    for(let i = 1; i < 12; i++) {
        console.log(i);
    }
    console.log(i);
}
// testScopeForLet();


function testScopeForConst() {

    for(let i = 1; i < 12; i++) {
        console.log(i);
    }
    console.log(i);
}
// testScopeForConst();



// 2. 