//1- Sipariş bilgilerini object içine saklayınız.
//2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız.( kda : %18)
//3- Tüm siparişlerin Kdv dahil toplam ödenen ücretini hespalayınız.


let siparis1= 
{
    "siparis_id" : 101,
    "siparis_tarihi" : "31.12.2022",
    "ödeme_sekli" : "kredi_karti",
    "kargo_adresi" : "yahya kemal mah Kocaeli/izmit",
    "satilan_urunler" :
    {
        "urun_id" : 5,
        "urun_basligi" : "iphone13ProMax",
        "urunUrl" : "https//abc.com/iphone-pro-max-13",
        "urunFiyati" : 22000
    },
    "musteri": 
    {
        "musteri_id" : 12
    },
    "satici" : 
    {
        "firma_id" : 34,
        "firma_adi" : "Apple_Türkiye" 
    }
   
};



let siparis2= 
{
    "siparis_id" : 101,
    "siparis_tarihi" : "30.12.2022",
    "ödeme_sekli" : "kredi_karti",
    "kargo_adresi" : "yahya kemal mah Kocaeli/izmit",
    "satilan_urunler" :
    {
        "urun_id" : 6,
        "urun_basligi" : "iphone13ProMax",
        "urunUrl" : "https//abc.com/iphone-pro-max-13",
        "urunFiyati" : 25000
    },
    "musteri": 
    {
        "musteri_id" : 12
    },
    "satici" : 
    {
        "firma_id" : 34,
        "firma_adi" : "Apple_Türkiye" 
    }
   
};


let siparisler = [siparis1, siparis2];

let kdvliFiyat1 = (siparis1.satilan_urunler.urunFiyati)*(0,18) + siparis1.satilan_urunler.urunFiyati ;
let kdvliFiyat2 = (siparis2.satilan_urunler.urunFiyati)*(0,18) + siparis2.satilan_urunler.urunFiyati ;

console.log("birinci urunun kdvli fiyati: " + kdvliFiyat1);
console.log("ikinci urunun kdvli fiyati: " + kdvliFiyat2);

let toplam = kdvliFiyat1 + kdvliFiyat2;

console.log("kdv li toplam fiyatlar: " + toplam+ " lira");













