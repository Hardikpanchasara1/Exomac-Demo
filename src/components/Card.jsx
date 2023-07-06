import React from "react";
import { Nav } from "react-bootstrap";
import { styled } from "styled-components";

const Card = () => {
  return (
    <>
      <Cardbasic>
        <div className="text-center card-div p-5">
          <div className="icon">
            <i class="fa-solid fa-image"></i>
          </div>
          <div className="content">
            <h3 className="title">Branding</h3>
            <div className="desc">
              <p>
                First impressions count! Make sure your brand works for you. We
                offer digital marketing.
              </p>
            </div>
            <Nav.Link >
              Learn More
            </Nav.Link>
          </div>
        </div>
      </Cardbasic>
    </>
  );
};

const Cardbasic = styled.div`
  .card-div:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transform: translateY(-2px);
    transition: all 0.2s;
  }
  .card-div{
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .icon {
    margin-bottom: 35px;
  }
  .icon i {
    font-size: 50px;
    color: #1292ee ;
  }
  .title {
    color: #030f27;
    font-size: 20px;
    line-height: 1;
    margin: 0;
  }
  .desc p {
    color: #748494;
    line-height: 1.6;
    margin: 20px 0;
  }
  a {
    color: #1292ee ;
  }
`;

export default Card;
