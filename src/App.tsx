import "./App.css";
import LoginForm from "../components/LoginForm";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "../routing/AppRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
