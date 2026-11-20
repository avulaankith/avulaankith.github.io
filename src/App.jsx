import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import { projects } from "./content/portfolio";
import "./App.css";

function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404 · Page not found</p>
      <h1>That path doesn’t resolve.</h1>
      <Link className="button button--primary" to="/">
        Back to home
      </Link>
    </main>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/work/:slug"
          element={<ProjectDetail projects={projects} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
