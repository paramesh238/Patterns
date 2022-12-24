// Pattern Output
// Input is 5
// 1
// 12
// 123
// 1234
// 12345
var n=parseInt(process.argv[2]);
for(let i=1;i<=n;i++)
{
    for(let j=1;j<=i;j++)
    {
        process.stdout.write(""+j+""); // argument must be string
    }
    process.stdout.write("\n");
}

// -----------------------------------------------------------------
// Pattern Output
// Input is 5
// 1
// 22
// 333
// 4444
// 55555
var n=parseInt(process.argv[2]);
for(let i=1;i<=n;i++)
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
// *
// **
// ***
// ****
// *****
var n=parseInt(process.argv[2]);
for(let i=1;i<=n;i++)
{
    for(let j=1;j<=i;j++)
    {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}
