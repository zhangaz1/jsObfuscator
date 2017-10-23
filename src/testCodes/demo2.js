function Person(name) {
        this.name = name;
}

Person.prototype.sayHi = function(){
    console.log('hi, i\'m:', this.name);
}

const zs = new Person('zs');
zs.sayHi();
