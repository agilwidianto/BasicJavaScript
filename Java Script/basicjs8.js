//inheritance is the main Pillar in Object oriented programming
//one class can inherit/acquire the properties, methods of another class
//the class which inherits the properties of other is known as (derived class, child class)
//the class whose properties are inherited is know as superclass
const Person = require('./basicjs7')
class Pet extends Person{
    get location(){
        return 'BlueCross'
    }
    constructor(firstName, lastName){
        //call parent class constructor
        super(firstName,lastName)
    }


}
let pet = new Pet('sam', 'san')
pet.fullName()
console.log(pet.location)