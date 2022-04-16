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
      <br/><br/>
      <Row className="products__row">
        <Col xs={24} lg={8}>
          <CustomCard
            text="Cloud invoicing and appointment management"
            showSandBox={false}
            srcURL="assets/products/invoice-management.png"
          />
        </Col>
        <Col xs={24} lg={8}>
          <CustomCard
            text="Production and employee management"
            showSandBox={false}
            srcURL="assets/products/production-management.png"
          />
        </Col>
        <Col xs={24} lg={8}>
          <CustomCard text="Stock Management"     showSandBox={false}
            srcURL="assets/products/stock-management.png" />
        </Col>
      </Row>
    </div>
  );
};

export default Products;
