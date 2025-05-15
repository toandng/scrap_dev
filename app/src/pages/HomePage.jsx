import Home from "./Home/component/Home";
import Map from "./Home/component/Map";
import SideBar from "./Home/component/SideBar";
import styles from "../pages/Home/component/Home.module.scss";

function HomePage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.div}>
        <SideBar />
        <Home />
        <Map />
      </div>
    </div>
  );
}
export default HomePage;
