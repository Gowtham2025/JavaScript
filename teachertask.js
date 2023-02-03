class teacher
{
    constructor(name1,age,gender)
    {
        this.a=name1;
        this.b=age;
        this.c=gender;
    }
    getdata()
    {
        console.log(this.a,this.b,this.c);
    }
}
class person extends teacher
{
    constructor(name1,age,gender,city,mobileno)
    {
    super(name1,age,gender);
    this.d=city;
    this.e=mobileno;
    }
    display()
    {
        console.log(super.getdata()+this.d+this.e);
    }
}
const f=new person("Shiva",26,"Male","Covai",7845528900);
f.display();