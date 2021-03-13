module.exports = {
    name: "ytindir",
    code: `$reply[$messageID;{author:$username:$authorAvatar}{thumbnail:$authorAvatar}{description:**Hey $username videon başarılı bir şekilde dönüştürüldü!**
    [$jsonRequest[https://normal-api.ml/youtube/searchvideo?query=$message;title] MP3 indir\\](https://toquemp3.com/@api/button/mp3/$replaceText[$jsonRequest[https://normal-api.ml/youtube/searchvideo?query=$message;url];https://www.youtube.com/watch?v=;]) - [$jsonRequest[https://normal-api.ml/youtube/searchvideo?query=$message;title] MP4 indir\\](https://toquemp3.com/@api/button/videos/$replaceText[$jsonRequest[https://normal-api.ml/youtube/searchvideo?query=$message;url];https://www.youtube.com/watch?v=;])
**__Video Açıklaması__**
$jsonRequest[https://normal-api.ml/youtube/searchvideo?query=$message;description]}{color:DARKBLUE}]
    $onlyIf[$jsonRequest[https://normal-api.ml/youtube/searchvideo?query=$message;title]!=;]
    $onlyIf[$message!=;]
    $suppressErrors[]`
}
