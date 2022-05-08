const { request, response } = require("express")
const axios = require("axios")

const getSearch = (req = request, res = response) => {
    const query = req.query.query
    console.log("Info devuelta desde el controlador")
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
        .then(response => {
            res.status(200);
            res.json(response.data.results)
        })
        .catch(error => {
            res.status(404);
            res.json({
                msg: `${error}`
            })
        });
}

module.exports = {
    getSearch
}