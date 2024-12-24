import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-m-bg min-h-screen relative">
      <div className="h-10"></div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
