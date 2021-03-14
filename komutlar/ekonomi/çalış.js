module.exports = ({
    name: "çalış",
    code: `$setUserVar[para;$sum[$getUserVar[para;$authorID];$random[100;500]];$authorID]
   $reply[$messageID;{author:$username:$authorAvatar}{thumbnail:$authorAvatar}{description:**$randomText[Yayıncı;Doktor;Yazılımcı;Mühendis;Öğretmen;Cumhurbaşkanı;SyleX Kafede Çırak;SyleX Kafede Patron;SyleX Kafede Aşçı] olarak çalıştın ve $random[100;500]$ kazandın.**}
{color:DARKBLUE}]
    $cooldown[1m;**Tekrar çalışmadan önce lütfen 1 dakika bekleyin.**]
    $suppressErrors[]
    `
    })
    