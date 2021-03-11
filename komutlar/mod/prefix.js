module.exports = {
    name: "prefix",
    code: `$setServerVar[prefix;$message[1]]
    **Sunucunuzun prefixi \`$message[1]\` olaraka ayarlandı.**
    $onlyIf[$message[1]!=;]
    $onlyPerms[admin;]`
}