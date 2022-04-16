import { Col, Row, Typography } from "antd";
import CustomCard from "../components/CustomCard";
import "./Services.css";

const { Title } = Typography;

const Services = ({ servicesRef }) => {
  return (
    <div className="services content_root" ref={servicesRef}>
      <Title level={2} className="services__title content_title">
        Services
      </Title>
      <br/>
      <br/>
      <Row className="services__row">
        <Col xs={24} lg={8}>
          <CustomCard text="Software Development"  showSandBox={false}
            srcURL="https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Software-Development-Business1--1-.jpg" />
        </Col>
        <Col xs={24} lg={8}>
          <CustomCard text="Migrations/Maintenance"  showSandBox={false}
            srcURL="https://massmediagroup.pro/storage/media/290/software-maintenance-min.jpg"/>
        </Col>
        <Col xs={24} lg={8}>
          <CustomCard text="Consulting" showSandBox={false}
            srcURL="https://www.bkd.com/sites/default/files/2019-04/hero-consulting-970876204.jpg"/>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
