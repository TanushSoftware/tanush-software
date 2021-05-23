import { Col, Row, Typography } from "antd";
import CustomCard from "../components/CustomCard";
import "./Clients.css";

const { Title } = Typography;

const Clients = ({ clientsRef }) => {
  return (
    <div className="clients content_root" ref={clientsRef}>
      <Title level={2} className="clients__title content_title">
        Clients
      </Title>
      <Row className="clients__row">
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

export default Clients;
