const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs'); 

const PORT = process.env.PORT || 8080; 

app.get("/notes", (request, response) => {
    response.sendFile(path.join(__dirname, "..", "notes.html"));
    console.log("Your Notes.");


})

app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "..", "index.html"));
    console.log("Your Index."); 
})


app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});