module.exports = {
    name: "otorolmsj",
    code: `$reply[$messageID;**Sunucunuzun otorol mesajı $message olarak ayarlandı.**]
    $setServerVar[$message;otorolmsj]
    $onlyIf[$message!=;]
    $onlyPerms[manageroles;]
    $suppressErrors[]`
}