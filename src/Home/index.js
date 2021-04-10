import React from "react";
import { Card, Figure, FigureImage } from "react-bootstrap";
import ButtonCard from "./../components/buttonCard";
import "./home.css";

import cel3 from "./../assets/cel3.svg";
import cel4 from "./../assets/cel4.svg";
import cel5 from "./../assets/cel5.svg";

function Home() {
  return (
    <div>
      <Card className="fundo">
        <Card.Body>
          <Card.Text className="text-title">Food app</Card.Text>
          <Card.Text className="title">Why stay hungry when</Card.Text>
          <Card.Text className="title">
            you can order form Bella Onojie
          </Card.Text>
          <Card.Text className="subtitle">
            Download the bella onoje’s food app now on
          </Card.Text>
          <div className="card-button">
            <ButtonCard class="btn-play" text="Playstore"></ButtonCard>
            <ButtonCard class="btn-app" text="App store"></ButtonCard>
          </div>
        </Card.Body>
      </Card>
      <div>
        <Card>
          <Card.Text className="card-title">How the app works</Card.Text>
        </Card>
      </div>

      <div class="card-wrapper">
        <div class="card-cel">
          <img src={cel3} className="img-cel" />
        </div>
        <div class="card-text">
          <h3 className="txt-create">Create an account</h3>
          <h2 className="title-create">
            Create/login to an existing account to get started
          </h2>
          <h4 className="subtitle-account">
            An account is created with your email and a desired password
          </h4>
        </div>
      </div>

      <div class="card-wrapper">
        <div class="card-text">
          <h3 className="txt-create">Explore varieties</h3>
          <h2 className="title-create">
            Shop for your favorites meal as e dey hot.
          </h2>
          <h4 className="subtitle-account">
            Shop for your favorite meals or drinks and enjoy while doing it.
          </h4>
        </div>
        <div class="card-cel">
          <img src={cel4} className="img-cel" />
        </div>
      </div>

      <div class="card-wrapper">
        <div class="card-cel">
          <Figure>
            <Figure.Image width={278} height={511} src={cel5} />
          </Figure>
        </div>
        <div class="card-text">
          <h3 className="txt-create">Checkout</h3>
          <h2 className="title-create">
            When you done check out and get it delivered.
          </h2>
          <h4 className="subtitle-account">
            When you done check out and get it delivered with ease.
          </h4>
        </div>
      </div>

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
            <ButtonCard class="btn-appstore" text="App store"></ButtonCard>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Home;
