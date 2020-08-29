module.exports = (req, res) => {
    // res.json({
    //   body: req.body,
    //   query: req.query,
    //   cookies: req.cookies,
    // })

    res.json({
        body: "Prueba",
        query: req.query,
    });
};
