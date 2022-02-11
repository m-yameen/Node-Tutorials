//Default Parameters
var add = (a=10,b=20)=>{
    console.log(a+b)
}

//Rest Parameters
var summ = (...num:number[])=>{
    var sum :number=0;
    num.forEach(element => {
        sum=sum + element;
    });
    console.log(sum)
}


//Optional Parameters
var mul = (nam:string,er:number,mail?:string)=>{
    console.log("Name :",nam)
    console.log("Er :",er)

    if(mail)
    {
        console.log("Mail :",mail)
    }
}

mul('Abc',123);
mul('Abc',123,"Abc@gmail.com");
add();
summ(10,20,20,30);
summ(1,2,3,4,5,6);
