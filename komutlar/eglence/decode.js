module.exports = {
    name: "code",
    code: `$reply[$messageID;$jsonRequest[https://normal-api.ml/decode?text=$message;decoded]]
    $onlyIf[$message!=;]
    $suppressErrors[]`
}