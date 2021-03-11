module.exports = {
    name: "emojiyaz",
    code: `$reply[$messageID;$jsonRequest[https://normal-api.ml/emojify?text=$message;emojify]]
    $onlyIf[$message!=;]
    $suppressErrors[]`
}