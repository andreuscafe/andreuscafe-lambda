import content from "./content";
const redis = require("redis");

module.exports = (req, res) => {
    // const client = redis.createClient({
    //     url: process.env.REDIS_URL,
    // });

    // // read/write with your Redis client
    // client.on("connect", function () {
    //     client.set("foo", "bar");
    //     client.quit();
    // });

    // client.quit();

    // const chat = req.query.key ? content[req.query.key] : "";

    console.log(req);

    res.json({
        key: req.query.key,
        // body: chat,
    });
};
