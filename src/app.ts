import express from "express";

const app = express();

app.route('/').get((req, res) => {
    res.json('express')
})

app.listen(3000)