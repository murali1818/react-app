import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/SidebarList/Sidebar";

function App() {
  return (
    <div className="flexbox">
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  );
}
export default App;