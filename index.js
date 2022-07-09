const dotenv = require("dotenv")
dotenv.config()


const express = require("express");
const apiV1Routes = require("./routes")


const EntryModel = require("./db/entry_model");



const categories = ["Food", "Coding", "Work", "Other"];

const app = express();
const port = 4000;

// body gets parsed as json
app.use(express.json());

app.get("/", (req, res) => res.send({ info: "Journal API" }));

app.get("/categories", (req, res) => res.send(categories));

app.use("/api/v1", apiV1Routes)


// practice with categories
// app.post("/categories", (req, res) => {
//   const category =  req.body.value;
//   categories.push(category);
//   res.status(201).send(category);

// });

app.listen(port, () => console.log(`App running at http://localhost:${port}/`));
