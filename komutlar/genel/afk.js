module.exports = {
    name: "afk",
    code: `$reply[$messageID;{title:$username}{description:**Dostum Artık AFK'sın.**
    \`\`\`Sebep: $getUserVar[afksebep]\`\`\`}{thumbnail:$authorAvatar}{color:DARKBLUE}]
    $setUserVar[afk;açık]
    $setUserVar[afksebep;$message]
    $onlyIf[$message!=;]
    $suppressErrors[]
    `
}