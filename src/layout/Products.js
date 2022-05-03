import { Col, Row } from "antd";
import CustomCard from "../components/CustomCard";
import "./Products.css";

const Products = ({ productsRef }) => {
  return (
    <div className="products content_root" ref={productsRef}>
      <p className="clients__title">Products</p>
      <br />
      
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
          <CustomCard
            text="Stock Management"
            showSandBox={false}
            srcURL="assets/products/stock-management.png"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Products;
