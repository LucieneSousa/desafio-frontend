import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./home.css";

import cel3 from "./../assets/cel3.svg";
import cel4 from "./../assets/cel4.svg";
import cel5 from "./../assets/cel5.svg";

function Home() {
  return (
    <div>
      <Card className="fundo">
        <CardBody className="card-wrapper">
          <CardSubtitle className="text-title">Food app</CardSubtitle>
          <CardText className="title">Why stay hungry when</CardText>
          <CardText className="title">you can order form Bella Onojie</CardText>
          <CardText className="subtitle">
            Download the bella onoje’s food app now on
          </CardText>
          <Button className="btn-play">Playstore</Button>
          <Button className="btn-app">App store</Button>
        </CardBody>
      </Card>
      <div>
        <Card>
          <CardTitle className="card-title">How the app works</CardTitle>
        </Card>
      </div>
      <div>
        <Card>
          <CardImg src={cel3} width="302px" height="525px" />
          <CardSubtitle className="txt-create">Create an account</CardSubtitle>
          <CardText>
            Create/login to an existing account to get started
          </CardText>
          <CardText>
            An account is created with your email and a desired password
          </CardText>
        </Card>
      </div>

      <div>
        <Card>
          <CardImg src={cel4} />
          <CardSubtitle className="txt-create">Explore varieties</CardSubtitle>
          <CardText>Shop for your favorites meal as e dey hot.</CardText>
          <CardText>
            Shop for your favorite meals or drinks and enjoy while doing it.
          </CardText>
        </Card>
      </div>

      <div>
        <Card>
          <CardImg src={cel5} />
          <CardSubtitle className="txt-create">Checkout</CardSubtitle>
          <CardText>When you done check out and get it delivered.</CardText>
          <CardText>
            When you done check out and get it delivered with ease.
          </CardText>
        </Card>
      </div>

      <div>
        <Card className="segundo-fundo">
          <CardText>Download the app now.</CardText>
          <CardText>
            Available on your favorite store. Start your premium experience now
          </CardText>
          <Button className="btn-play">Playstore</Button>
          <Button className="btn-app">App store</Button>
        </Card>
      </div>
    </div>
  );
}

export default Home;
