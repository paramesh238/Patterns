// Pattern 2
//     *
//    *
//   *
//  *
// * 
var n=5;
var x = n;
for(let i = 1; i <= n; i++){
    
    for(let j = 1; j <= x; j++){
        if(j <= n-i){
            process.stdout.write(" ");
        }
        else{
            process.stdout.write("*");
        }
    }
    process.stdout.write("\n");
    x--;
}
