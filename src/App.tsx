import MainRoutes from "./routes/MainRoutes";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Footer />
      <MainRoutes />
    </>
  );
};

export default App;
