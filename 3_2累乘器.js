var readline=require('readline');

const r1=readline.createInterface({
   input:process.stdin,
   output:process.stdout
});
r1.question('请输入一个数字',function(a){
    var result=1;

    for (var i=1;i<=a;i++){
        result*=i;
    }
   console.log(a+'的阶乘是:'+result);
});
6