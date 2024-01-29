var words = [
"çanta","tahta","çekıç","radyo","kağıt","sehpa","dolap","kalem","kaşık","bıçak","tabak","tablo","lamba","tepsı","kılıt",
"rende","ayraç","makas","kazak","hırka","ceket","kemer","fular","kaban","yılan","köpek","domuz","kumru","akrep","serçe",
"tavuk","horoz","hındı","şahın","koyun","katır","manda","tılkı","geyık","kırpı","sadık","zayıf","sakın","yalın","alçak",
"rezıl","ebedı","ezelı","vazıh","fakır","asabı","ferah","güzel","nadır","nazık","kıbar","sabıt","yakın","derın","temız",
"gızlı","kutlu","kolay","basıt","beşır","gamlı","latıf","ıçsel","zebun","cımrı","bıber","helva","gazoz","hurma","salça",
"cevız","badem","kekık","armut","marul","soğan","kıraz","çılek","vışne","kavun","bamya","susam","tahın","reçel","ayran",
"gurur","kıbır","sınır","ahlak","madde","anlam","namus","efsun","hıtap","kelam","kanıt","delıl","batıl","yalan","doğru",
"yüzey","çıkış","gırış","defın","kabır","gömüt","mezar","bahçe","hotel","antre","salon","kıler","banyo","beton","doruk",
"dahıl","davul","kabul","dığer","ötekı","daima","şımdı","yarın","bugün","evvel","sonra","kayıt","satır","mısra","roman",
];

var selectedWord = words[Math.floor(Math.random() * 135)];
selectedWord = selectedWord.toUpperCase();
var selectedWordArray = selectedWord.split(""); 
console.log(selectedWord);
var row = 0;
function check(){
    let i;
    let k;
    let j;
    let f;
    let t;
    
    var currentWord = document.getElementById('checkBox').value;
    currentWord.toLowerCase();
    console.log(currentWord);
    var result = words.indexOf(currentWord);
    currentWord = currentWord.toUpperCase();
    console.log(typeof currentWord)
    if(currentWord==selectedWord){
        
        panel("Tebrikler Kazandınız");
    }
    console.log(result);
    let currentArray = currentWord.split("");
    
    
    
    
 

    console.log(currentArray);
    row++;
    if(row==6 && currentWord!=selectedWord){
        panel(`Kaybettiniz. Doğru Kelime ${selectedWord}.`);
    }
    console.log(row);
    for(i = 1 ; i <= 5; i++){
        if(result == -1){
            
            panel("Lütfen Geçerli Kelime Girin");
            row--;
            break;
        }
        debugger;
        document.getElementById(`${row}${(i)}`).innerHTML = currentArray[i - 1];
        
       
        for(j = 0; j<6; j++){
            if(currentArray[i -1] != selectedWordArray[j]){
                document.getElementById(`${row}${i}`).style.backgroundColor = "grey";
                document.getElementById(`${currentArray[i -1]}`).style.backgroundColor = "grey";
            }
        }
        for(j = 0; j<6; j++){
            if(currentArray[i -1] == selectedWordArray[j]){
                document.getElementById(`${row}${i}`).style.backgroundColor = "#ff4000";
                document.getElementById(`${currentArray[i -1]}`).style.backgroundColor = "#ff4000";
                /* Rengi Sarı Yap */
            }
        }
        for(j = 0; j<6; j++){
            if(currentArray[i -1] == selectedWordArray[j] && (i - 1) == j){
                document.getElementById(`${row}${i}`).style.backgroundColor = "green";
                document.getElementById(`${currentArray[i -1]}`).style.backgroundColor = "green";
            }
        }  
    }
 
}

function panel(sonuçWords){
    var div= document.createElement("div");
            div.textContent= sonuçWords;
            div.classList="sonuçCss";
            sonuç.appendChild(div);
}

