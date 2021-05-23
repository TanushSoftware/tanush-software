import { Typography } from "antd";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import "./Clients.css";

const { Title } = Typography;

const Clients = ({ clientsRef }) => {
  const [clients] = useState([
    {
      id: 1,
      title: "appsnext",
      imageUrl: "appsnext.png",
    },
    {
      id: 2,
      title: "appylead",
      imageUrl: "appylead.png",
    },
    {
      id: 3,
      title: "cd",
      imageUrl: "cd.png",
    },
    {
      id: 4,
      title: "straviso",
      imageUrl: "straviso.png",
    },
    {
      id: 5,
      title: "tg",
      imageUrl: "tg.png",
    },
    {
      id: 6,
      title: "winco",
      imageUrl: "winco.png",
    },
    {
      id: 7,
      title: "metaleagle",
      imageUrl: "metaleagle.png",
    },
    {
      id: 8,
      title: "photish",
      imageUrl: "photish.png",
    },
  ]);
  return (
    <div className="clients content_root" ref={clientsRef}>
      <Title level={2} className="clients__title content_title">
        Our Clients
      </Title>
      <div className="clients__list">
        <Marquee gradient={false} speed={50}>
          {clients.map((client) => (
            <div className="clients__image" key={client.id}>
              <img
                src={`assets/clients/${client.imageUrl}`}
                alt={client.title}
                className="clients__img"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;
