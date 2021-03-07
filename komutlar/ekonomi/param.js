module.exports = {
    name: "param",
aliases: ["cüzdan"],
code: `
$reply[$messageID;{author:$username 'nin serveti:$authorAvatar}{color:DARKBLUE}
{description:💸 Nakit: __$getUserVar[para]__
🏦 Banka: __$getUserVar[banka]__
💳 Tümü: __$sum[$getUserVar[para;$authorID];$getUserVar[banka;$authorID]]__
}{thumbnail:$authorAvatar}]

`
}