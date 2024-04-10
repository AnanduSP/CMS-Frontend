import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./HomePage.css";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

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
    // {
    //   header: "Seamless Integration with Existing Systems:",
    //   description:
    //     " We understand that efficiency is key to your success. That's why our platform is designed to seamlessly integrate with your existing POS systems, e-commerce platforms, and CRM software. Whether you're a small business or a large enterprise, our flexible solutions can be tailored to meet your unique needs, saving you time, money, and headaches.",
    // },
  ]);

  return (
    <div className="home-parent special-bg">
      <div className="content-wrapper">

        <div className="img-parent">

          <img className="banner-img" src='https://images.pexels.com/photos/54581/escalator-stairs-metal-segments-architecture-54581.jpeg?auto=compress&cs=tinysrgb&w=800'/>
          <div className="img-text">    
                
          Welcome to Coupon Management System!!
          </div>
        </div>
        {contentArr.map((content)=>{
                  return <div className="content-card"> 
                    <h3>{content.header}</h3>
                    <p>{content.description}</p>
                  </div>
                })}
        {/* <div className="content-card">
          <h3>Get Started Today</h3>
          <p>
            Ready to revolutionize your coupon marketing strategy? Dive into
            CMS's world-class platform with our risk-free trial or schedule a
            personalized demo with our expert consultants. Explore our extensive
            resources, customize your experience, and benefit from dedicated
            onboarding, training, and ongoing support. Join our vibrant
            community of marketers and start saving, attracting new customers,
            and growing your business today! Whether you're a small business
            owner looking to boost sales or a marketing professional seeking
            innovative solutions, CMS is here to empower you with the tools and
            insights you need to succeed. With our user-friendly interface,
            powerful analytics, and unmatched customer service, you'll be on
            your way to coupon marketing excellence in no time. Don't miss out
            on this opportunity to elevate your business and leave your
            competitors in the dust. Sign up now and experience the difference
            with CMS!
          </p>
          <Button
            sx={{ alignSelf: "flex-end", marginTop: "1rem" }}
            variant="outlined"
            onClick={() => {
              navigate("/general/login");
            }}
          >
            Click here to Login/SignUp
          </Button>
        </div>
        {contentArr.map((content) => {
          return (
            <div className="content-card">
              <h3>{content.header}</h3>
              <p>{content.description}</p>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default HomePage;
