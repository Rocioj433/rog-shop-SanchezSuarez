import '../styles/footer.css';

const Footer = () => {
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr/>
      <footer className="text-center text-lg-start text-muted">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3">ROG</i>
                </h6>
                <p className="parr">
                  En Republic Of Gamers buscamos destacar por nuestro
                  conocimiento y nuestra calidad
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Productos</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Memorias
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Monitores
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Placas
                  </a>
                </p>
                <p>
                    <a href="#!" className="text-reset">
                        Procesadores
                    </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                <p>
                  <i className="fas fa-home me-3">Florida 537 Local 450</i> 
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  rma@rogshop.com.ar
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr/>
        <div className="text-center p-4">
          © 2022 Copyright
          <p className="text-reset fw-bold">Rocio Jazmin Sanchez Suarez</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
