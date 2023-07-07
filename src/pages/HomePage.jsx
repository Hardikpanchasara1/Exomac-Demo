import React from "react";
import {
  Carousel,
  Col,
  Container,
  Form,
  InputGroup,
  Nav,
  Row,
} from "react-bootstrap";
import { styled } from "styled-components";
import ImgHover from "../components/ImgHover";
import HomePage1 from "../img/home_agency_about_1.jpg";
import HomePage2 from "../img/home_agency_about_2.jpg";
import skill1 from "../img/skill-1.jpg";
import skill2 from "../img/skill-2.jpg";
import SubTitle from "../components/SubTitle";
import MainTitle from "../components/MainTitle";
import PBar from "../components/PBar";
import Card from "../components/Card";
import hero1 from "../img/hero-1.jpg";
import hero2 from "../img/hero-2.jpg";
import hero3 from "../img/hero-3.jpg";
import blog1 from "../img/blog-1.jpg";
import blog2 from "../img/blog-2.jpg";
import blog3 from "../img/blog-3.jpg";

const HomePage = () => {
  //Main titles start

  const sec2MainTitle1 = "We are a full-service creative agency";
  const sec2MainTitle2 =
    " Our team of designers, developers and creatives are perfectionists who love what they do and love";
  const sec3MainTitle1 = "We create a unique action plan for brands";
  const sec3MainTitle2 =
    "Get your company heading in the right direction with our digital marketing strategist ";
  const sec7MainTitle1 = "Let’s find out how to work together";
  const sec7MainTitle2 =
    "Ready to start your project? The contact information collected through this form will only be used to send a response to your inquiry.";

  //Main titles end

  //subtitles start
  const sec2title1 = "Every day brings new challenges";
  const sec2title2 = "Creative agency focused on vision, product and people";
  const sec4title1 = "Your success is our success";
  const sec4title2 = "Web design, marketing & SEO solutions that get results";
  //subtitles end
  return (
    <>
      <HomeDiv className="m-0">
        <Carousel className="slider">
          <Carousel.Item className="img-h position-relative">
            <img className="d-block" src={hero1} alt="First slide" />
            <Carousel.Caption className="po-cap col-6 col-sm-6  ">
              <div class="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8 text-start">
                <h2 class="title">
                  Designing awesome brands &amp; experiences
                </h2>
                <div class="desc">
                  <p>
                    We are an agency located in New York. We think strategy,
                    craft design, develop digital and create motion. To forward
                    your brand and business.
                  </p>
                </div>
                <a href="/">
                  <button className="carosel-btn-1">Get Started</button>
                </a>
                <a href="/">
                  <button className="carosel-btn-2"> Learn More </button>
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="img-h position-relative">
            <img className="d-block" src={hero2} alt="Second slide" />
            <Carousel.Caption className="po-cap col-6 col-sm-6  ">
              <div class="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8 text-start">
                <h2 class="title">
                  Designing awesome brands &amp; experiences
                </h2>
                <div class="desc">
                  <p>
                    We are an agency located in New York. We think strategy,
                    craft design, develop digital and create motion. To forward
                    your brand and business.
                  </p>
                </div>
                <a href="/">
                  <button className="carosel-btn-1">Get Started</button>
                </a>
                <a href="/">
                  <button className="carosel-btn-2"> Learn More </button>
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="img-h position-relative">
            <img className="d-block" src={hero3} alt="Third slide" />
            <Carousel.Caption className="po-cap col-6 col-sm-6  ">
              <div class="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8 text-start">
                <h2 class="title">
                  Designing awesome brands &amp; experiences
                </h2>
                <div class="desc">
                  <p>
                    We are an agency located in New York. We think strategy,
                    craft design, develop digital and create motion. To forward
                    your brand and business.
                  </p>
                </div>
                <a href="/">
                  <button className="carosel-btn-1">Get Started</button>
                </a>
                <a href="/">
                  <button className="carosel-btn-2"> Learn More </button>
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Sec className="sec-two ">
          <Container className="mt-5">
            <MainTitle
              secMainTitle1={sec2MainTitle1}
              secMainTitle2={sec2MainTitle2}
            />
            <div>
              <Row>
                <Col xs={12} lg={7}>
                  <ImgHover imgsrc1={HomePage1} imgsrc2={HomePage2} />
                </Col>
                <Col xs={12} lg={5} className="sec-two-rts ">
                  <SubTitle title1={sec2title1} title2={sec2title2} />
                  <p className="sub-title-p">
                    We’re boldly individual, always original and refreshingly
                    easy-going. Our vision, passion and ideas are matched with
                    focus, expertise and flair.
                  </p>
                  <div>
                    <button className="abt-btn">About Us</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Sec>

        <Sec className="sec-three">
          <Container>
            <MainTitle
              secMainTitle1={sec3MainTitle1}
              secMainTitle2={sec3MainTitle2}
            />
            <Row>
              <Col xs={12} lg={4}>
                <Card />
              </Col>
              <Col xs={12} lg={4}>
                <Card />
              </Col>
              <Col xs={12} lg={4}>
                <Card />
              </Col>
            </Row>
          </Container>
        </Sec>

        <Sec className="sec-four">
          <Container>
            <Row>
              <Col xs={12} lg={7}>
                <ImgHover imgsrc1={skill1} imgsrc2={skill2} />
              </Col>
              <Col xs={12} lg={5} className="sec-two-rts mt-md">
                <SubTitle title1={sec4title1} title2={sec4title2} />
                <PBar />
              </Col>
            </Row>
          </Container>
        </Sec>

        <Sec className="sec-six">
          <Container>
            <MainTitle
              secMainTitle1={sec2MainTitle1}
              secMainTitle2={sec2MainTitle2}
            />
            <Row>
              <Col xs={12} md={6} lg={4} className="mb-4">
                <div className="">
                  <div className="thumbnail">
                    {/* <a> */}
                      <img src={blog1} alt="blog1" className="img-fluid w-100" />
                    {/* </a> */}
                  </div>
                  <div className="info ">
                    <ul className="d-flex p-0 m-0 ">
                      <li className="me-4">
                        <i className="fa-solid fa-calendar"></i> &nbsp; 10 Oct
                        2020
                      </li>
                      <li>
                        <i className="fa-solid fa-eye"></i> &nbsp; 70 views
                      </li>
                    </ul>
                    <h3 className="sec-six-heading">
                      How your sales can work together in account-based
                      marketing
                    </h3>
                    <Nav.Link className="sec-six-link">Read More</Nav.Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Sec>

        <Sec className="sec-seven">
          <Container>
            <MainTitle
              secMainTitle1={sec7MainTitle1}
              secMainTitle2={sec7MainTitle2}
            />
            <div className="sec-seven-inp-g mx-auto">
              <InputGroup className="" size="lg">
                <Form.Control
                  placeholder="Enter your email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  type="email"
                  className="sec-seven-input "
                />
                <InputGroup.Text
                  id="basic-addon2"
                  className="text-bg-primary sec-seven-btn"
                >
                  Subscribe
                </InputGroup.Text>
              </InputGroup>
            </div>
          </Container>
        </Sec>

        <Sec className="sec-eight py-5 my-5">
          <Container>
            <MainTitle
              secMainTitle1={sec2MainTitle1}
              secMainTitle2={sec2MainTitle2}
            />
            <Row>
              <Col xs={12} md={6} lg={4} className="mb-4">
                <Row className="sec-eight-card py-5 px-4 me-4 mx-4 justify-content-center align-items-center">
                  <Col md={12} xl={3}>
                    <i class="fa-solid fa-image fs-1 text-primary"></i>
                  </Col>
                  <Col xs={8} md={12} xl={9} className="mt-md-3">
                    <h4 className="sec-eight-card-title">Our Locations</h4>
                    <span className="sec-eight-card-subtitle">
                      110 W 34th St, NYC.
                      <br />
                      67 Madison Avenue.
                    </span>
                  </Col>
                  <Col className="extra-col"></Col>
                </Row>
              </Col>
              <Col xs={12} md={6} lg={4} className="mb-4">
                <Row className="sec-eight-card py-5 px-4 me-4 mx-4 justify-content-center align-items-center">
                  <Col md={12} xl={3}>
                    <i class="fa-solid fa-image fs-1 text-primary"></i>
                  </Col>
                  <Col xs={8} md={12} xl={9} className="mt-md-3">
                    <h4 className="sec-eight-card-title">Our Locations</h4>
                    <span className="sec-eight-card-subtitle">
                      110 W 34th St, NYC.
                      <br />
                      67 Madison Avenue.
                    </span>
                  </Col>
                  <Col className="extra-col"></Col>
                </Row>
              </Col>
              <Col xs={12} md={6} lg={4} className="mb-4">
                <Row className="sec-eight-card py-5 px-4 me-4 mx-4 justify-content-center align-items-center">
                  <Col md={12} xl={3}>
                    <i class="fa-solid fa-image fs-1 text-primary"></i>
                  </Col>
                  <Col xs={8} md={12} xl={9} className="mt-md-3">
                    <h4 className="sec-eight-card-title">Our Locations</h4>
                    <span className="sec-eight-card-subtitle">
                      110 W 34th St, NYC.
                      <br />
                      67 Madison Avenue.
                    </span>
                  </Col>
                  <Col className="extra-col"></Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Sec>
      </HomeDiv>
    </>
  );
};

