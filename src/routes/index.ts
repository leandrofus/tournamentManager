import express, { Application, NextFunction, Request, Response, Router } from "express";
import api from "./api";
import views from "./view";
import path from "path";

const router = Router();
function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  res.status(500).send({ error: "Something broke!" });
}

function notFoundHandler(req: Request, res: Response, next: NextFunction) {
  res.status(404).send({ error: "Not Found!" });
}

export function initRouting(App: Application) {
  App.use("/", express.static(path.resolve(__dirname, "..", "public")));
  App.use("/", views);
  App.use("/api", api);
  App.use(errorHandler);
  App.use(notFoundHandler);

}

/**
 * @constant router
 * @description Router for the index
 */
export default router;
