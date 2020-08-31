import content from "./content";
const redis = require("redis");

module.exports = (req, res) => {
    const client = redis.createClient({
        url: process.env.REDIS_URL,
        password: process.env.REDIS_PW,
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
    });
    const key = req.query.key;
    // const chat = key ? content[key] : "";

    let chat = "";
    // read/write with your Redis client
    client.on("connect", function () {
        console.log("Trying to get key: ", key);

        client.get(key, (err, rep) => {
            console.log("ERR/REP is:", err, rep);
            chat = rep;

            res.json({
                key: key,
                body: chat,
                err: err,
            });
        });

        client.quit();
    });
};
