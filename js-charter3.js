/* 数据类型：
1、布尔类型    2、数值类型    3、字符串类型    4、null
5、undefined  6、object      7、symbol */



/* 布尔类型数据、数据转化方法 */
window.onload = function ec() {
  console.log(Boolean(null)); //false
  console.log(Boolean(undefined)); //false
  console.log(Boolean(0)); //false
  console.log(Boolean("")); //false
  console.log(Boolean(false)); //false
  /* 不要对浮点数数据转化，这个没有意义 */
  var a = 0.1,
    b = 0.2;
  console.log(Boolean(a + b == 0.3)); //false
  var c = 0.15,
    d = 0.15;
  console.log(Boolean(c + d == 0.3)); //true


  /* 数值类型、数据转化方法 */
  var e = Number.MIN_VALUE,

    f = Number.MAX_VALUE;
  var g = null;
  g = e + f;
  console.log(isFinite(g)); //true
  console.log(isFinite(f * 2)); //false
  console.log(Number("011")); //11
  console.log(Number("+011")); //11
  console.log(Number("1.1")); //1.1
  console.log(Number("01.1")); //1.1
  console.log(Number("0.11")); //0.11j
  console.log(Number("0xa")); //10
  console.log(Number("")); //0
  console.log(Number(" ")); //0
  console.log(Number(" a")); //NaN




  console.log(parseInt(" a")); //NaN
  console.log(parseInt(" 1")); //1
  console.log(parseInt("1")); //1
  console.log(parseInt("-1")); //-1

  var age = 18;
  console.log(age++); //18

  var s1 = "2"; //debugger 得到的值是3
  s1++; // 如果用输出方式得到的值是2，为什么？？？不是说后置不会立即执行自增么？




  var ob = {
    name: "xiaomizhou",
    age: 18
  }
  console.log(!ob); //false



  console.log("xiaomizhou" && "zihua"); //zihua



  /*   var iy = true,
    /* var re = true && r;
    console.log(re); */



  console.log("1" || true); //1
  console.log("9" * "-2"); //-18
  console.log("1" * "+2"); //2
  console.log(NaN * +NaN); //NaN
  console.log(+66 / 11); //6
  console.log(+66 / 0); //Infinity
  console.log(+0 / 11); //0



  console.log(+0 + -0); //0
  console.log(String(null) + String(undefined)); //nullundefined


  console.log("5" - "2"); //3

}