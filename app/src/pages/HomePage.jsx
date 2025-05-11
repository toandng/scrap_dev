import Button from "../components/Button";
import config from "../config";

function HomePage() {
  return (
    <Button type="Link" to={config.routes.login}>
      Login
    </Button>
  );
}
export default HomePage;
