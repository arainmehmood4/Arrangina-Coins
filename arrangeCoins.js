var arrangeCoins = function(n) 
{
    if(n==0)
        return n;
    var coins=n;
    for(var i=1; i<=n; i++)
        {
            coins=coins-i;
            if(coins < i+1)
                {
                    return i;
                }
        }
};
console.log(arrangeCoins(8));