import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer">
      <Container className="footer-text">
        <Row className="d-flex justify-content-center ">
          <Col lg="5">
            <h3 className="fw-bold">Egbert</h3>
            <p className="desc">
              Silahkan kontak saya untuk berdiskusi dan mendapatkan informasi
              terbaru! 🙌
            </p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 813-8915-0978</p>
              </Link>
            </div>
            <div className="email">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">piterwang@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5 ">
            <h5 className="fw-bold">Menu</h5>
            <Link to="home">Home</Link>
            <Link to="portofolio">Portofolio</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="syaratketen">Syarat & ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk info menarik!</h5>
            <div className="subscribes">
              <input type="text" placeholder="cari" />
              <button className="btn btn-primary rounded-end rounded-0">
                Subscribe
              </button>
            </div>
            <div className=" social mt-3" >
              <a href="https://youtube.com/@EgbertN7?si=Y_GLK6BJTgprprKP" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="http://www.linkedin.com/in/egbert-angenius-279865293" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/egbertt16?igsh=Z282dHpsdHNnZDcz" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.threads.net/@egbert_angenius" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-threads"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0">
              &copy;Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Egbert Angenius</span>, All Right
              Reserved ❤️
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
