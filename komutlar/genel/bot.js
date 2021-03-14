module.exports = {
    name: "bot",
    code: `$title[Bot Bilgileri]
    $thumbnail[$authorAvatar]
    $author[$username[$clientid];$useravatar[$clientid]]
    $color[DARKBLUE]
    $addField[Diğer;\`\`\`
• Toplam Komut: $commandsCount
• Gecikme: $botPing ms
• Uptime: $uptime
• Toplam Sunucu: $serverCount
• Toplam Kullanıcı: $allMembersCount\`\`\`]
    $addField[Versiyonlar;\`\`\`
• NodeJS Versiyonu: $getObjectProperty[nodev]
• Discord.js Versiyonu: $getObjectProperty[discordv]
• DBD.js versiyonu: v2.1.1
    \`\`\`]
    $addField[Hosting;\`\`\`
• CPU Kullanımı: $cpu%
• CPU Modeli: $djsEval[require ('os').cpus()[0\\].model;yes]
• CPU Platformu: $djsEval[require ('os').platform();yes]
• Bellek Kullanımı: $ramMB\`\`\`]
     $djseval[d.object.nodev = process.version
    d.object.discordv = require('discord.js').version
    $createObject[{}]]`
}
