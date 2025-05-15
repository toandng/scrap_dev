import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../component/Home.module.scss";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <FontAwesomeIcon icon={faSliders} />
      </div>
    </div>
  );
}

export default SideBar;
