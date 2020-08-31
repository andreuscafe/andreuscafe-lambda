import content from "./content";
const redis = require("redis");

module.exports = (req, res) => {
    const { key, chat, title } = req.body;

    const client = redis.createClient({
        url: process.env.REDIS_URL,
        password: process.env.REDIS_PW,
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
    });

    // read/write with your Redis client
    client.on("connect", function () {
        client.set(key, chat, (err, rep) => {
            console.log("I think it's saved on key:", key, err, rep);
            res.json({
                redisURL: process.env.REDIS_URL,
                status: rep,
                key,
                err,
            });
        });
        client.quit();
    });
};
