module.exports = {
    name: "hoşgeldinkanal",
    code: `$reply[$messageID;**Sunucunuzun hoşgeldin kanalı <#$mentionedChannels[1]> olarak ayarlandı.**]
    $setServerVar[hoşgeldinkanal;$mentionedChannels[1]]
    $onlyIf[$mentionedChannels[1]!=;]
    $onlyPerms[managechannels;]
    $suppressErrors[]
`
}
