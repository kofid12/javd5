 // Car Object
 const car = {
     name: "Car1",
     brand: "Toyota",
     model: "Camry",
     type: "Sedan",
     color: "Blue",
     weight: 1500,
     age: 3,
     displayInfo: function() {
         console.log(`Car Info: ${this.name} - ${this.color} ${this.brand} ${this.model}`);
         document.write(`<p>Car Info: ${this.name} - ${this.color} ${this.brand} ${this.model}</p>`);
     }
 };

 // Animal Object
 const animal = {
     name: "Animal1",
     type: "Lion",
     color: "Golden",
     weight: 200,
     age: 5,
     makeSound: function() {
         console.log(`Animal Sound: Roar! ${this.name} is a ${this.color} ${this.type}.`);
         document.write(`<p>Animal Sound: Roar! ${this.name} is a ${this.color} ${this.type}.</p>`);
     }
 };

 // Person Object
 const person = {
     name: "Person1",
     type: "Human",
     age: 25,
     gender: "Male",
     introduce: function() {
         console.log(`Person Introduction: Hi, I'm ${this.name}, a ${this.age}-year-old ${this.gender}.`);
         document.write(`<p>Person Introduction: Hi, I'm ${this.name}, a ${this.age}-year-old ${this.gender}.</p>`);
     }
 };

 // Call methods to display information
 car.displayInfo();
 animal.makeSound();
 person.introduce();