module.exports = ({
    name: "pçek",
    code: `
    $setUserVar[banka;$sub[$getUserVar[banka;$authorID];$message];$authorID]
    $setUserVar[para;$sum[$getUserVar[para;$authorID];$message];$authorID]
    $reply[$messageID;**Tam olarak $message$ banka hesabınızdan çekilmiştir.**]
    $onlyIf[$message>0;]
    $onlyIf[$message<$sum[$getUserVar[banka];1];]
    $suppressErrors[]
    `
    })
    