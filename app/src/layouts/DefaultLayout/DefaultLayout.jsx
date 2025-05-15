import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function DefaultLayout() {
  return (
    <div>
      <Header />
      <main>
        <div>
          {/* <SlideBar /> */}

          <div>
            <div className="container-fluid">
              <Outlet />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default DefaultLayout;
