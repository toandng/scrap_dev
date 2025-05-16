import { useState } from "react";
import Form, { TextInput } from "../../../components/Foms";
import styles from "../component/Home.module.scss";
import Button from "../../../components/Button";
import SideBar from "./SideBar";
import {
  faBox,
  faCoins,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [showProfile, setShowProfile] = useState(false);

  const handleToggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  return (
    <div className={`${styles.container} ${showProfile ? styles.shifted : ""}`}>
      <SideBar showProfile={showProfile} onToggle={handleToggleProfile} />
      <div className={styles.div}>
        <div className="form">
          <h1>Đơn hàng mới</h1>
        </div>
      </div>
      {/* Form */}

      <div className={styles.formSubmit}>
        <h1>Địa điểm lấy hàng</h1>
        <Form>
          <TextInput
            className={styles.inputForm}
            name="address"
            placeholder=" Nhập địa chỉ"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextInput
            className={styles.inputForm}
            name="detailAddress"
            placeholder=" Địa chỉ chi tiết"
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
          />
          <div className={styles.infoAccount}>
            <div className={styles.iconInput}>
              <TextInput
                className={styles.inputForm}
                name="name"
                placeholder="Tên người gửi"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FontAwesomeIcon icon={faUser} className={styles.iconUser} />
            </div>
            <div className={styles.iconInput}>
              <TextInput
                className={styles.inputForm}
                name="phone"
                placeholder="Số đện thoại"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <FontAwesomeIcon icon={faPhone} className={styles.iconUser} />
            </div>
          </div>

          {/*address nhận  */}
          <h1>Địa chỉ nhận hàng</h1>
          <TextInput
            className={styles.inputForm}
            name="address"
            placeholder=" Nhập địa chỉ"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextInput
            className={styles.inputForm}
            name="detailAddress"
            placeholder=" Địa chỉ chi tiết"
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
          />
          <div className={styles.infoAccount}>
            <div className={styles.iconInput}>
              <TextInput
                className={styles.inputForm}
                name="name"
                placeholder="Tên người nhận"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FontAwesomeIcon icon={faUser} className={styles.iconUser} />
            </div>
            <div className={styles.iconInput}>
              <TextInput
                className={styles.inputForm}
                name="phone"
                placeholder="Số đện thoại"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <FontAwesomeIcon icon={faPhone} className={styles.iconUser} />
            </div>
          </div>
          <div className={styles.infoAccount}>
            <div className={styles.iconInput}>
              <TextInput
                className={styles.inputForm}
                name="name"
                placeholder="Thu hộ"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FontAwesomeIcon icon={faCoins} className={styles.iconUser} />
            </div>
            <div className={styles.iconInput}>
              <TextInput
                className={styles.inputForm}
                name="phone"
                placeholder="Loại hàng hóa"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <FontAwesomeIcon icon={faBox} className={styles.iconUser} />
            </div>
          </div>
          <Button>Xác nhận</Button>
        </Form>
      </div>
    </div>
  );
}

export default Home;
