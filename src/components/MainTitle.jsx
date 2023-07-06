import React from "react";
import { styled } from "styled-components";

const MainTitle = (props) => {
  return (
    <>
      <MainT>
        <h2 className="heading text-center">{props.secMainTitle1}</h2>
        <p className="sub-hed text-center">{props.secMainTitle2}</p>
      </MainT>
    </>
  );
};

const MainT = styled.div`
  .heading {
    color: #030f27;
    font-size: 42px;
    font-weight: 600;
    line-height: 1;
    margin: 0;
  }
  .sub-hed {
    display: block;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    margin: 20px auto 0;
    max-width: 530px;
    color: #8c89a2;
    margin-bottom: 40px;
  }
`;

export default MainTitle;
