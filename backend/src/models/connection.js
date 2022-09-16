const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb+srv://PrograWebUser:PrograWeb123@cluster0.lrivrtd.mongodb.net/PrograWeb", { useNewUrlParser: true })
  .then(() => console.log("Conectado a la base de datos MongoDB"))
  .catch(() => {
    console.log("No se pudo conectar con la base de datos");
    process.exit();
  });
  
  // npm install mongoose