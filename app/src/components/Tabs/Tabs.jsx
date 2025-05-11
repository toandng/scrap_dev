import { Tabs, Tab, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import styles from "../Tabs/Tabs.module.scss";

export default function NavTabs() {
  const location = useLocation();

  const tabValue = location.pathname === "/register" ? 1 : 0;

  return (
    <Box sx={{ width: "100%" }} className={styles.wrapper}>
      <Tabs value={tabValue}>
        <Tab
          label="Đăng nhập"
          component={Link}
          to="/login"
          className={styles.label}
        />
        <Tab
          label="Đăng kí"
          component={Link}
          to="/register"
          className={styles.label}
        />
      </Tabs>
    </Box>
  );
}
