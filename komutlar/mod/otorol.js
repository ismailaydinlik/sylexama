module.exports = {
    name: "otorol",
    code: `$reply[$messageID;{title:$servername}{description:**Otorol sistemi başarı ile ayarlandı!**
Verilecek Rol: <@&$mentionedRoles[1]>
Log kanalı: <#$mentionedChannels[1]>
Mesaj: $getServerVar[otorolmsj]}{color:DARKBLUE}{thumbnail:$serverIcon}{footer:Otorol mesajını ayarlamak için ??otorolmsj <mesaj>}]
$setServerVar[otorol;$mentionedRoles[1]]
$setServerVar[otorolkanal;$mentionedChannels[1]]
$onlyIf[$mentionedRoles[1]!=;**<@$authorID>, bir rol etiketlemelisin.**]
$onlyIf[$mentionedChannels[1]!=;**<@$authorID>, bir kanal etiketlemelisin.**]
$onlyPerms[manageroles;]
$suppressErrors[]`
}