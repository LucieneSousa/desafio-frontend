import React from "react";
import { Card, Figure } from "react-bootstrap";
import ButtonCard from "./../components/buttonCard";
import "./home.css";
import "./mobile.css";
import cel1 from "./../assets/cel1.svg";
import cel2 from "./../assets/cel2.svg";
import cel3 from "./../assets/cel3.svg";
import cel4 from "./../assets/cel4.svg";
import FigureImage from "react-bootstrap/esm/FigureImage";

function Home() {
  return (
    <div>
      <Card bsPrefix="fundo">
        <Card.Text className="text-title">Food app</Card.Text>
        <Card.Text className="title">Why stay hungry when</Card.Text>
        <Card.Text className="title">you can order form Bella Onojie</Card.Text>
        <Card.Text className="subtitle">
          Download the bella onoje’s food app now on
        </Card.Text>
        <div className="card-button">
          <ButtonCard class="btn-play" text="Playstore"></ButtonCard>
          <ButtonCard class="btn-app" text="App store"></ButtonCard>
        </div>
      </Card>

      <Card.Text bsPrefix="card-wrapper-duplo-celular">
        <Figure>
          <Figure.Image bsPrefix="card-fig" src={cel1} />
        </Figure>
        <Card.Body bsPrefix="card-wrapper-app">
          <Card.Title bsPrefix="line"></Card.Title>
          <Card.Text bsPrefix="card-title-app">How the app works</Card.Text>
        </Card.Body>
      </Card.Text>

      <Card.Body bsPrefix="card-wrapper">
        <Figure bsPrefix="card-wrapper-cel">
          <FigureImage src={cel2} bsPrefix="img-cel" />
        </Figure>
        <Card.Body bsPrefix="card-wrapper-text">
          <Card.Text bsPrefix="txt-create">Create an account</Card.Text>
          <Card.Text bsPrefix="title-create">
            Create/login to an existing account to get started
          </Card.Text>
          <Card.Text bsPrefix="subtitle-account">
            An account is created with your email and a desired password
          </Card.Text>
        </Card.Body>
      </Card.Body>

      <Card.Body bsPrefix="wrapper-mob">
        <Card.Text bsPrefix="card-wrapper-segundo">
          <Card.Text bsPrefix="txt-create session-web">
            Explore varieties
          </Card.Text>
          <Card.Text bsPrefix="txt-create session-mob">
            Explore while shopping
          </Card.Text>
          <Card.Text bsPrefix="title-create">
            Shop for your favorites meal as e dey hot.
          </Card.Text>
          <Card.Text bsPrefix="subtitle-account">
            Shop for your favorite meals or drinks and enjoy while doing it.
          </Card.Text>
        </Card.Text>
        <Figure bsPrefix="card-wrapper-cel">
          <FigureImage src={cel3} bsPrefix="img-cel" />
        </Figure>
      </Card.Body>

      <Card.Body bsPrefix="card-wrapper">
        <Figure bsPrefix="card-wrapper-cel">
          <Figure.Image src={cel4} bsPrefix="img-cel" />
        </Figure>
        <Card.Body bsPrefix="card-wrapper-text">
          <Card.Text bsPrefix="txt-create">Checkout</Card.Text>
          <Card.Text bsPrefix="title-create">
            When you done check out and get it delivered.
          </Card.Text>
          <Card.Text bsPrefix="subtitle-account">
            When you done check out and get it delivered with ease.
          </Card.Text>
        </Card.Body>
      </Card.Body>

      <div>
        <Card className="segundo-fundo session-web">
          <Card.Text className="title-create-mb">
            Download the app now.
          </Card.Text>
          <Card.Text className="subtitle-create-mb">
            Available on your favorite store. Start your premium experience now
          </Card.Text>
          <div className="card-button-mb ">
            <ButtonCard class="btn-playstore" text="Playstore"></ButtonCard>
            <ButtonCard class="btn-appstore" text="App store"></ButtonCard>
          </div>
        </Card>
      </div>

      <div>
        <Card className="segundo-fundo session-mob">
          <Card.Text className="title-create-mb">
            Download the app now.
          </Card.Text>
          <Card.Text className="subtitle-create-mb">
            Most calendars are designed for teams.
          </Card.Text>
          <div className="card-button-mb ">
            <ButtonCard class="btn-playstore" text="Buy now"></ButtonCard>
            <ButtonCard class="btn-appstore" text="Try for free"></ButtonCard>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Home;
