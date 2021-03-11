module.exports = {
    name: "tekme",
    aliases: "tekmele",
    code: `$reply[$messageID;{description:**<@$mentioned[1]>, \`$username\` seni tekmeledi ne hissediyorsun?**}{color:DARKBLUE}{image:https://media2.giphy.com/media/qiiimDJtLj4XK/200.gif}]
    $onlyIf[$mentioned[1]!=;]
    $onlyIf[$mentioned[1]!=$clientID;]
    $onlyIf[$mentioned[1]!=$authorID;]
    $suppressErrors[]`
    
}

