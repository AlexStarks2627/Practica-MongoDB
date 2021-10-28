const app = require("./app/app");
require("dotenv").config();

const dotenv = require("dotenv");

const result = dotenv.config();

try {
  if (result.error) throw result.error;
} catch (e) {
  console.log(e);
}

app.listen(process.env.PORT || 8000, () => {
  console.log("SERVIDOR LEVANTADO EN EL PUERTO:" + process.env.PORT);
});
