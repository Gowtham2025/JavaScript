function person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {
        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
        }
        innerFunc();
    }
}
const x = new person();
x.sayName();