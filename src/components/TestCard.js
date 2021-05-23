import { Card } from "antd";
import Title from "antd/lib/typography/Title";
import "./TestCard.css";

const TestCard = ({ testimonial }) => {
  return (
    <Card className="testCard__card" bordered={false}>
      <Title level={3} className="testCard__title">
        {testimonial.text}
      </Title>
      <Title level={2} className="testCard__subtitle">
        {testimonial.author}
      </Title>
    </Card>
  );
};

export default TestCard;
