import { Outlet } from "react-router";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-m-bg min-h-screen relative"> 
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
