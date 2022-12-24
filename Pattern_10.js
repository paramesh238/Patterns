// Pattern Output
// Input is 5
// 55555
//  4444
//   333
//    22
//     1

var n =5;
for(let i=n;i>=1;i--)
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
// 12345
//  2345
//   345
//    45
//     5
var n =5;
for(let i=n;i>=1;i--)
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
// *****
//  ****
//   ***
//    **
//     *

var n =5;
for(let i=n;i>=1;i--)
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

// -----------------------------------------------------------------
//                                    OR
// -----------------------------------------------------------------
var n =5;
for(let i=n;i>=1;i--)
{
    let stars = i;
    let spaces = n-i;
    while(spaces>0)
    {
        process.stdout.write(" ");
        spaces--;
    }
    while(stars>0)
    {
        process.stdout.write("*");
        stars--;
    }
    process.stdout.write("\n");
}
// -----------------------------------------------------------------
