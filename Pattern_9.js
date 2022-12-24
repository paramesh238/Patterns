// Pattern Output
// Input is 5
//     1
//    22
//   333
//  4444
// 55555

var n =5;
for(let i=1;i<=n;i++)
{
    for(let j=1;j<=n;j++)
    {
        if(j<=n-i)
        {
            process.stdout.write(" ");
        }
        else
        {
            process.stdout.write(""+i+"");
        }  
    }
    process.stdout.write("\n");
}

// -----------------------------------------------------------------
// Pattern Output
// Input is 5
//     5
//    45
//   345
//  2345
// 12345
var n =5;
for(let i=1;i<=n;i++)
{
    for(let j=1;j<=n;j++)
    {
        if(j<=n-i)
        {
            process.stdout.write(" ");
        }
        else
        {
            process.stdout.write(""+j+"");
        }  
    }
    process.stdout.write("\n");
}

// -----------------------------------------------------------------
// Pattern Output
// Input is 5
//     *
//    **
//   ***
//  ****
// *****
var n =5;
for(let i=1;i<=n;i++)
{
    for(let j=1;j<=n;j++)
    {
        if(j<=n-i)
        {
            process.stdout.write(" ");
        }
        else
        {
            process.stdout.write("*");
        }  
    }
    process.stdout.write("\n");
}
