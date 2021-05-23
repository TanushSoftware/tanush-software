import React, { useRef } from "react";
import { Col, Layout, Menu, Row } from "antd";
import "./PageLayout.css";
import Text from "antd/lib/typography/Text";
import Paragraph from "antd/lib/typography/Paragraph";
import MainCarousel from "../components/MainCarousel";
import Services from "../layout/Services";
import Products from "../layout/Products";
import Clients from "../layout/Clients";

const { Header, Content, Footer } = Layout;

const PageLayout = () => {
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const clientsRef = useRef(null);
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
          <Menu.Item key="4">About us</Menu.Item>
          <Menu.Item key="5">Contact us</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="site-layout-content">
          <MainCarousel topRef={topRef} />
          <Services servicesRef={servicesRef} />
          <Products productsRef={productsRef} />
          <Clients clientsRef={clientsRef} />
        </div>
      </Content>
      <Footer className="pageLayout__footer">
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
            {/* <Paragraph>
              <Text strong>Phone No: </Text>9876543210
            </Paragraph> */}
            <Paragraph>
              <Text strong>Email Address: </Text>tanushsoftware@gmail.com
            </Paragraph>
          </Col>
        </Row>
        <div className="pageLayout__copyright">Tanush Software ©2021</div>
      </Footer>
    </Layout>
  );
};

export default PageLayout;
