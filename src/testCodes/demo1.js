class Person {
    constructor(name){
        this.name = name;
    }
    
    sayHi(){
        console.log('hi, i\'m:', this.name);
    }
}

const zs = new Person('zs');
zs.sayHi();
