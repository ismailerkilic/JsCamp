console.log("Merhaba Kodlama.io")


// Js Type safe değildir.
let dolarDun = 9.20
let dolarBugun = 9.30


{
    let dolarDun =9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

// değişken tanımlarken eğer array ise çoğul kullanmalıyız
// Değişken isimlendirmeleri PascalCase, camelCase
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]
console.log(konutKredileri)

console.log('<ul>')
for(let i = 0; i<konutKredileri.length;i++)
{
console.log("<li>"+konutKredileri[i]+"</li>")
}

console.log('</ul>')
