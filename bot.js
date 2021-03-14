const ayarlar = require("./ayarlar.json")
const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: ayarlar.token, 
prefix: [ayarlar.prefix, "$getServerVar[prefix]", "sylex ", "SYLEX ", "bot "],
fetchInvites: true
})
 
bot.onMessage()
 
const fs = require('fs')

const folders = fs.readdirSync("./komutlar/")

for (const files of folders) {
const folder = fs.readdirSync(`./komutlar/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./komutlar/${files}/${commands}`) 
bot.command({
name: command.name,
aliases: command.aliases, 
code: command.code
})
}
}

bot.variables({
    prefix: "",
    afk: "kapalı",
    afksebep: "",
    para: "0",
    banka: "0",
    xp: "0",
    level: "1",
    otorol: "",
    saasmsj: "",
    saas: "kapalı",
    otorolmsj: "Başarıyla rol verildi. Sunucumuza hoşgeldin.",
    otorolkanal: "",
    hoşgeldinkanal: ""
  })

bot.status({
text: "??yardım", 
type: "PLAYING", 
time: "5"
})
bot.status({
  text: "sylex.ga", 
  type: "PLAYING", 
  time: "5"
  })


bot.command({
  name: "$alwaysExecute",
  code: `
$onlyIf[$getUserVar[afk;$mentioned[1]]!=kapalı;]
$onlyIf[$getUserVar[afk;$authorID]!=açık;$reply[$messageID;**Hoşgeldin $username artık AFK değilsin.** $setUserVar[afk;kapalı]]]
 
$onlyIf[$getUserVar[afk;$authorID]!=kapalı;]
$suppressErrors[] `,
  nonPrefixed: true
  })
  bot.command({
    name: "$alwaysExecute",
    code: `$onlyIf[$getUserVar[afk;$mentioned[1]]!=açık;{title:AFK Adam etiketlenmez karşim.}{description:**Hey $username! Etiketlediğin kullanıcı ($username[$mentioned[1]]) şu an afk. Lütfen daha sonra ulaş.**
      \`\`\`Sebep: $getUserVar[afksebep;$mentioned[1]]\`\`\`}{color:DARKBLUE}{thumbnail:$authorAvatar}]
      $suppressErrors[]`,
      nonPrefixed: true
  })

  bot.awaitedCommand({
    name: "tepkirol",
    code: `$sendDM[$authorID;**Tebrikler! Artık $roleName[$mentionedRoles[1]] rolüne sahipsiniz.**]$giveRoles[$authorID;$mentionedRoles[1]]`
  })
  
  
  bot.command({
    name: "tepkirol",
    code: `
  $reactionCollector[$splitText[1];$authorID;24d;<:tik:820371469854703667>;tepkirol;yes]
  $textSplit[$sendMessage[{description:<@&$mentionedRoles[1]> rolüne sahip olmak için <:tik:820371469854703667> tepkisine tıklayınız.}{color:DARKBLUE}{title:$serverName}{footer:SyleX Tepki Rol Sistemi. 24 Günde Bir Değiştiriniz.}{thumbnail:$serverIcon};yes]; ]
 $onlyPerms[manageroles;]$onlyIf[$message!=;]
  $suppressErrors[]`
})

bot.joinCommand({ 
  channel: "$getServerVar[otorolkanal]", 
  code: `$giveRoles[$authorID;$getServerVar[otorol]]$color[DARKBLUE]$thumbnail[$authorAvatar]
  $author[$username;$authorAvatar]$description[$getServerVar[otorolmsj]
Verilen Rol: <@&$getServerVar[otorol]>]$footer[Sylex Otorol Sistemi.;$authorAvatar]
$suppressErrors[]`
})
bot.joinCommand({ 
  channel: "$getServerVar[hoşgeldinkanal]", 
  code: `<@$authorID>
  $attachment[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;webp;png]&middle=$username&name=HOŞGELDİN&bottom=İyi%20Eğlenceler&text=white&avatarborder=white&avatarbg=white&background=;hosgeldin.png]`
})

bot.onJoined() 
