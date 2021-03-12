module.exports = {
    name: "fakeyorum",
    code: `$attachment[https://some-random-api.ml/canvas/youtube-comment?avatar=$replaceText[$authorAvatar;webp;png]&comment=$message&username=$username;yorum.png]
    $onlyIf[$message!=;]
$suppressErrors[]
    `
}
