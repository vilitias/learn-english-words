
import express from 'express'
import {MongoClient} from "mongodb";
import cors from 'cors'


const app = express();
const port = 8080;

let englishWords = null
let themes = null

const mongoConnect = async (data) => {
    const uri = "mongodb+srv://Julia2222:Julia2222@cluster0.reril.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    await client.connect(err => {
        console.log('trying')
        englishWords =  client.db("myProject").collection("englishWords");
        themes =  client.db("myProject").collection("themes");
        console.log('goood connection')
    });
}

const createEndpoints = () => {
    app.use(cors())

    app.get("/", async (req, res) => {
        const response = await englishWords.find().toArray()
            .catch(err => console.error(`Failed to find documents: ${err}`))
        res.json(response);
    })
    app.get("/body", async (req, res) => {
        const response = await englishWords.find({theme:'body'}).toArray()
            .catch(err => console.error(`Failed to find documents: ${err}`))
        res.json(response);
    })
    app.get("/appearance-and-character", async (req, res) => {
        const response = await englishWords.find({theme:'Appearance and character'}).toArray()
            .catch(err => console.error(`Failed to find documents: ${err}`))
        res.json(response);
    })
    app.get("/themes", async (req, res) => {
        const response = await themes.find().toArray()
            .catch(err => console.error(`Failed to find documents: ${err}`))
        res.json(response);
    })


    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}


const launch = async () => {
    await mongoConnect()
    await createEndpoints()
}

launch()
