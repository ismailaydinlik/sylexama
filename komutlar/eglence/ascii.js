module.exports = {
    name: "ascii",
    code: `$reply[$messageID;\`\`\`$jsonRequest[https://artii.herokuapp.com/make?text=$message]\`\`\`]
    $onlyIf[$message!=;]
    $suppressErrors[]`
}
