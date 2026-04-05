// for in loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    // console.log(key);  // this will return the keys name
    // console.log(`${key} shortcust is for ${myObject[key]}`); 
}
    
const programming = ["js", "rb", "py", "java", "cpp"]
for(const key in programming) {
    // console.log(key);  // return the array keys i.e 0, 1, 2, 3, 4....
    // console.log(programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('US', "Unites States of America")
map.set('FR', "France")
map.set('IN', "India")  // this will not print again because it already exits
for (const key in map) {
    console.log(key)  // gives no output because map is not iteratable
}