const HomeDiv = styled.div`
  width: 100%;
  .sec-two {
    padding: 90px 0 200px;
    margin-top: 70px;
    @media only screen and (max-width: 768px) and (min-width: 1px) {
      margin-top: 300px;
    }
  }
  .sec-three {
    padding: 90px 0 90px;
    background-color: #f8faff;
  }
  .sec-four {
    padding: 90px 0 200px;
    .mt-md {
      @media (max-width: 992px) {
        margin-top: 230px;
      }
    }
  }
  .sec-six {
    .info {
      padding: 30px 0;
      ul li{
        font-size: 14px;
      }
    }
    .sec-six-heading {
      font-size: 26px;
      padding: 10px 0 20px;
      margin: 0;
    }
    .sec-six-heading:hover {
      color: #1292ee;
      cursor: pointer;
    }
    .sec-six-link {
      color: #1292ee;
    }
     
  }
  .sec-seven {
    padding: 100px 0;
    background-color: #748494;
    background-image: url("../img/newsletter.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    .heading {
      color: white;
    }
    .sub-hed {
      color: white;
    }
    .sec-seven-inp-g {
      width: 60%;
      @media (max-width: 1990px) {
        width: 45%;
      }
      @media (max-width: 1400px) {
        width: 50%;
      }
      @media (max-width: 1200px) {
        width: 60%;
      }
      @media (max-width: 992px) {
        width: 80%;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
    }
    .sec-seven-input {
      color: #748494;
      font-size: medium;
      /* border: none; */
      outline: none !important;
      border-radius: 5px 0 0 5px;
      &:focus {
        outline: none !important;
      }
      &::placeholder {
        color: #748494;
        font-size: medium;
      }
      @media (max-width: 768px) {
        border-radius: 5px !important;
        border-width: 1px;
        margin-bottom: 15px;
        min-height: 52px;
        padding: 3px 20px;
        width: 100%;
      }
    }
    .sec-seven-btn {
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      line-height: 50px;
      outline: none;
      border: none;
      padding: 0 40px;
      white-space: nowrap;
      border-radius: 0 5px 5px 0;
      @media (max-width: 768px) {
        font-size: 14px;
        height: 40px;
        line-height: 35px;
        padding: 0 20px;
        border-radius: 5px !important;
        width: 160px;
        align-items: center;
        justify-content: center;
        line-height: 50px;
      }
    }
    .sec-seven-btn:hover {
      color: white !important;
      background: black !important;
    }
  }
  .sec-eight-card {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    .extra-col {
      @media (max-width: 1200px) {
        display: none;
      }
    }
  }
  .sec-eight-card-title {
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    margin-bottom: 15px;
    color: #030f27;
  }
  .sec-eight-card-subtitle {
    display: block;
    font-size: 16px;
    line-height: 27px;
    color: #748494;
  }
  .slider {
    height: 100vh;
    width: 100%;
  }
  .img-h {
    height: 100%;
    width: 100%;
  }
  .slider .img-h img {
    object-fit: cover;
    height: 100%;
    /* width: 100%; */
    @media (min-width: 992px) {
      width: 100%;
    }
  }
  .po-cap {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(25%, -50%);
    @media only screen and (max-width: 768px) and (min-width: 576px) {
      top: 50%;
      left: 0%;
      transform: translate(25%, -50%);
    }
    @media only screen and (max-width: 992px) and (min-width: 769px) {
      top: 50%;
      left: 0%;
      transform: translate(25%, -50%);
    }
    @media only screen and (max-width: 1199px) and (min-width: 993px) {
      top: 50%;
      left: 0%;
      transform: translate(25%, -50%);
    }
    @media only screen and (max-width: 1399px) and (min-width: 1200px) {
      top: 50%;
      left: 0%;
      transform: translate(20%, -50%);
    }
    @media only screen and (max-width: 1999px) and (min-width: 1400px) {
      top: 50%;
      left: 0%;
      transform: translate(31%, -50%);
    }

    h2 {
      color: white;
      line-height: 1.2;
      margin-bottom: 40px;
      @media only screen and (max-width: 992px) and (min-width: 769px) {
        font-size: 40px;
      }
      @media only screen and (max-width: 1199px) and (min-width: 993px) {
        font-size: 50px;
      }
      @media only screen and (max-width: 1399px) and (min-width: 1200px) {
        font-size: 55px;
      }
      @media only screen and (max-width: 1999px) and (min-width: 1400px) {
        font-size: 72px;
      }
    }
    p {
      font-weight: 600;
      line-height: 1.67;
      margin-bottom: 40px;
      @media only screen and (max-width: 992px) and (min-width: 769px) {
        font-size: 16px;
      }
      @media only screen and (max-width: 1199px) and (min-width: 993px) {
        font-size: 16px;
      }
      @media only screen and (max-width: 1399px) and (min-width: 1200px) {
        font-size: 18px;
      }
      @media only screen and (max-width: 1999px) and (min-width: 1400px) {
        font-size: 20px;
      }
    }
    .carosel-btn-1 {
      align-items: center;
      border: none;
      margin-right: 10px;
      border-radius: 3px;
      cursor: pointer;
      font-weight: 700;
      height: 52px;
      justify-content: center;
      line-height: 50px;
      outline: none;
      padding: 0 40px;
      color: white;
      background: #1292ee;
      position: relative;
      z-index: 2;
      margin-bottom: 10px;
    }
    .carosel-btn-1:hover {
      color: white;
      background: black;
    }
    .carosel-btn-2 {
      align-items: center;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      font-weight: 700;
      height: 52px;
      justify-content: center;
      line-height: 50px;
      outline: none;
      padding: 0 40px;
      color: white;
      position: relative;
      background: transparent;
      border: 1px solid white;
      z-index: 2;
    }
    .carosel-btn-2:hover {
      color: white;
      border: 1px solid transparent;
      background: #1292ee;
    }
  }
`;

const Sec = styled.div`
  width: 100%;

  .sec-two-rts {
    min-height: 340px;
    @media (max-width: 992px) {
      margin-top: 150px;
    }
  }
  .sub-title-p {
    /* font-weight: 500; */
    max-width: 420px;
    /* line-height: 24px; */
    margin-bottom: 30px;
    color: #8c89a2;
    @media (max-width: 992px) {
      max-width: 100%;
    }
  }
  .abt-btn {
    align-items: center;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    height: 52px;
    justify-content: center;
    line-height: 50px;
    outline: none;
    padding: 0 40px;
    color: white;
    background: #1292ee;
  }
  .abt-btn:hover {
    color: white;
    background: black;
  }
`;

export default HomePage;
