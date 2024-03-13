// let json = "{bad json}";
// try{
//     let user = JSON.parse(json);
// }catch(err){
//     console.log("error name:", err.name);
//     console.log("error message:", err.message);
// }
let age = document.getElementById("age");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let HitungBMI_button = document.getElementById("HitungBMI_button")
let BMIResult = document.getElementById("BMIResult");

HitungBMI_button.addEventListener("click",function(){
    // console.log(weight.value=='');
    // console.log(height.value=='');
    // console.log(isNaN(weight.value), isNaN(height.value), weight.value, height.value);
    if(isNaN(weight.value,height.value)||weight.value==''||height.value==''){
        console.log('masuk true');
        weight.value = 0;
        height.value = 0;
        BMIResult.innerHTML = 0;
    }else{
        BMIResult.innerHTML = weight.value / ((height.value*height.value/10000)) ;
    }
})




