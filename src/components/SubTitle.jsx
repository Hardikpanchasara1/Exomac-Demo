import React from "react";
import { styled } from "styled-components";

const SubTitle = (props) => {
  const SubT = styled.div`
    .sub-title {
      display: block;
      color: #748494;
      font-size: 18px;
      font-weight: 400;
      line-height: 1.5;
      padding-left: 85px;
      margin-bottom: 30px;
      position: relative;
    }
    .sub-title::before {
      background-color: #1292ee;
      bottom: 0;
      content: "";
      height: 2px;
      left: 0;
      position: absolute;
      width: 70px;
    }
    .sub-title-two {
      color: #030f27;
      font-size: 32px;
      line-height: 42px;
      max-width: 420px;
      margin-bottom: 30px;
      @media (max-width: 992px) {
        max-width: 100%;
      }
    }
  `;
  return (
    <>
      <SubT>
        <span className="sub-title">{props.title1}</span>
        <h3 className="sub-title-two">{props.title2}</h3>
      </SubT>
    </>
  );
};

export default SubTitle;
