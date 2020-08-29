import content from "./content";

module.exports = (req, res) => {
    const chat = req.query.key ? content[req.query.key] : "";

    res.json({
        key: req.query.key,
        body: chat,
    });
};
