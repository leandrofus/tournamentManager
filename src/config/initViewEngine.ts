import { Application } from "express";
import { engine } from "express-handlebars";
import path from "path";
/**
 * @function initViewEngine
 * @description Function to initialize the view engine
 * @param {Application} App - The express application
 */
export function initViewEngine(App: Application) {
  App.set("views", path.join(__dirname, "..", "views", "pages"));
  App.engine(
    "hbs",
    engine({
      extname: ".hbs",
      defaultLayout: "index",
      layoutsDir: path.join(App.get("views"), "..", "layouts"),
      partialsDir: path.join(App.get("views"), "..", "partials"),
      helpers: {
        isPageActive: (page: number, currentPage: number) =>
          page === currentPage,
      },
    }),
  );
  App.set("view engine", "hbs");
}
