// Pattern 6 (Fibnocci Series)
// 1
// 1  2
// 3  5  8
// 13 21 34

var n = 4;
var t1 = -1, t2 = 0, t3;
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        t3 = (t1+t2);
        t1 = t2;
        t2 = t3;
        process.stdout.write(""+Math.abs(t3)+" ");
    }
    process.stdout.write("\n");
}
