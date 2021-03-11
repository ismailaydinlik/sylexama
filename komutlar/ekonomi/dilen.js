module.exports = ({
    name: "dilen",
    code: `$setUserVar[para;$sum[$getUserVar[para;$authorID];$random[10;200]];$authorID]
   $reply[$messageID;{author:$username:$authorAvatar}{thumbnail:$authorAvatar}{description:**$randomText[Toxy;Enes Batur;Pythonic;Berat Albayrak;Recep Tayyip Erdoğan;Kuaty;uy] sana para verdi ve $random[10;200]$ kazandın.**}
{color:DARKBLUE}]
    $cooldown[1m;**Tekrar dilenmeden önce lütfen 1 dakika bekleyin.**]
    $suppressErrors[]
    `
    })
    