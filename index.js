// Server'ı buradan başlatın
const app = require("./api/server");

app.listen(9000, () => {
  console.log("PORT LİSTENİNG");
});
