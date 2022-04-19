function bentuk(tinggi,tipeX){
    var hasil = ""
    var colors = [
        'aqua', 'blueviolet', 'chocolate',
        'yellow', 'white', 'teal'
    ];

    var random_color = colors[Math.floor(Math.random() * colors.length)];

    document.getElementById('hasil').style.color = random_color

    if(tipeX == 1){
            for(let baris = 1; baris <= tinggi; baris++){
                for (let kolom = 1; kolom <= baris; kolom++){
                    hasil+=" * "
                }
                    hasil+= "<br/>"
            }
            document.getElementById('hasil').style.textAlign='left'
    }
    else if(tipeX == 2){
            for(let baris = 1; baris <= tinggi; baris++){
                for (let kolom = baris; kolom <= tinggi; kolom++){
                        hasil+=" * "
                    }
                        hasil+= "<br/>"
            }
            document.getElementById('hasil').style.textAlign='left'
    }
    else if(tipeX == 3){
            for(let baris = 1; baris <= tinggi; baris++){
                for (let kolom = baris; kolom <= tinggi; kolom++){
                        hasil+="&nbsp"
                    }
                    for (let z = 1; z <= baris; z++){
                    hasil+="* "
                    }
                        hasil+="<br/>"
            }
            document.getElementById('hasil').style.textAlign='right'
    }
    else if(tipeX == 4){
        for (var i=1;i<=tinggi;i++){
            for (var j=1;j<=i;j++){
                hasil+="&nbsp"
            }
            for (var k=i;k<=tinggi;k++){
                hasil+=" *"
            }
            hasil+="<br>"
        }
        document.getElementById('hasil').style.textAlign='right'
    }
    else if(tipeX == 5){
        for (var i=1;i<=tinggi;i++){
            for (var j=i;j<=tinggi;j++){
                hasil+=" "
            }
            for (var k=1;k<=i;k++){
                hasil+=" *"
            }
            for (var l=1;l<=i-1;l++){
                hasil+=" *"
            }
            hasil+="<br>"
        }
        document.getElementById('hasil').style.textAlign='center'
    }
    else if(tipeX == 6){
        for (let baris=1;baris<=tinggi;baris++){
            for (let j=1;j<=baris;j++){
                hasil+=" ";
            }
            for (let k=baris;k<=tinggi;k++){
                hasil+=" *";
            }
            for (let l=baris+1;l<=tinggi;l++){
                hasil+=" *";
            }
            hasil+="<br>";
        }
        document.getElementById('hasil').style.textAlign='center'
    }
    else if(tipeX == 7){
            for(let baris = 1; baris <= tinggi; baris++){
                for(let kolom = 1; kolom <= tinggi+10; kolom++){
                    hasil+="*";
                }
                    hasil+="<br/>";
            }
    }
            document.getElementById('hasil').innerHTML= hasil
}

function hasil(tipe){
    // tipe.preventDefault()
    var tinggi = parseInt(document.getElementById('tinggi').value);
    var tipeX = parseInt(tipe)
    if(tinggi <= 15){
        bentuk(tinggi,tipeX)
    }
    else{
        document.getElementById('hasil').style.textAlign="center"
        document.getElementById('hasil').style.color="red"
        document.getElementById('hasil').innerHTML = "Error"
        // else{
    }
    // }
}

function resett(){
    document.getElementById("tinggi").reset();
}