import content from "./content";
const redis = require("redis");

module.exports = (req, res) => {
    const { key, chat, title } = req.body;

    const client = redis.createClient({
        url: process.env.REDIS_URL,
    });

    // read/write with your Redis client
    client.on("connect", function () {
        client.set(key, chat, (err, rep) => {
            console.log("I think it's saved on key:", key, err, rep);
            res.json({
                status: rep,
            });
        });
        client.quit();
    });
};
