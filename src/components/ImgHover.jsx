import React from "react";
import { styled } from "styled-components";
import Card from "./Card";

const ImgHover = (props) => {
  const ImgArea = styled.div`
    height: 100%;
    margin-right: 45px;
    position: relative;
    z-index: 9;
    .about-img {
      float: right;
      position: relative;
      right: 45px;
      top: 0;
      z-index: 9;
      @media (max-width: 576px) {
        right: -47px;
        width: 250px;
      }
      @media (max-width: 768px) {
        right: -35px;
      }
    }
    .about-img:nth-last-child(2) {
      float: left;
      left: 0;
      position: absolute;
      text-align: left;
      top: 70px;
      z-index: 8;
    }
    .hvr-effect {
      will-change: transform;
      transition: all 4000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s;
      transform: perspective(1000px) rotateX(0deg) rotateY(0deg)
        scale3d(1, 1, 1);
    }
    img {
      border-radius: 5px;
      box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.05),
        0 1.5rem 2.2rem rgba(0, 0, 0, 0.1);
      transition: all 1.5s cubic-bezier(0, 0, 0.2, 1);
      max-width: 100%;
    }
  `;

  return (
    <>
      <ImgArea>
        <div className="about-img">
          <div className="hvr-effect">
            <img src={props.imgsrc2} />
          </div>
        </div>
        <div className="about-img">
          <div className="hvr-effect">
            <img src={props.imgsrc1} />
          </div>
        </div>
      </ImgArea>
    </>
  );
};

export default ImgHover;
