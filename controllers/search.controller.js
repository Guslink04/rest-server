const { request, response } = require("express")
const axios = require("axios")

const getSearch = (req = request, res = response) => {
    const query = req.query.query
    console.log("Info devuelta desde el controlador")
    const cleanQuery = encodeURIComponent(query)
    let url = `https://api.mercadolibre.com/sites/MLA/search?q=${cleanQuery}`
    axios.get(url)
        .then(response => {
            const cleanResults = response.data.results.map(result => {
                const { id, title, price, currency_id, available_quantity, thumbnail, condition } = result
                return { id, title, price, currency_id, available_quantity, thumbnail, condition }
            })
            res.status(200);
            res.send(cleanResults);
        })
        .catch(error => {
            res.status(404);
            res.send([])
        });
}

module.exports = {
    getSearch
}