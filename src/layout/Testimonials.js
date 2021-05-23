import { Carousel } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import TestCard from "../components/TestCard";
import "./Testimonials.css";

const Tesimonials = () => {
  const [testimonials] = useState([
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas in dolores nisi reiciendis pariatur. Incidunt impedit repudiandae delectus repellat eos.",
      author: "Steve Jobs",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas in dolores nisi reiciendis pariatur.",
      author: "Elon Musk",
    },
  ]);
  return (
    <div className="testimonials content_root">
      <Title level={2} className="testimonials__title content_title">
        Testimonials
      </Title>
      <div className="testimonials__list">
        <Carousel className="mainCarousel__carousel" autoplay effect="fade">
          {testimonials.map((testimonial) => (
            <TestCard testimonial={testimonial} key={testimonial.id} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Tesimonials;
