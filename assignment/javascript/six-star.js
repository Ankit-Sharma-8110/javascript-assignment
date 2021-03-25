let arr = [];

for(i = 0; i < 6; i++)
{
    arr = [];
    for(k = 1; k <(6-i); k++)
    {
        arr.push(' ');
    }
    for(j = 0; j <= i; ++j)
    {
        arr.push('*')
    }
    console.log(arr.join(' '));
}