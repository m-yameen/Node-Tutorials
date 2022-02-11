//Default Parameters
var add = function (a, b) {
    if (a === void 0) { a = 10; }
    if (b === void 0) { b = 20; }
    console.log(a + b);
};
//Rest Parameters
var summ = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var sum = 0;
    num.forEach(function (element) {
        sum = sum + element;
    });
    console.log(sum);
};
//Optional Parameters
var mul = function (nam, er, mail) {
    console.log("Name :", nam);
    console.log("Er :", er);
    if (mail) {
        console.log("Mail :", mail);
    }
};
mul('Abc', 123);
mul('Abc', 123, "Abc@gmail.com");
add();
summ(10, 20, 20, 30);
summ(1, 2, 3, 4, 5, 6);
