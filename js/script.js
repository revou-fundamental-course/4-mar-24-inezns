let json = "{bad json}";
try{
    let user = JSON.parse(json);
}catch(err){
    console.log("error name:", err.name);
    console.log("error message:", err.message);
}
let age = document.getElementById("age").value;
let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;
let HitungBMI_button = document.getElementById("HitungBMI_button")
let BMIResult = document.getElementById("BMIResult");

HitungBMI_button.addEventListener("click",function()){
    if(isNaN(weight,height)||weight==''||height==''){
        weight.value = 0;
        height.value = 0;
        BMIResult.innerHTML = 0;
    }else{
        BMIResult.innerHTML = weight / ((height*height/10000)) ;
    }
}




