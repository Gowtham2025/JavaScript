function is_natural(n) 
{
	if (typeof n != 'number')
    { 
	    return 'Not a number'; 
    }    
	else
    {		
	 return (n >= 0.0) && (Math.ceil(n) == n) && n != Infinity;
	}
}    
console.log(is_natural(-15));
console.log(is_natural(1));
console.log(is_natural(10.22));
console.log(is_natural(10/0));
console.log(is_natural("the"));
