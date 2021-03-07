module.exports = {
    name: "code",
    code: `$reply[$messageID;$jsonRequest[https://normal-api.ml/encode?text=$message;encoded]]
    $onlyIf[$message!=;]
    $suppressErrors[]`
}