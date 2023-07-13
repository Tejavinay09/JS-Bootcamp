function checking(){
    let age = document.getElementById('age')
    if (age.value>=18){
        document.getElementById('eligibility').innerText = "You are eligible to vote."
    }
    else {
        document.getElementById('eligibility').innerText = "You are not eligible to vote yet."
    }

}

function multiplication(){
    const num=document.getElementById("num")
    const val=num.value
    let out=""
    for(let i=1; i<=10; i++){
        let multi=val*i
        console.log(multi)
        out = out+ val + "*" + i + "=" + i*num.value + "</br>"
    }
    document.getElementById('table').innerHTML=out
}

function dollarsToRupees(){
    let dollar = document.getElementById('dollar');
    let rupees = dollar.value * 74.5;
    document.getElementById('result').innerText = rupees
}

