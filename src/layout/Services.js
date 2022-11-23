import { Col, Row, Badge, Space, Tabs } from "antd";
import CustomCard from "../components/CustomCard";
import "./Services.css";
import React, { useState } from "react";

const Services = ({ servicesRef }) => {
  const [tabPosition, setTabPosition] = useState("left");

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  const data = [
    {
      title: "Custom Software Development",
      head: "Custom Software Solutions to drive your niche & strategic business",
      describe:
        "With industry and technology expertise we help you develop your custom software to help you digitalize your processes, enhance your operations, drive strategic business outcomes.",
      services: [
        "Product Engineering",
        "Digital Transformation",
        "MVP Development",
        "Enterprise Applications",
        "Integration Services",
      ],
    },
    {
      title: "Web Application Development",
      head: "Build your Web application with cutting-edge technologies and battle-tested tools.",
      describe:
        "We leverage long-standing experience in building and offering custom web application helping you implement the right technologies in areas that are best suited to bring your business value",
      services: [
        "Website Development",
        "E-Commerce Web App Development",
        "Software Development",
        "Web Application Testing",
        "Web Application Support & Maintenance",
        "Progressive Web Apps",
      ],
    },
    {
      title: "Mobile App Development",
      head: "Mobile App Development That Turns Your Ideas Into Reality",
      describe:
        "To make an app with the capability of earning billions, you need a reliable tech partner",
      services: [
        "Android App Development",
        "iOS App Development",
        "React Native Cross Platform App Development",
        "Flutter Cross Platform App Development",
        "Mobile App Support & Maintenance",
        "Mobile App Testing",
      ],
    },
    {
      title: "Support and Maintenance",
      head: "Many times, one focuses only on the development, but it is the maintenance that keeps it going!",
      describe:
        "We aspire to keep your software/app running with 100% efficiency. And for that, post-launch service is as crucial as quality development. We understand your system, source codes so identifying glitches becomes faster and scaling up becomes easy and cost-efficient.",
      services: [
        "Modifications & Technical Improvements",
        "Bug & Glitch Removal",
        "Performance Improvements",
      ],
    },
    {
      title: "QA & Testing",
      head: "Enhance Customer Experience, Enhance Returns.",
      describe:
        "Get faster & assured quality testing solutions with our 10,000+ test cases & over 1000+ automation scripts!",
      services: [
        "Automation Testing",
        "Manual Testing",
        "Security Software Testing",
        "Performance Testing",
        "Compatibility Software Testing",
        "API Testing",
      ],
    },
    {
      title: "AI & ML",
      head: "In today’s rapidly evolving landscape, data and AI is paramount.",
      describe:
        "Vision of Narola's AIML service is to bring out innovative, unpredictable solutions that can solve to complex business challenges beyond the capabilities of human.",
      services: [
        "Business Analytics",
        "Data Analytics & Engineering",
        "Predictive & Cognitive Analytics",
        "Recommendation Engine",
        "Chatbots",
        "Natural Language Processing",
        "Visual Search & Image Recognition",
        "Voice based AI",
      ],
    },
    {
      title: "Cloud Computing",
      head: "End-to-End Cloud Service with industry specific expertise",
      describe:
        "Cloud is your platform for Digitalisation journey - maximize the business outcomes of cloud adoption with us!",
      services: [
        "Cloud Migration Services",
        "Cloud Automation",
        "Cloud Security",
        "Highly Available and Fault Tolerant Infra",
        "Continuous Monitoring",
      ],
    },
    {
      title: "DevOps",
      head: "It's time to consider opting for DevOps to improve your company’s productivity.",
      describe:
        "As a DevOps development company, we combine skills in software development and automation to create a unified and better approach to both.",
      services: [
        "Managed DevOps Services",
        "DevOps Infrastructure Automation",
        "Cloud Computing",
        "Continuous Integration and Continuous Deployment (CI/CD)",
        "DevOps Automation Service",
        "DevOps Implementation service",
        "Security & Compliance",
        "Microservices in DevOps",
      ],
    },
    {
      title: "Staff Augmentation",
      head: "Hire Skilled IT Experts at the Click of a Button",
      describe:
        "Our Staff Augmentation services will give a big boost to your existing team and will help you achieve your business goals quickly.",
      services: ["Hire a Dedicated Team", "Hire a Developer"],
    },
  ];

  return (
    <div ref={servicesRef} style={{ margin: 40, textAlign: "center" }}>
      <h1 style={{ textAlign: "center", margin: 40, fontSize: 36 }}>
        Services We Offer
      </h1>
      <div>
        <Tabs
          tabPosition="left"
          animated
          items={new Array(9).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {
              label: data[i].title,
              key: id,
              children: (
                <div style={{ textAlign: "left", padding: 40 }}>
                  <h2>{data[i].head}</h2>
                  <p>{data[i].describe}</p>
                  <div style={{flex: "1 1 0", fontSize: 24,}}>
                    {data[i].services.map((service, index) => (
                      <div style={{margin: 30, display: 'flex', flexWrap: "wrap"}}>
                        <Space>
                          <Badge
                            className="site-badge-count-109"
                            count={index + 1}
                            style={{ backgroundColor: "#2592cf" }}
                          />
                          <span>{service}</span>
                        </Space>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            };
          })}
        />
      </div>
    </div>
  );
};

export default Services;
