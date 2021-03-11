module.exports = {
    name: "amongus",
    code: `$setUserVar[para;$sub[$getUserVar[para];200000]]
$dm $color[DARKBLUE]$description[Dostum oyunun [burada\\](https://drive.google.com/file/d/1jffb4OnG2ZqSaMh6lCqlQRUpKhpZ-bZV/view)!] $thumbnail[$authorAvatar]
    $onlyIf[$getUserVar[para]>$sum[200000;1];]`
}