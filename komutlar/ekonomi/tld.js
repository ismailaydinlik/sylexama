module.exports = {
    name: "tld",
    code: `$setUserVar[para;$sub[$getUserVar[para];200000]]
$dm $color[DARKBLUE]$description[Dostum oyunun [burada\\](http://www.mediafire.com/file/swd5p0jze2b9tse/The_Long_Drive_-_Kurulum_TV.rar/file)!] $thumbnail[$authorAvatar]
    $onlyIf[$getUserVar[para]>$sum[200000;1];]`
}