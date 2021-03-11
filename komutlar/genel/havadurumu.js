module.exports = {
    name: "havadurumu",
    code: `$attachment[https://api.cool-img-api.ml/weather-card?location=$message&background=https://resimdiyari.com/_data/i/upload/2012/07/08/20120708125351-fd95c6b2-me.jpg;havadurumu.png]
    $suppressErrors[]
    $onlyIf[$message!=;]`
}