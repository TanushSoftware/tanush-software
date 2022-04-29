import React, { useRef } from "react";
import { Col, Layout, Menu, Row } from "antd";
import "./PageLayout.css";
import Text from "antd/lib/typography/Text";
import Paragraph from "antd/lib/typography/Paragraph";
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
          <Clients clientsRef={clientsRef} />
        </div>
      </Content>
      <Footer className="pageLayout__footer" ref={contactUsRef}>
        <Row justify="space-between" align="middle">
          <Col xs={24} md={6}>
            <div className="logo">
              <img
                src="assets/logo_without_text.png"
                alt="Tanush Software Logo"
              />
              <span className="pageLayout__title">Tanush Software</span>
            </div>
          </Col>
          <Col xs={24} md={6}>
            <h2>
              <b> Let’s Connect</b>
            </h2>
            <Paragraph>
              <Text strong>Email: </Text>tanushsoftware@gmail.com
            </Paragraph>
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
        </Row>
        <div className="pageLayout__copyright">Tanush Software ©2022</div>
      </Footer>
    </Layout>
  );
};

export default PageLayout;
