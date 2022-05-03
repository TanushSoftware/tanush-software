import React, { useRef } from "react";
import { Col, Layout, Menu, Row } from "antd";
import "./PageLayout.css";
import MainCarousel from "../components/MainCarousel";
import Services from "../layout/Services";
import Products from "../layout/Products";
// import Testimonials from "../layout/Testimonials";
import Clients from "../layout/Clients";

const { Header, Content, Footer } = Layout;

const PageLayout = () => {
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const clientsRef = useRef(null);
  const contactUsRef = useRef(null);
  const topRef = useRef(null);

  const scrollTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 64,
      behavior: "smooth",
    });
  };

  return (
    <Layout className="layout">
      <Header className="pageLayout__header">
        <div className="logo" onClick={() => scrollTo(topRef)}>
          <img src="assets/logo_without_text.png" alt="Tanush Software Logo" />
          <span className="pageLayout__title">Tanush Software</span>
        </div>
        <Menu mode="horizontal">
          <Menu.Item key="1" onClick={() => scrollTo(servicesRef)}>
            Services
          </Menu.Item>
          <Menu.Item key="2" onClick={() => scrollTo(productsRef)}>
            Products
          </Menu.Item>
          <Menu.Item key="3" onClick={() => scrollTo(clientsRef)}>
            Clients
          </Menu.Item>
          {/* <Menu.Item key="4">About us</Menu.Item> */}
          <Menu.Item key="5" onClick={() => scrollTo(clientsRef)}>
            Contact us
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="site-layout-content">
          <MainCarousel topRef={topRef} />
          <Services servicesRef={servicesRef} />
          <Products productsRef={productsRef} />
          {/* <Testimonials /> */}
          <div
            class="clutch-widget"
            data-nofollow="true"
            data-url="https://widget.clutch.co"
            data-widget-type="12"
            data-height="375"
            data-clutchcompany-id="1927317"
          ></div>
          <Clients clientsRef={clientsRef} />
        </div>
      </Content>
      
      <Footer ref={contactUsRef}>
      <hr/>
        <Row justify="space-between" style={{marginTop: 20}}>
          <Col xs={6} md={6} sm={24}>
            <div className="logo">
              <img
                src="assets/logo_without_text.png"
                alt="Tanush Software Logo"
              />
              <span className="pageLayout__title">Tanush Software</span>
              <p>
                The result of years of custom software development and startup
                consulting. We offer a wide range of services tailored to help
                clients ease the process of scaling their businesses. We are
                committed to providing startups and small businesses with
                much-needed IT support.
              </p>
            </div>
          </Col>
          <Col xs={4} md={4}>
            <h2>
              <b>Our Services</b>
            </h2>
            <p>IT Consulting</p>
            <p>Web App Development</p>
            <p>Mobile App Development</p>
            <p>Data Analytics</p>
            <p>Job Support</p>
          </Col>

          <Col xs={4} md={4}>
            <h2>
              <b> Reviews</b>
            </h2>

            <div class="elementor-icon-wrapper">
              {" "}
              <a
                class="elementor-icon"
                href="https://clutch.co/profile/tanush-software#reviews"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="50"
                  viewBox="0 0 176 70"
                  fill="black"
                >
                  <path
                    d="M166.403 25L169.665 31.0129L176 32.4857L171.681 37.6746L172.334 44.5977L166.403 41.7917L160.471 44.5977L161.124 37.6746L156.806 32.4857L163.141 31.0129L166.403 25Z"
                    fill="black"
                  ></path>
                  <path
                    d="M160.105 45L166.158 42.1364V25L162.829 31.1364L156.364 32.6393L160.771 37.9348L160.105 45Z"
                    fill="black"
                  ></path>
                  <path
                    d="M82.0911 25L85.5212 31.0129L92.1821 32.4856L87.6412 37.6746L88.3277 44.5977L82.0911 41.7917L75.8544 44.5977L76.541 37.6746L72 32.4856L78.6609 31.0129L82.0911 25Z"
                    fill="black"
                  ></path>
                  <path
                    d="M103.312 25L106.742 31.0129L113.403 32.4856L108.862 37.6746L109.548 44.5977L103.312 41.7917L97.0752 44.5977L97.7617 37.6746L93.2207 32.4856L99.8817 31.0129L103.312 25Z"
                    fill="black"
                  ></path>
                  <path
                    d="M123.716 25L126.883 31.0129L133.031 32.4856L128.84 37.6746L129.473 44.5977L123.716 41.7917L117.959 44.5977L118.593 37.6746L114.402 32.4856L120.55 31.0129L123.716 25Z"
                    fill="black"
                  ></path>
                  <path
                    d="M144.937 25L148.267 31.1364L154.731 32.6393L150.324 37.9348L150.99 45L144.937 42.1364L138.884 45L139.55 37.9348L135.143 32.6393L141.608 31.1364L144.937 25Z"
                    fill="black"
                  ></path>
                  <path
                    d="M46.8418 49.6107C43.4176 52.7904 38.8966 54.5527 33.9353 54.5527C22.9983 54.5527 14.9666 46.2565 14.9666 34.866C14.9666 23.4755 22.7428 15.5285 33.9353 15.5285C38.8101 15.5285 43.4176 17.2056 46.9283 20.3852L49.3146 22.5049L59.9174 11.557L57.2638 9.084C51.0248 3.26488 42.7415 0 33.9313 0C14.2747 0 0 14.6514 0 34.7807C0 54.8248 14.6167 70 33.9313 70C42.9066 70 51.2764 66.7351 57.4368 60.8226L60 58.3496L49.2321 47.4098L46.8418 49.6107Z"
                    fill="black"
                  ></path>
                  <path
                    d="M33.4163 23.3008C36.4316 23.3008 39.3235 24.5381 41.4557 26.7405C43.5879 28.9429 44.7857 31.9299 44.7857 35.0446C44.7857 38.1593 43.5879 41.1463 41.4557 43.3487C39.3235 45.5511 36.4316 46.7884 33.4163 46.7884C30.4009 46.7884 27.5091 45.5511 25.3769 43.3487C23.2447 41.1463 22.0469 38.1593 22.0469 35.0446C22.0469 31.9299 23.2447 28.9429 25.3769 26.7405C27.5091 24.5381 30.4009 23.3008 33.4163 23.3008"
                    fill="black"
                  ></path>
                </svg>{" "}
              </a>
            </div>
          </Col>
          <Col xs={6} md={6}>
            <h2>
              <b> Let’s Connect</b>
            </h2>

            <Row>
              <Col sm={8} md={6} lg={4}>
                <a href="mailto: tanushsoftware@gmail.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.021 17.824c-3.907 0-6.021-2.438-6.021-5.586 0-3.363 2.381-6.062 6.638-6.062 3.107 0 5.362 2.019 5.362 4.801 0 4.356-5.165 5.506-4.906 3.021-.354.555-.927 1.177-2.026 1.177-1.257 0-2.04-.92-2.04-2.403 0-2.222 1.461-4.1 3.19-4.1.829 0 1.399.438 1.638 1.11l.232-.816h1.169c-.122.416-1.161 4.264-1.161 4.264-.323 1.333.675 1.356 1.562.648 1.665-1.29 1.75-4.664-.499-6.071-2.411-1.445-7.897-.551-7.897 4.347 0 2.806 1.976 4.691 4.914 4.691 1.719 0 2.771-.465 3.648-.974l.588.849c-.856.482-2.231 1.104-4.391 1.104zm-1.172-7.153c-.357.67-.588 1.538-.588 2.212 0 1.805 1.761 1.816 2.626.12.356-.697.586-1.586.586-2.265 0-1.458-1.748-1.717-2.624-.067z" />
                  </svg>
                </a>
              </Col>
              <Col sm={8} md={6} lg={4}>
                <a
                  href="https://web.whatsapp.com/send?phone=+919016648585"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </Col>
              <Col sm={8} md={6} lg={4}>
                <a
                  class="elementor-icon"
                  href="https://www.linkedin.com/company/tanush-software"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </Col>
            </Row>
            <br />
          </Col>
        </Row>
        <hr></hr>
        <div style={{ textAlign: "right" }}>
          © Copyright 2022 All Rights Reserved
        </div>
      </Footer>
    </Layout>
  );
};

export default PageLayout;
