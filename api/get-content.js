import content from "./content";
const redis = require("redis");

module.exports = (req, res) => {
    // const client = redis.createClient({
    //     url: process.env.REDIS_URL,
    // });
    const key = req.query.key;
    const chat = key ? content[key] : "";

    // let chat = "";
    // read/write with your Redis client
    // client.on("connect", function () {
    //     client.get(key, (err, rep) => {
    //         chat = rep;
    //     });

    //     client.quit();
    // });

    res.json({
        key: key,
        body: chat,
    });
};
