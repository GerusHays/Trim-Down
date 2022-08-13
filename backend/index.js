const express = require("express");
const bodyParser = require("body-parser");
const routesHandler = require("./routes/handler.js");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
require("dotenv/config");

const PORT = process.env.PORT || 4000; // backend routing port
// DB Connection
mongoose
  .connect(process.env.DB_URI || "mongodb://localhost:27017/jwt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

const db = mongoose.connection;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routesHandler);

const startApolloServer = async ({ typeDefs, resolvers }) => {
  await server.start();
  server.applyMiddleware({ app });
};

// if (process.env.NODE_ENV === 'production') {
//     // Serve any static files
//     app.use(express.static(path.join(__dirname, 'frontend/build')));

//     // Handle React routing, return all requests to React app
//     app.get('*', function(req, res) {
//         res.sendFile(path.join(__dirname, 'frontend/build', routesHandler));
//     });
// }

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});

startApolloServer(typeDefs, resolvers);
