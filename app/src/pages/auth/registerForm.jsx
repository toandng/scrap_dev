import { useState } from "react";
import { toast } from "react-toastify";
import Form, { TextInput } from "../../components/Foms";
import BasicTabs from "../../components/Tabs/Tabs";
import styles from "../auth/component/registerForm.module.scss";
import Button from "../../components/Button";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (data) => {
    if (!data.email) {
      toast.error("Email is required to sign in");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img src="/img/backgroundApp.jpg" alt="Background" />
        <div className={styles.formLogin}>
          <h1>Scrap</h1>
          <Form onSubmit={handleSubmit}>
            <BasicTabs></BasicTabs>
            <div className={styles.info}>
              <TextInput
                className={styles.name}
                name="name"
                placeholder="Tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextInput
                className={styles.inputEmail}
                name="email"
                placeholder=" Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.contry}>
              <img src="/img/vn.png" alt="" />
              <p className={styles.content}>+84</p>
              <TextInput
                className={styles.inputPhone}
                name="phone"
                placeholder=" Nhập số điện thoại"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <Button className={styles.login} type="Link">
              Đăng kí
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
