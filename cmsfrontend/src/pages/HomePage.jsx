import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import "./HomePage.css";

const HomePage = () => {
  const [contentArr, setContentArr] = useState([
    {
      header: "Innovative Coupon Creation Tools: ",
      description:
        "Say goodbye to cookie-cutter coupons. With CMS, you have the power to create highly customized, visually stunning coupons that reflect your brand identity. Our intuitive design tools empower you to craft compelling offers tailored to your target audience, helping you stand out in a crowded marketplace.",
    },
    {
      header: "Strategic Distribution Channels: ",
      description:
        " Gone are the days of one-size-fits-all marketing. Our platform offers a wide range of distribution channels to ensure your coupons reach the right people at the right time. From email campaigns and social media promotions to mobile app integrations and print materials, we'll help you craft a multi-channel strategy that maximizes your reach and drives results.",
    },
    {
      header: "Advanced Analytics and Insights:",
      description:
        "Knowledge is power, especially in the world of marketing. With [Your Company Name], you'll gain access to powerful analytics tools that provide real-time insights into coupon performance, customer behavior, and campaign effectiveness. Armed with this data, you can make informed decisions, optimize your marketing efforts, and drive continuous improvement.",
    },
    {
      header: "Seamless Integration with Existing Systems:",
      description:
        " We understand that efficiency is key to your success. That's why our platform is designed to seamlessly integrate with your existing POS systems, e-commerce platforms, and CRM software. Whether you're a small business or a large enterprise, our flexible solutions can be tailored to meet your unique needs, saving you time, money, and headaches.",
    },
  ]);

  return (
    <div className="home-parent special-bg">
      <div className="content-wrapper">
        {contentArr.map((content) => {
          return (
            <div className="content-card">
              <h3>{content.header}</h3>
              <p>{content.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
