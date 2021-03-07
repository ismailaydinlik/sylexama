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
    level: "1"
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

bot.joinCommand({ //command
        channel: "811672654183661658", //channel where it will log
        code: `**Tıklada 100 olsun :)! <@$authorID>** $deleteIn[3]` //Message sent to <channel>
})
bot.onJoined() //Callback it self
bot.command({
name: "davetlerim",
code: `
$title[$username'nin davet bilgileri]
$thumbnail[$authorAvatar]
$description[
Toplam: $sum[$userInfo[real];$userInfo[fake]]
Gerçek: $userInfo[real]
Fake: $userInfo[fake]]
$color[DARKBLUE]
$onlyForServers[811672469978349609;]
`
})

bot.command({
name: "davetsil",
code: `
$username[$mentioned[1]]'in davetleri başarıyla silindi.
$resetInvites[$guildID;$mentioned[1]]
$onlyForIDs[$botOwnerID;]
$onlyForServers[811672469978349609;]
`
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
