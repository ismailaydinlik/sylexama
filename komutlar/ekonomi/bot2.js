module.exports = {
    name: "bot2",
    code: `$setUserVar[para;$sub[$getUserVar[para];50000]]
$dm $color[DARKBLUE]$description[Dostum altyapın [burada\\](https://glitch.com/~befitting-steel-romano)!] $thumbnail[$authorAvatar]
    $onlyIf[$getUserVar[para]>$sum[50000;1];]`
}