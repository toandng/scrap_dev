import { useState } from "react";
import SideBar from "../../Home/component/SideBar";
import styles from "../component/Profile.module.scss";
import Button from "../../../components/Button";
function Profile() {
  const [showProfile, setShowProfile] = useState(false);

  const handleToggleProfile = () => {
    setShowProfile((prev) => !prev);
  };
  return (
    <div className={`${styles.container} ${showProfile ? styles.shifted : ""}`}>
      <div className={styles.show}>
        {" "}
        <div>
          <SideBar showProfile={showProfile} onToggle={handleToggleProfile} />
        </div>
        <div>
          <h1>Thông tin tài khoản</h1>
        </div>
      </div>
      <div className={styles.profile}>
        <div className={styles.profileAccount}>
          <div className={styles.account}>
            <h1>Avarta</h1>
            <h2>Name</h2>
            <p>Phone</p>
            <p>Email</p>
          </div>
          <div className={styles.edit}>
            <h2>Thay đổi</h2>
            <Button>Đăng xuất</Button>
          </div>
        </div>
        <div className={styles.verfyInFo}>
          <div className={styles.listInfo}>
            <ul>
              <li>Địa điểm đã lưu</li>
              <li>Tài khoản cá nhân</li>
              <li>Thay đổi mật khẩu</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
