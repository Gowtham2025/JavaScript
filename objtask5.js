const stu={
    user:"Ram",
    set changeName(newname)
    {
        return this.user=newname;
    }
};
stu.user="Vinu";
console.log(stu.user);