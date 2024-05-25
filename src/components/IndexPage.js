import React from "react";
import { withRouter } from "react-router-dom";
import pizzaImage from "../images/pizza.jpg";
import beefTacosImage from "../images/beeftacos.jpg";
import bcnCheeseFriesImage from "../images/baconcheesefries.jpg";
import burgerImage from "../images/burger.webp";
import burritoImage from "../images/burrito.jpg";
import phillyImage from "../images/philly.jpg";

import Card from "./Card";

class IndexPage extends React.PureComponent {
  render() {
    return (
      <div className="Cards">
        <h2>Giano's Philly Cheese Steaks</h2>
        <div className="Card-Flex-Box">
          <div className="CardGroup">
            <Card
              title="$5 Large Pepperoni Pizza"
              text="Click to buy"
              image={pizzaImage}
            />
            <Card
              title="$5 5 Beef Tacos"
              text="Click to buy"
              image={beefTacosImage}
            />
            <Card
              title="$5 Bacon Fries"
              text="Click to buy"
              image={bcnCheeseFriesImage}
            />
            <Card
              title="$5 Burger with fries"
              text="Click to buy"
              image={burgerImage}
            />
            <Card
              title="$5 Beef burrito"
              text="Click to buy"
              image={burritoImage}
            />
            <Card
              title="$5 Cheesesteak with cheese wiz"
              text="Click to buy"
              image={phillyImage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexPage);
