module.exports = {
    name: "bot1",
    code: `$setUserVar[para;$sub[$getUserVar[para];100000]]
$dm $color[DARKBLUE]$description[Dostum altyapın [burada\\](https://glitch.com/~unexpected-slow-trust)!] $thumbnail[$authorAvatar]
    $onlyIf[$getUserVar[para]>$sum[100000;1];]`
}