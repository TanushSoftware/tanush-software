// import {Typography} from 'antd';
import "./Contact.css";

// const {Title} = Typography;

const Contact = ({contactsRef}) => {
    return (
        <div className="Contact content_root"  ref={contactsRef}>
           Contact Us
        </div>
    )
};

export default Contact;