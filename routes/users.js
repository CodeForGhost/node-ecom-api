const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("user test");
})

router.post("/", (req, res) => {
    const username = req.body.username;
    res.status(203).send("username : " + username)
})


module.exports = router;