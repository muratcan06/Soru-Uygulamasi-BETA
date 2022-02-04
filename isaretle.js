var cevapla = document.getElementsByClassName("cevapla")[0];
var soru = new SoruGetir();
soru.soru();

document.getElementsByClassName("cevaplar")[0].addEventListener("click", e => {
    if(e.target.classList.contains("isaret") || e.target.parentElement.classList.contains("isaret")){
        if(e.target.classList.contains("isaretlendi") || e.target.parentElement.classList.contains("isaretlendi")){
            if(e.target.parentElement.classList.contains("isaret")){
                e.target.parentElement.classList.remove("isaretlendi");
                cevapla.style.display = "none";
            }else{
                e.target.classList.remove("isaretlendi");
                cevapla.style.display = "none";
            }
        }else{
            if(e.target.parentElement.classList.contains("isaret")){
                let id = e.target.parentElement.id;
                let isaretlendi = document.getElementsByClassName("isaretlendi");
                let count = 0;
                let indexes = [];
                for(let i = 0; i < isaretlendi.length; i++){
                    count++;
                    indexes.push(i);
                }
                if(count > 0){
                    for(let i = 0; i < indexes.length; i++){
                        document.getElementsByClassName("isaretlendi")[indexes[i]].style.backgroundColor = "unset";
                        document.getElementsByClassName("isaretlendi")[indexes[i]].classList.remove("isaretlendi");
                    }
                    e.target.parentElement.classList.add("isaretlendi");
                    cevapla.style.display = "block";
                }else{
                    e.target.parentElement.classList.add("isaretlendi");
                    cevapla.style.display = "block";
                }

            }else{
                let id = e.target.id;
                let isaretlendi = document.getElementsByClassName("isaretlendi");
                let count = 0;
                let indexes = [];
                for(let i = 0; i < isaretlendi.length; i++){
                    count++;
                    indexes.push(i);
                }
                if(count > 0){
                    for(let i = 0; i < indexes.length; i++){
                        document.getElementsByClassName("isaretlendi")[indexes[i]].classList.remove("isaretlendi");
                    }
                    e.target.classList.add("isaretlendi")
                    cevapla.style.display = "block";
                }else{
                    e.target.classList.add("isaretlendi")
                    cevapla.style.display = "block";
                }
            }
        }
    }
});
cevapla.addEventListener("click", (e) => {
    let verilenCevap = document.getElementsByClassName("isaretlendi")[0].id;
    soru.cevapEkle(verilenCevap);
    soru.soru();
});