// Object printer — Given let user = { name: "Amit", age: 28, city: "Bhiwani", role: "Developer" };, use for-in to print each pair as name -> Amit.

let user = {
    name: "Amit", 
    age: 28,
    city: "Bhiwani", 
    role: "Developer"
};

for(let key in user) {
    console.log(`${key} -> ${user[key]}`);
}