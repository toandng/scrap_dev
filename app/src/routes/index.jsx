import config from "../config";
import LoginForm from "../pages/auth/loginForm";
import RegisterForm from "../pages/auth/registerForm";

const routes = [
  // {
  //   path: config.routes.home,
  //   component: HomePage,
  // },
  {
    path: config.routes.login,
    component: LoginForm,
  },
  {
    path: config.routes.register,
    component: RegisterForm,
  },
];
export default routes;
