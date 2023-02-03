class shape
{
    constructor(name1, side1, sidelength)
    {
        this.name1=name1;
        this.side1=side1;
        this.sidelength=sidelength;
    }
    calcPerimeter() 
    {
        var c=this.side1*this.sidelength;
        console.log(this.name1+" "+c);
    }
}
const a=new shape("Square",4,5);
a.calcPerimeter();
const b=new shape("Triangle",3,3);
b.calcPerimeter();