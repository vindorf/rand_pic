const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

app.set("view engine", "hbs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "index")));
app.use(express.static(path.join(__dirname, "public")));



app.listen(3000, () => {
  console.log("Server läuft auf Port 3000");
});

const pic = ["/Sonne.jpg", "/Weg.jpg", "/Zeug.jpg"];



app.get("/", (req, res) => {

    const randomIndex = randomI(pic);
  const selectedPic = pic[randomIndex];
  res.render("index", { selectedPic });
  });



  function randomI (arr) {
    const rI = Math.floor(Math.random() * arr.length);
    return rI;
  }



    


  

  function randomI (arr) {
    const rI = Math.floor(Math.random() * arr.length);
    return rI;
  }
  
