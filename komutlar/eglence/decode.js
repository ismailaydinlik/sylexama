module.exports = {
    name: "decode",
    code: `$reply[$messageID;$jsonRequest[https://some-random-api.ml/base64?decode=$message;text]]
    $onlyIf[$message!=;]
    $suppressErrors[]`
}