import { Col, Row, Typography } from "antd";
import CustomCard from "../components/CustomCard";
import "./Products.css";

const { Title } = Typography;

const Products = ({ productsRef }) => {
  return (
    <div className="products content_root" ref={productsRef}>
      <Title level={2} className="products__title content_title">
        Products
      </Title>
      <Row className="products__row">
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

export default Products;
