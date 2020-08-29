import content from "./content";

module.exports = (req, res) => {
    // res.json({
    //   body: req.body,
    //   query: req.query,
    //   cookies: req.cookies,
    // })
    const chat = req.query.key ? content[req.query.key] : "";

    res.json({
        key: req.query.key,
        body: chat,
    });
};
