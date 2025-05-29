const dog = {
    name: 'Max',
    breed: 'Dachshund',
    age: 5,
    weightInPounds: 12,
    eat: function() {
        console.log('Chomp!');
    },
    bark() {
        console.log('Woof!');
    }
};


function Dog(name, breed, age, weightInPounds) {
    
    this.name = name;
    this.breed = breed;
    this.age = age;

    this.eat = function() {
        console.log(this.name + ': Chomp!');
    },

    this.bark = function() {
        console.log(this.name + ': Woof!');
    }
}