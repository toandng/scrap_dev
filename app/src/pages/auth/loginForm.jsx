import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Form, { TextInput } from "../../components/Foms";
import BasicTabs from "../../components/Tabs/Tabs";
import styles from "../auth/component/loginForm.module.scss";
import Button from "../../components/Button";

function LoginForm() {
  const googleButtonRef = useRef(null);
  const [email, setEmail] = useState("");

  const handleGoogleResponse = async (response) => {
    const idToken = response.credential;

    try {
      // Gửi token lên server để xác thực
      const res = await fetch("https://api01.f8team.dev/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(`Xin chào, ${data.name}`);
        // Lưu token/user info nếu cần
      } else {
        toast.error(data.message || "Lỗi đăng nhập");
      }
    } catch (err) {
      toast.error("Lỗi server", err);
    }
  };
  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id:
          "557884209286-k9ciulo0abh018vfpd4lpjqtpg7f8l87.apps.googleusercontent.com",
        callback: handleGoogleResponse,
      });

      window.google.accounts.id.renderButton(googleButtonRef.current, {
        theme: "outline",
        size: "large",
      });
    }
  }, []);

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
            <div ref={googleButtonRef} className={styles.google}></div>
            <p>hoặc đăng nhập bằng email</p>
            <div className={styles.textInput}>
              <div className={styles.contry}>
                <img src="/img/vn.png" alt="" />
                <p>+84</p>
              </div>
              <TextInput
                className={styles.input}
                name="email"
                placeholder=" Nhập email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <Button className={styles.login}>Đăng nhập</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
