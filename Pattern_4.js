// Pattern 4
//    *
//   * *
//  *   *
// *     *
//  *   *
//   * *
//    * 

var n = 5;
var px = parseInt(n/2)+1; 
for(let i=1;i<=n;i++)
{
    for(let j=1;j<=n;j++)
    {
        if(j==px || j==n-px+1){
            process.stdout.write("*");
        }
        else{
            process.stdout.write(" ");
        }
    }
    if(i <= parseInt(n/2))
        px--;
    else
        px++;
    process.stdout.write("\n");
}
