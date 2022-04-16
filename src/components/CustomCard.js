import { Card, Image } from "antd";
import { CodeSandboxOutlined } from "@ant-design/icons";
import "./CustomCard.css";

const CustomCard = ({ text, showSandBox = true, srcURL=false }) => {
  return (
    <Card bordered={false} className="customCard__card">
      {srcURL && <Image src={srcURL} width={300} height={150} className="customCard__image"></Image>}
      {showSandBox && <CodeSandboxOutlined className="customCard__icon" /> }
      <p>{text}</p>
    </Card>
  );
};

export default CustomCard;
