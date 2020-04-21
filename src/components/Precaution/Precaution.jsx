import React from "react";
import styles from "./Precaution.module.css";
import { Container, Row, Col } from "react-bootstrap";
import stayhome from "../../images/stayhome.gif";
import handwash from "../../images/handwash.gif";
import respiration from "../../images/respiration.gif";
import wearmask from "../../images/wearmask.gif";
import socialdistance from "../../images/socialdistance.gif";
import fever from "../../images/fever.gif";
import { Helmet } from "react-helmet";

const Prevention = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>COVID-19 | Precautions</title>
      </Helmet>
      <Container>
        <br />
        <Row className={styles.rowH}>
          <Col md={12}>
            <h3>Because precautions are better than cure.</h3>
          </Col>
        </Row>
        <br />
        <Row className={styles.row}>
          <Col className={styles.col} sm={6}>
            <img src={stayhome} alt="Stay Home" />
            <h5>Stay Home, Stay Safe.</h5>
            <p>
              Why? Because right now, home is the safest place in the world and
              also it is the only place where you trust the toilet seats. So,
              why not trust it and stay in there.
            </p>
          </Col>
          <Col className={styles.col} sm={6}>
            <img src={handwash} alt="Wash your hands" />
            <h5>Wash your hands frequently.</h5>
            <p>
              Why? Washing your hands with soap and water or using alcohol-based
              hand rub kills viruses that may be on your hands.
            </p>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col className={styles.col} md={6}>
            <img src={socialdistance} alt="Social Distance" />
            <h5>Maintain Social Distancing.</h5>
            <p>
              Why? When someone coughs or sneezes they spray small liquid
              droplets from their nose or mouth which may contain virus. If you
              are too close, you can breathe in the droplets, including the
              COVID-19 virus if the person coughing has the disease.
            </p>
          </Col>
          <Col className={styles.col} md={6}>
            <img src={wearmask} alt="Wear Mask" />
            <h5>Avoid touching eyes, nose and mouth and wear mask.</h5>
            <p>
              Why? Hands touch many surfaces and can pick up viruses. Once
              contaminated, hands can transfer the virus to your eyes, nose or
              mouth. From there, the virus can enter your body and can make you
              sick.
            </p>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col className={styles.col} md={6}>
            <img src={respiration} alt="Respiratory Hygiene" />

            <h5>Practice Respiratory Hygiene.</h5>
            <p>
              Why? Droplets spread virus. By following good respiratory hygiene
              you protect the people around you from viruses such as cold, flu
              and COVID-19.This means covering your mouth and nose with your
              bent elbow or tissue when you cough or sneeze. Then dispose of the
              used tissue immediately.
            </p>
          </Col>
          <Col className={styles.col} md={6}>
            <img src={fever} alt="Fever" />
            <h5>Not feeling well.</h5>
            <p>
              Stay home if you feel unwell. If you have a fever, cough and
              difficulty breathing, seek medical attention and call in advance.
              Follow the directions of your local health authority.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Prevention;
