module.exports = {
    name: "transfer",
    code: `$setUserVar[para;$sub[$getUserVar[para];$noMentionMessage]]
    $setUserVar[para;$sum[$getUserVar[para;$mentioned[1]];$noMentionMessage];$mentioned[1]]
    $reply[$messageID;{title:Transfer Başarılı.}{description:**$username[$mentioned[1]] kullanıcısına başarıyla $noMentionMessage$ gönderildi.**}{footer:??ekonomi}{thumbnail:$authorAvatar}{color:DARKBLUE}]
    $onlyIf[$message<sum[$getUserVar[para];1];]
    $onlyIf[$message>0;]
    $argsCheck[>1;]
    $argsCheck[>2;]
    $suppressErrors[]`
}