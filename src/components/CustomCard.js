import { Card } from "antd";
import { CodeSandboxOutlined } from "@ant-design/icons";
import "./CustomCard.css";

const CustomCard = ({ text }) => {
  return (
    <Card bordered={false} className="customCard__card">
      <CodeSandboxOutlined className="customCard__icon" />
      <p>{text}</p>
    </Card>
  );
};

export default CustomCard;
