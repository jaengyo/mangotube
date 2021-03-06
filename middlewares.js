import routes from "./routes.js";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "mangoTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};
