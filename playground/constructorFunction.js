function Person(name, age){
    this.name = name;
    this.age = age;
}

const person = new Person("rutgo", 28);

console.log(person.name);
console.log(person.age)

function Vue(el){
    this.el = el;
    this.logText = function () {
        console.log('hello');
    }
}

const vm = new Vue('#app');
console.log(vm.el);
vm.logText();
