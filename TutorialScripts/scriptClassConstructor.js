function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;

    this.hello = function() {
        console.log('Hello ' + this.name);
    };
}

User.prototype.exit = function(name) {
    console.log('User ' + this.name + ' are go out')
}

let ivan = new User('Ivan', 31),
    kate = new User('Kate', 28);

console.log(ivan);
console.log(kate);

kate.hello();

ivan.exit();