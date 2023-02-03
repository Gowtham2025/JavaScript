function palindrome(string)
{
    let a=string.split('');
    let b=a.reverse();
    let c=b.join('');
    if(c==string)
    {
        console.log("Is Palindrome");
    }
    else
    {
        console.log("Is Not Palindrome");
    }
    
}
palindrome("Fool");
palindrome('$22_|1372^2731|_22');
palindrome('12%^&2');
palindrome('234%$$%432');
palindrome('1234'); 
palindrome('aba%$aba');
palindrome('Aba%$aba');