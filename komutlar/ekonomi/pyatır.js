module.exports = ({
    name: "pyatır",
    code: `
    $setUserVar[banka;$sum[$getUserVar[banka;$authorID];$message];$authorID]
    $setUserVar[para;$sub[$getUserVar[para;$authorID];$message];$authorID]
    $reply[$messageID;**Tam olarak $message$ banka hesabınıza yatırılmıştır.**]
    $onlyIf[$message>0;]
    $onlyIf[$message<$sum[$getUserVar[para];1];]
    $suppressErrors[]
    `
    })
    