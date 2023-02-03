class person
{
    constructor(name1,age)
    {
        this.name1=name1;
        this.age=age;
    }
    describe()
    {
        console.log(this.name1+","+this.age+" "+"years old");
    }
}
const a=new person("Jhon",19);
a.describe();