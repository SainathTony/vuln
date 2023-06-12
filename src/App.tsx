import "./App.css"; 
import HeaderComponent from "./ui/screens/Header/Header";
import NavbarComponent from "./ui/screens/Navbar/Navbar";
import AppRoutes from "./ui/screens/Routes/Routes";

function App() {
  return (
    <>
      <HeaderComponent />
      <AppRoutes>
        <NavbarComponent />
      </AppRoutes>
    </>
  );
}

export default App;
