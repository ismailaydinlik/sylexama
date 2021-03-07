 module.exports = {
    name: "kısalt",
    aliases: ["short"],
    code: `
    $djsEval[
        const isgd = require('isgd')
        isgd.custom('$message[1]', '$message[2]', function(res) {
            message.reply(res)
        
        });
        ]
        $onlyIf[$message!=;]
    `
}
