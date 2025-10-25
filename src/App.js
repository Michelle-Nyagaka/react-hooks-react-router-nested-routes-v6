import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      {/* 👇 This tells React Router where to render child routes */}
      <Outlet />
    </>
  );
}

export default App;
