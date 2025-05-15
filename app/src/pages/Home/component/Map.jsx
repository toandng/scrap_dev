import styles from "../component/Home.module.scss";
function Map() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.map}>
        <img src="./img/empty-map.png" alt="" />
        <h2>Chưa thể tải bản đồ vị trí của bạn</h2>
        <p>Hãy nhập địa điểm lấy hàng để xem bản đồ</p>
      </div>
    </div>
  );
}

export default Map;
