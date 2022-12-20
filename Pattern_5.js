// pattern 5
//   *****
//    ***
//     *
//    ***
//   *****

var n = 5;
var x = 1;
for(let i=1;i<=n;i++){
    for(j=1;j<=n;j++){
        if(j>=x && j<=n-x+1){
            process.stdout.write("*");
        }
        else{
            process.stdout.write(" ");  
        }
    }
    if(i<=parseInt(n/2))
        x++;
    else
        x--;
    process.stdout.write("\n")
}
