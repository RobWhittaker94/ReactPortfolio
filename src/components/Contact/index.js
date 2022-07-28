import React from "react";
import "./btn.css";

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  Text,
  ArrowLeft,
} from "./ContactElements";

const Contact = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            <ArrowLeft />
            Back
          </Icon>
          <FormContent>
            <Form>
              <FormH1>Links</FormH1>
              <a
                class="btn"
                href="https://robwhittaker94.github.io/Robert-Whittaker-CV-July2022.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Here's my CV
              </a>
              <br />
              <a
                class="btn"
                href="https://www.linkedin.com/in/robert-whittaker-74b35682/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <br />

              <a
                class="btn"
                href="https://github.com/RobWhittaker94"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <br />
              <a
                class="btn"
                href="https://robertwhittaker-videoproduction-portfolio.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                VideoProduction Portfolio
              </a>

              <br />

              <br />
              <a
                class="btn"
                href="mailto:rbrwhittaker@yahoo.com"
                target="_blank"
                rel="noreferrer"
              >
                Email me
              </a>

              <Text>Thanks for checking out my portfolio!</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
