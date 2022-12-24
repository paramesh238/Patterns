// -----------------------------------------------------------------
// Pattern Output
// Input is 5
// 55555
// 4444
// 333
// 22
// 1
var n=parseInt(process.argv[2]);
for(let i=n;i>=1;i--)
{
    for(let j=1;j<=i;j++)
    {
        process.stdout.write(""+i+"");
    }
    process.stdout.write("\n");
}

// -----------------------------------------------------------------
// Pattern Output
// Input is 5
// 12345
// 1234
// 123
// 12
// 1
var n=parseInt(process.argv[2]);
for(let i=n;i>=1;i--)
{
    for(let j=1;j<=i;j++)
    {
        process.stdout.write(""+j+"");
    }
    process.stdout.write("\n");
}

// -----------------------------------------------------------------
// Pattern Output
// Input is 5
// *****
// ****
// ***
// **
// *
var n=parseInt(process.argv[2]);
for(let i=n;i>=1;i--)
{
    for(let j=1;j<=i;j++)
    {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}
