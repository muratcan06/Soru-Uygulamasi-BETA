class SoruGetir{
        /*
            Program By MURATCAN YANIK
        */
    constructor(){
        this.cikmisSorular = [];
        this.sorular = new Sorular();
    }
    soru(){
        let cevaplar = document.getElementsByClassName("isaret");
        for(let i = 0; i < cevaplar.length; i++){
            cevaplar[i].classList.remove("isaretlendi");
        } 
        document.getElementsByClassName("cevapla")[0].style.display = "none";
        if(this.cikmisSorular.length == this.sorular.questions.length){
            this.dogruIndex = [];
            this.yanlisIndex = [];

            for(let i = 0; i < this.sorular.questions.length; i++){
                if(this.sorular.questions[i].dogru == this.sorular.questions[i].verilenCevap){
                    this.dogruIndex.push(i);
                }else{
                    this.yanlisIndex.push(this.sorular.questions[i]);
                }
            }
            var dogruSayisi = this.dogruIndex.length;
            var yanlisSayisi = this.yanlisIndex.length;
            var secim;
            this.yanlisSorular = "";

            for(let i = 0; i < yanlisSayisi; i++){
                this.yanlisSorular += "<div style='margin-top: 20px;'>" + this.yanlisIndex[i].soru + "</div>";
                for(let j = 0; j < this.yanlisIndex[i].cevaplar.length; j++){
                    switch (j) {
                        case 0:
                            secim = "A) ";
                            break;
                        case 1:
                            secim = "B) ";
                            break;
                        case 2:
                            secim = "C) "
                            break;
                        case 3:
                            secim = "D) ";
                            break;
                        case 4:
                            secim = "E) ";
                            break;
                    }
                    this.yanlisSorular += "<div>" + secim + this.yanlisIndex[i].cevaplar[j] + "</div>";
                }
                this.dogruCvp = this.yanlisIndex[i].dogru;
                this.verilenCvp = this.yanlisIndex[i].verilenCevap;

                this.dogruSecim = "";
                this.verilenSecim = "";

                switch (this.dogruCvp) {
                    case 1:
                        this.dogruSecim = "A";
                        break;
                    case 2:
                        this.dogruSecim = "B";
                        break;
                    case 3:
                        this.dogruSecim = "C";
                        break;
                    case 4:
                        this.dogruSecim = "D";
                        break;
                    case 5:
                        this.dogruSecim = "E";
                        break;
                }

                if(this.verilenCvp == 1){
                    this.verilenSecim = "A";
                }
                if(this.verilenCvp == 2){
                    this.verilenSecim = "B";
                }
                if(this.verilenCvp == 3){
                    this.verilenSecim = "C";
                }
                if(this.verilenCvp == 4){
                    this.verilenSecim = "D";
                }
                if(this.verilenCvp == 5){
                    this.verilenSecim = "E";
                }

                this.yanlisSorular += "<div style='color:darkgreen;'>Doğru cevap : " + this.dogruSecim + "</div>";
                this.yanlisSorular += "<div style='color:darkred;'>Verdiğiniz cevap : " + this.verilenSecim + "</div>";
            }



            document.getElementsByClassName("soruEkrani")[0].removeChild(document.getElementsByClassName("soruImg")[0]);
            document.getElementsByClassName("soruEkrani")[0].removeChild(document.getElementsByClassName("soru")[0]);
            document.getElementsByClassName("soruEkrani")[0].removeChild(document.getElementsByClassName("cevaplarScreen")[0]);
            document.getElementsByClassName("soruEkrani")[0].remove();

            if(this.yanlisIndex.length < 1){
                this.ynls = "<h2 style='color: darkgreen;'>Hiç yanlışınız yok!</h2>";
            }else{
                this.ynls = "<h2 style='color: red'>Yanlış sorular : </h2>";
            }
            document.body.innerHTML = ` 
                <div class='soruEkrani'>
                ${this.sorular.questions.length} sorudan ${dogruSayisi} tane doğru cevabınız var. 
                ${this.ynls}
                ${this.yanlisSorular}
                <button onclick='location.reload()' style='padding:5px; margin-top:5px; cursor:pointer; background-color:yellow; border: 2px solid black;'>Testi Tekrarla</button>
                </div>
            `;
        }else{
            let operation = true;
            let randomIndex = Math.round(Math.random() * this.sorular.questions.length);
            if(randomIndex > 0){
                randomIndex--;
            }
            while(operation){
                if(!(this.cikmisSorular.includes(randomIndex))){
                    this.sorularKisa = this.sorular.questions[randomIndex];
                    document.getElementById("img").src = this.sorularKisa.img;
                    document.getElementsByClassName("soru")[0].innerHTML = this.sorularKisa.soru;
                    let cevaplar = document.getElementsByClassName("isaret");
                    for(let i = 0; i < cevaplar.length; i++){
                        cevaplar[i].getElementsByTagName("span")[0].innerHTML = this.sorularKisa.cevaplar[i];
                    } 
                    this.cikmisSorular.push(randomIndex);
                    operation = false;
                }else{
                    console.log("Bu çıkmış bir soru");
                    randomIndex = Math.round(Math.random() * this.sorular.questions.length);
                    if(randomIndex > 0){
                        randomIndex--;
                    }        
                }    
            }
        }
    }
    cevapEkle(verilenCevap){
        this.sorularKisa.verilenCevap = verilenCevap;
    }
}