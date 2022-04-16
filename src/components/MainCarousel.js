import { Carousel } from "antd";
import "./MainCarousel.css";
import { Typography } from "antd";

const { Title } = Typography;

const MainCarousel = ({ topRef }) => {
  return (
    <div ref={topRef}>
      <Carousel
        className="mainCarousel__carousel"
        dots={{ className: "mainCarousel__dots" }}
        autoplay
      >
        <div className="mainCarousel__contentStyle">
          <div>
            <Title>Welcome to Tanush Software</Title>
          </div>
        </div>
        {/* <div className="mainCarousel__contentStyle">
          <div>
            <Title>Code Quality Matters</Title>
          </div>
        </div>
        <div className="mainCarousel__contentStyle">
          <div>
            <Title>Welcome to Tanush Software</Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              provident eos commodi corporis, laborum neque placeat id maxime
              dolor delectus! Numquam ratione fuga possimus aut illum veniam
              animi officia saepe!
            </p>
          </div>
        </div>
        <div className="mainCarousel__contentStyle">
          <div>
            <Title>Welcome to Tanush Software</Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              provident eos commodi corporis, laborum neque placeat id maxime
              dolor delectus! Numquam ratione fuga possimus aut illum veniam
              animi officia saepe!
            </p>
          </div>
        </div> */}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
