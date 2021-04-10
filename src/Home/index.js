import React from "react";
import { Card } from "react-bootstrap";
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
      <div>
        <Card>
          <Card.Img src={cel3} className="img-cel" />
        </Card>
        <Card>
          <Card.Text className="txt-create">Create an account</Card.Text>
          <Card.Text className="title-create">
            Create/login to an existing account to get started
          </Card.Text>
          <Card.Text className="subtitle-account">
            An account is created with your email and a desired password
          </Card.Text>
        </Card>
      </div>

      <div>
        <Card>
          <Card.Img src={cel4} className="img-cel" />
          <Card.Text className="txt-create">Explore varieties</Card.Text>
          <Card.Text className="title-create">
            Shop for your favorites meal as e dey hot.
          </Card.Text>
          <Card.Text className="subtitle-account">
            Shop for your favorite meals or drinks and enjoy while doing it.
          </Card.Text>
        </Card>
      </div>

      <div>
        <Card>
          <Card.Img src={cel5} className="img-cel" />
          <Card.Text className="txt-create">Checkout</Card.Text>
          <Card.Text className="title-create">
            When you done check out and get it delivered.
          </Card.Text>
          <Card.Text className="subtitle-account">
            When you done check out and get it delivered with ease.
          </Card.Text>
        </Card>
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
