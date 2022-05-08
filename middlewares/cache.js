const mcache = require('memory-cache');

const cache = (duration) => {
    return (req, res, next) => {

        //const key = '__express__' + req.originalUrl || req.url
        const key = req.url
        const cachedBody = mcache.get(key)

        if (cachedBody) {
            console.log("Info devuelta desde cache");
            res.send(cachedBody)
            return
        }
        res.sendAfterCached = res.send
        res.send = (body) => {
            mcache.put(key, body, duration * 1000);
            res.sendAfterCached(body)
        }
        next()
    }
}
module.exports = cache