import { Typography } from 'antd';
import "./About.css";

const {Title} = Typography;

const About = ({aboutsRef}) => {
    return (
        <div className="Abouts content_root" ref={aboutsRef}>
            <Title level={2} className="abouts__title content_title">
                About Us    
            </Title>    
        </div>
    )
};

export default About;