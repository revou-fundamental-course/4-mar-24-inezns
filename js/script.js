let age = document.getElementById("age");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let HitungBMI_button = document.getElementById("HitungBMI_button")
let BMIResult = document.getElementById("BMIResult");
let BMIDescription = document.getElementById("BMIDescription");
let BMITitle1 = document.getElementById("BMITitle1");
let BMITitle2 = document.getElementById("BMITitle2");

HitungBMI_button.addEventListener("click",function(){
    if(isNaN(weight.value,height.value, age.value)||weight.value==''||height.value==''||age.value==''){
        BMIResult.innerHTML = 0;
    }else{
        BMIResult.innerHTML = weight.value / ((height.value*height.value/10000)) ;
        BMIResult.value = BMIResult.innerHTML;
        if(BMIResult.value >= 30){
            BMITitle1.innerHTML = "Obesitas Tingkat 2";
            BMITitle2.innerHTML = "Hasil BMI diatas 30";
            BMIDescription.innerHTML = "Anda berada dalam kategori Obesitas Tingkat 2. Penderita obesitas memiliki risiko terkena penyakit komorbid yang lebih tinggi. Maka dari itu, Anda sebaiknya menurunkan berat badan dengan melakukan kombinasi diet dan olahraga rutin yang sesuai dengan arahan dokter dan ahli gizi.";
        }else if(BMIResult.value >= 25){
            BMITitle1.innerHTML = "Obesitas Tingkat 1";
            BMITitle2.innerHTML = "Hasil BMI diantara 25 dan 29.9";
            BMIDescription.innerHTML = "Anda berada dalam kategori Obesitas Tingkat 1. Penderita obesitas memiliki risiko terkena penyakit komorbid yang lebih tinggi. Maka dari itu, Anda sebaiknya menurunkan berat badan dengan melakukan kombinasi diet dan olahraga rutin yang sesuai dengan arahan dokter dan ahli gizi.";
        }else if(BMIResult.value >= 23){
            BMITitle1.innerHTML = "Berat Badan Berlebih";
            BMITitle2.innerHTML = "Hasil BMI diantara 23 dan 24.9";
            BMIDescription.innerHTML = "Anda berada dalam kategori Berat Badan Berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
        }else if(BMIResult.value >= 18.5){
            BMITitle1.innerHTML = "Berat Badan Ideal";
            BMITitle2.innerHTML = "Hasil BMI diantara 18.5 dan 22.9";
            BMIDescription.innerHTML = "Anda berada dalam kategori Berat Badan Ideal. Anda sudah berada di jalan yang benar dalam menjaga berat badan yang sehat. Cari tahu mengenai tips menjaga berat badan yang sehat, lihat daftar makanan sehat dan aktivitas fisik yang baik untuk Anda.";
        }else{
            BMITitle1.innerHTML = "Berat Badan Kurang";
            BMITitle2.innerHTML = "Hasil BMI dibawah 18.5";
            BMIDescription.innerHTML = "Anda berada dalam kategori Berat Badan Kurang. Memiliki badan yang kurus bisa menjadi tanda Anda tidak cukup makan atau Anda mungkin sedang sakit. Jika Anda mendapati kekurangan berat badan, dokter dapat membantu Anda dalam meningkatkan berat badan yang aman dan sehat.";
        }
    }
})




