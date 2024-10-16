import userRoutes from "./users/users.controllers.js";

const routes = (app) => {
  app.use("/api/users", userRoutes);
};

export default routes;
