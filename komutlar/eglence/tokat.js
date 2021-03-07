module.exports = {
    name: "tokat",
    code: `$reply[$messageID;{description:**<@$mentioned[1]>, \`$username\` seni tokatladı ne hissediyorsun?**}{color:DARKBLUE}{image:http://4.bp.blogspot.com/-Cdrk6ce21MM/VdCr1HRNkWI/AAAAAAAAEuc/txEqvYl-A_8/s1600/KEMAL_SUNAL_PATRONUN_KARISINA_TOKAT.gif}]
    $onlyIf[$mentioned[1]!=;]
    $onlyIf[$mentioned[1]!=$clientID;]
    $onlyIf[$mentioned[1]!=$authorID;]
    $suppressErrors[]`
    
}
