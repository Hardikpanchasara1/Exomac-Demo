import React from "react";
import { ProgressBar } from "react-bootstrap";
import { styled } from "styled-components";

const PBar = () => {
  return (
    <>
      <Progressbar>
        <h6>UX Design</h6>
        <ProgressBar variant="info" now={81} label={`${81}%`} />
        <h6>Marketing</h6>
        <ProgressBar variant="danger" now={72} label={`${72}%`} />
        <h6>Web Design</h6>
        <ProgressBar variant="wanrning" now={81} label={`${81}%`} />
        <h6>Development</h6>
        <ProgressBar variant="success" now={81} label={`${81}%`} />
      </Progressbar>
    </>
  );
};
const Progressbar = styled.div`
h6{
  margin: 30px 0 5px;
}
`;

export default PBar;
