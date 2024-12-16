const Hapi = require("@hapi/hapi");
const routes = require("./src/routes");

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 9000,
    host: process.env.HOST || "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  try {
    server.route(routes);
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
};

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  process.exit(1);
});

init();
