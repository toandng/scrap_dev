import config from "../config";
import LoginForm from "../pages/auth/loginForm";
import RegisterForm from "../pages/auth/registerForm";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/Setting/ProfilePage";

const routes = [
  {
    path: config.routes.home,
    component: HomePage,
  },
  {
    path: config.routes.login,
    component: LoginForm,
  },
  {
    path: config.routes.register,
    component: RegisterForm,
  },
  {
    path: config.routes.profile,
    component: ProfilePage,
  },
];
export default routes;
