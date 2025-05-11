import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function DefaultLayout() {
  return (
    <div style={{ minHeight: "100vh", paddingBottom: "60px" }}>
      <Header />
      <main>
        <div
          style={{
            display: "flex",
          }}
        >
          {/* <SlideBar /> */}

          <div
            style={{
              width: "100%",
              margin: " 0 auto",
              padding: "0 32px 0 10px",
            }}
          >
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
