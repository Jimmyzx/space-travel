import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.css";
import { LoadingContext } from "./context/LoadingProvider";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AppRoute from "./routes/AppRoute";
import Motto from "./components/Motto/Motto";
import Loading from "./components/Loading/Loading";
import starfield from './starfield.gif'; 

function App() {
  const { isLoading } = useContext(LoadingContext);

  return (
    <>
      <div className={styles.background}>
        <img src={starfield} alt="Background" className={styles.backgroundImage} />
      </div>

      <BrowserRouter>
        <NavigationBar />
        <AppRoute />
        <Motto />
      </BrowserRouter>

      {isLoading && <Loading />}

      
    </>
  );
}

export default App;
