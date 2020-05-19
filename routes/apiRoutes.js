const fs = require("fs");

module.exports = function(app) {

  app.get("/api/notes", (req,res)=>{
    fs.readFile("db/db.json", (err,data)=>{
      if(err) throw err;
      res.json(JSON.parse(data));
    });
  });

  app.post("/api/notes", (req,res)=>{
    fs.readFile("db/db.json", (err,data)=>{
      if(err) throw err;
      let d = JSON.parse(data);
      d.push(req.body);
      fs.writeFile("db/db.json", JSON.stringify(d), ()=>res.json(d));
    });
  });

  app.delete("/api/notes/:id", (req,res)=>{
    fs.readFile("db/db.json", (err,data)=>{
      if(err) throw err;
      let d = JSON.parse(data);
      d = d.filter(el=>el.id!==req.params.id);
      fs.writeFile("db/db.json", JSON.stringify(d), ()=>res.json(d));
    });
  });

};