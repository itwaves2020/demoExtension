const express = require("express");
const session = require("express-session");

const app = express();
app.set('trust proxy', 1);

const MemoryStore = session.MemoryStore;
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    store: new MemoryStore(),
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.listen(8000, () => {
    console.log("Server is running.... ", 8000);
});

app.use(express.static("./bundle"));

app.get("/test", (req, res) => {
    console.log(req.session.cookie);
    res.cookie('cookieName', 123, { maxAge: 900000, httpOnly: true });
    res.status(200).send({ data: { message: "success" } });
});