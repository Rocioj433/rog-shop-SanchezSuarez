import img from "../assets/img1(1).jpg";
import "../styles/home.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div>
        <h1 className="title">Bienvenido a la tienda</h1>
        <br />
        <img className="image" src={img} alt="" />
        <br />
        <h2 className="title">Acerca de nosotros</h2>
        <p className="parrafo">
          Somos una empresa que se dedica a la venta de productos de calidad,
          con una amplia gama de productos que pueden ser usados en cualquier
          lugar.
          <br />
          <br />
          Nuestra empresa esta ubicada en microcentro de la ciudad de Buenos
          Aires, contamos con amplia lista de productos para el armado y
          reparaciones de computadoras.
          <br />
          <br />
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
