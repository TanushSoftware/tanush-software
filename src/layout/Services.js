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
      <Row className="services__row">
        <Col xs={24} lg={8}>
          <CustomCard text="Development" />
        </Col>
        <Col xs={24} lg={8}>
          <CustomCard text="Maintenance " />
        </Col>
        <Col xs={24} lg={8}>
          <CustomCard text="Consulting" />
        </Col>
      </Row>
    </div>
  );
};

export default Services;
