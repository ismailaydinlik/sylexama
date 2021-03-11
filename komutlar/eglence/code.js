module.exports = {
    name: "code",
    code: `$reply[$messageID;$jsonRequest[https://some-random-api.ml/base64?encode=$message;base64]]
    $onlyIf[$message!=;]
    $suppressErrors[]`
}