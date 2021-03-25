let arr = [];
for(i = 0; i <= 4; i++)
{
    arr = [];
    for(j = 0; j <= i; ++j)
    {
        arr.push('*');
    }
    console.log(arr.join(' '));
}