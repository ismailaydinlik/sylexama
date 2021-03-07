module.exports = {
    name: "pastebin",
    code: `$sendDM[$authorID;{color:DARKBLUE}{thumbnail:$authorAvatar}{description:Pastebinlediğin yazıya gitmek için [tıkla\\]($jsonRequest[https://normal-api.ml/pastebin?text=$message;url])! (VPN açmalısın.)}]
    $onlyIf[$message!=;]
    $suppressErrors[]`
}