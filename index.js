import express from "express";
import axios from "axios";

const app = express();

app.use(express.json());

const INSTANCES = {
    nucestatic1: "https://nucestatic1.devan.my.id/rpc",
    nucestatic2: "https://nucestatic2.devan.my.id/rpc",
    nucestatic3: "https://nucestatic3.devan.my.id/rpc",
    nucestatic4: "https://nucestatic4.devan.my.id/rpc",
};

app.post("/rpc", async (req, res) => {
    try {
        const instance = req.body.instance || req.body.data?.instance;

        if (!instance) {
            return res.status(400).json({
                error: "Instance is required"
            });
        }

        const url = INSTANCES[instance];

        if (!url) {
            return res.status(404).json({
                error: "Instance not found"
            });
        }

        const response = await axios.post(url, req.body);

        res.status(response.status).json(response.data);

    } catch (error) {

        if (error.response) {
            return res
                .status(error.response.status)
                .json(error.response.data);
        }

        res.status(500).json({
            error: error.message
        });

    }
});

app.listen(8888, () => {
    console.log("RPC Bridge :8888");
});