//object is collection of properties

let person = {
    firstName:'Tim',
    lastName:'Joe',
    age: 24,
    fullName: function(){
        console.log(this.firstName+this.lastName)
    }
}
console.log(person.fullName())
console.log(person.lastName)
console.log(person['lastName'])
person.firstName = 'Tim Dame'
console.log(person.firstName)
person.gender = 'male'
console.log(person)
delete person.gender
console.log(person)
console.log('gender' in person)
//print all the values of the javascript
for(let key in person){
    console.log(person[key])
}

