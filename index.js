const express = require('express');
const app = express();
app.use(express.json());

app.get("/twitter", (req,res) => {
    res.json({message:"succès"} );
})

app.post( "/twitter", (req,res) => {
    res.json({message:"nouveau tweet"});
})

app.put("/twitter", (req,res) => {
    res.json({message:"nouvelle mise à jour"})
} )

app.delete("/twitter",(req,res) => {
    res.json({message:"suppression du message"})
})

app.listen(3000,() => {
    console.log("Serveur démaré avec succès");
})