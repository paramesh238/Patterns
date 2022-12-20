// Pattern1
// *
//  *
//   *
//    *

var i, j, n=5;
for(i = 1; i <= n; i++){
    for(j = 1; j <= i; j++){
        if(i == j){
            process.stdout.write("*");
        }
        else{
            process.stdout.write(" ");
        }
    }
    process.stdout.write("\n");
}
