import React from "react";
import styles from "./MythBusters.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";

const MythBusters = () => {
  return (
    <div>
      <Helmet>
        <title>COVID-19 | Myth Busters</title>
      </Helmet>
      <Container>
        <br />
        <Row className={styles.rowH}>
          <Col md={12}>
            <h3>Rise above myths.</h3>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className={styles.col} md={12}>
            <h4>5G mobile networks DO NOT spread COVID-19</h4>
            <p>
              Viruses cannot travel on radio waves/mobile networks. COVID-19 is
              spreading in many countries that do not have 5G mobile networks.
              COVID-19 is spread through respiratory droplets when an infected
              person coughs, sneezes or speaks. People can also be infected by
              touching a contaminated surface and then their eyes, mouth or
              nose.
            </p>
          </Col>
          <Col className={styles.col} md={12}>
            <h4>
              Exposing yourself to the sun or to temperatures higher than 25C
              degrees DOES NOT prevent the coronavirus disease (COVID-19)
            </h4>
            <p>
              You can catch COVID-19, no matter how sunny or hot the weather is.
              Countries with hot weather have reported cases of COVID-19. To
              protect yourself, make sure you clean your hands frequently and
              thoroughly and avoid touching your eyes, mouth, and nose.
            </p>
          </Col>
          <Col className={styles.col} md={12}>
            <h4>
              You can recover from the coronavirus disease (COVID-19). Catching
              the new coronavirus DOES NOT mean you will have it for life.
            </h4>
            <p>
              You can recover from the coronavirus disease (COVID-19). Catching
              the new coronavirus DOES NOT mean you will have it for life.
            </p>
          </Col>
          <Col className={styles.col} md={12}>
            <h4>
              Being able to hold your breath for 10 seconds or more without
              coughing or feeling discomfort DOES NOT mean you are free from the
              coronavirus disease (COVID-19) or any other lung disease.
            </h4>
            <p>
              The most common symptoms of COVID-19 are dry cough, tiredness and
              fever. Some people may develop more severe forms of the disease,
              such as pneumonia. The best way to confirm if you have the virus
              producing COVID-19 disease is with a laboratory test. You cannot
              confirm it with this breathing exercise, which can even be
              dangerous.
            </p>
          </Col>
          <Col className={styles.col} md={12}>
            <h4>
              Drinking alcohol does not protect you against COVID-19 and can be
              dangerous
            </h4>
            <p>
              Frequent or excessive alcohol consumption can increase your risk
              of health problems.
            </p>
          </Col>
          <Col className={styles.col} md={12}>
            <h4>
              COVID-19 virus can be transmitted in areas with hot and humid
              climates
            </h4>
            <p>
              From the evidence so far, the COVID-19 virus can be transmitted in
              ALL AREAS, including areas with hot and humid weather. Regardless
              of climate, adopt protective measures if you live in, or travel to
              an area reporting COVID-19. The best way to protect yourself
              against COVID-19 is by frequently cleaning your hands. By doing
              this you eliminate viruses that may be on your hands and avoid
              infection that could occur by then touching your eyes, mouth, and
              nose.
            </p>
          </Col>
          <Col className={styles.col} md={12}></Col>
          <Col className={styles.col} md={12}>
            <h4>Cold weather and snow CANNOT kill the new coronavirus.</h4>
            <p>
              There is no reason to believe that cold weather can kill the new
              coronavirus or other diseases. The normal human body temperature
              remains around 36.5°C to 37°C, regardless of the external
              temperature or weather. The most effective way to protect yourself
              against the new coronavirus is by frequently cleaning your hands
              with alcohol-based hand rub or washing them with soap and water.
            </p>
          </Col>
          <Col className={styles.col} md={12}>
            <h4>
              Taking a hot bath does not prevent the new coronavirus disease
            </h4>
            <p>
              Taking a hot bath will not prevent you from catching COVID-19.
              Your normal body temperature remains around 36.5°C to 37°C,
              regardless of the temperature of your bath or shower. Actually,
              taking a hot bath with extremely hot water can be harmful, as it
              can burn you. The best way to protect yourself against COVID-19 is
              by frequently cleaning your hands. By doing this you eliminate
              viruses that may be on your hands and avoid infection that could
              occur by then touching your eyes, mouth, and nose.
            </p>
          </Col>
          <Col className={styles.col} md={12}>
            <h4>
              The new coronavirus CANNOT be transmitted through mosquito bites.
            </h4>
            <p>
              To date there has been no information nor evidence to suggest that
              the new coronavirus could be transmitted by mosquitoes. The new
              coronavirus is a respiratory virus which spreads primarily through
              droplets generated when an infected person coughs or sneezes, or
              through droplets of saliva or discharge from the nose. To protect
              yourself, clean your hands frequently with an alcohol-based hand
              rub or wash them with soap and water. Also, avoid close contact
              with anyone who is coughing and sneezing.
            </p>
          </Col>
          <Col className={styles.col} md={12}>
            <h4>Are hand dryers effective in killing the new coronavirus?</h4>
            <p>
              No. Hand dryers are not effective in killing the 2019-nCoV. To
              protect yourself against the new coronavirus, you should
              frequently clean your hands with an alcohol-based hand rub or wash
              them with soap and water. Once your hands are cleaned, you should
              dry them thoroughly by using paper towels or a warm air dryer.
            </p>
          </Col>
          <Col className={styles.col} md={12}>
            <h4>
              Can an ultraviolet disinfection lamp kill the new coronavirus?
            </h4>
            <p>
              UV lamps should not be used to sterilize hands or other areas of
              skin as UV radiation can cause skin irritation.
            </p>
          </Col>
          <Col className={styles.col} md={12}>
            <h4>
              How effective are thermal scanners in detecting people infected
              with the new coronavirus?
            </h4>
            <p>
              Thermal scanners are effective in detecting people who have
              developed a fever (i.e. have a higher than normal body
              temperature) because of infection with the new coronavirus.
              However, they cannot detect people who are infected but are not
              yet sick with fever. This is because it takes between 2 and 10
              days before people who are infected become sick and develop a
              fever.
            </p>
          </Col>
          <Col className={styles.col} md={12}>
            <h4>
              Can spraying alcohol or chlorine all over your body kill the new
              coronavirus?
            </h4>
            <p>
              No. Spraying alcohol or chlorine all over your body will not kill
              viruses that have already entered your body. Spraying such
              substances can be harmful to clothes or mucous membranes (i.e.
              eyes, mouth). Be aware that both alcohol and chlorine can be
              useful to disinfect surfaces, but they need to be used under
              appropriate recommendations.
            </p>
          </Col>
          <Col className={styles.col} md={12}>
            <h4>
              Do vaccines against pneumonia protect you against the new
              coronavirus?
            </h4>
            <p>
              No. Vaccines against pneumonia, such as pneumococcal vaccine and
              Haemophilus influenza type B (Hib) vaccine, do not provide
              protection against the new coronavirus. The virus is so new and
              different that it needs its own vaccine. Researchers are trying to
              develop a vaccine against 2019-nCoV, and WHO is supporting their
              efforts. Although these vaccines are not effective against
              2019-nCoV, vaccination against respiratory illnesses is highly
              recommended to protect your health.
            </p>
          </Col>
          <Col className={styles.col} md={12}>
            <h4>
              Can regularly rinsing your nose with saline help prevent infection
              with the new coronavirus?
            </h4>
            <p>
              No. There is no evidence that regularly rinsing the nose with
              saline has protected people from infection with the new
              coronavirus. There is some limited evidence that regularly rinsing
              nose with saline can help people recover more quickly from the
              common cold. However, regularly rinsing the nose has not been
              shown to prevent respiratory infections.
            </p>
          </Col>
          <Col className={styles.col} md={12}>
            <h4>
              Can eating garlic help prevent infection with the new coronavirus?
            </h4>
            <p>
              Garlic is a healthy food that may have some antimicrobial
              properties. However, there is no evidence from the current
              outbreak that eating garlic has protected people from the new
              coronavirus.
            </p>
          </Col>
          <Col className={styles.col} md={12}>
            <h4>
              Does the new coronavirus affect older people, or are younger
              people also susceptible?
            </h4>
            <p>
              People of all ages can be infected by the new coronavirus
              (2019-nCoV). Older people, and people with pre-existing medical
              conditions (such as asthma, diabetes, heart disease) appear to be
              more vulnerable to becoming severely ill with the virus. WHO
              advises people of all ages to take steps to protect themselves
              from the virus, for example by following good hand hygiene and
              good respiratory hygiene.
            </p>
          </Col>
          <Col className={styles.col} md={12}>
            <h4>
              Are antibiotics effective in preventing and treating the new
              coronavirus?
            </h4>
            <p>
              No, antibiotics do not work against viruses, only bacteria. The
              new coronavirus (2019-nCoV) is a virus and, therefore, antibiotics
              should not be used as a means of prevention or treatment. However,
              if you are hospitalized for the 2019-nCoV, you may receive
              antibiotics because bacterial co-infection is possible.
            </p>
          </Col>
          <Col className={styles.col} md={12}>
            <h4>
              Are there any specific medicines to prevent or treat the new
              coronavirus?
            </h4>
            <p>
              To date, there is no specific medicine recommended to prevent or
              treat the new coronavirus (2019-nCoV). However, those infected
              with the virus should receive appropriate care to relieve and
              treat symptoms, and those with severe illness should receive
              optimized supportive care. Some specific treatments are under
              investigation, and will be tested through clinical trials. WHO is
              helping to accelerate research and development efforts with a
              range or partners.
            </p>
          </Col>
        </Row>
        <a href="https://www.who.int" target="_blank" rel="noopener noreferrer">
          Source
        </a>
      </Container>
    </div>
  );
};

export default MythBusters;
