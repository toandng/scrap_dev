import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSliders, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../component/SideBar.module.scss";
import ProfilePage from "../../Setting/ProfilePage";
import Button from "../../../components/Button";

function SideBar({ showProfile, onToggle }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav} onClick={onToggle}>
        <FontAwesomeIcon
          icon={showProfile ? faTimes : faSliders}
          className={styles.toggleIcon}
        />
      </div>

      <div
        className={`${styles.profileContainer} ${
          showProfile ? styles.profileShow : styles.profileHide
        }`}
      >
        {/* Nút Đóng */}
        <button className={styles.closeButton} onClick={onToggle}>
          <FontAwesomeIcon icon={faClose} />
        </button>

        <div className="wrapprer">
          <h1>Scrap</h1>
          <div>
            <img src="./img/2.p" alt="" className="avatar" />
            <Button to="/profile">name</Button>
            <Button to="/">Số điện thoại</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
