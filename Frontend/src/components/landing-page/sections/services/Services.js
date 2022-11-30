import React from "react";
import delivererPic from "../../images/victoria-unsplash.jpg";
import driverPic from "../../images/paul-unsplash.jpg";
import "./Services.css";

function Services() {
  return (
    <section className="services">
      {/* <section className="services"> */}
      <div className="services-title">
        <h4>Safety, efficiency and Trust are our assets</h4>
      </div>
      <div className="content">
        {/* ***************  user   ************** */}
        <div className="user">
          <div className="user-img">
            <img className="content-img" src={delivererPic} alt="user-img" />
          </div>
          <div className="user-content">
            <h5 className="content-title">User services and delivery</h5>
            <p className="content-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              nesciunt molestiae ex inventore quibusdam id architecto quos
              cupiditate nobis magnam eum voluptatem quas quis obcaecati dolor
              vero veritatis similique alias.
            </p>
          </div>
        </div>

        {/* ***************  driver   ************** */}
        <div className="driver">
          <div>
            <img className="content-img" src={driverPic} alt="driver-img" />
          </div>
          <div className="driver-content">
            <h5 className="content-title">Driver services and delivery</h5>
            <p className="content-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              nesciunt molestiae ex inventore quibusdam id architecto quos
              cupiditate nobis magnam eum voluptatem quas quis obcaecati dolor
              vero veritatis similique alias.
            </p>
          </div>
        </div>
      </div>
      {/* </section> */}
    </section>
  );
}

export default Services;
