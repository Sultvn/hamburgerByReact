import React, { Component } from "react";
import "./BurgersStyle.css";

export default class Burger extends Component {
  state = {
    lettuce: 0,
    pieceOfCheese: 0,
    sliceOfMeat: 0,
    tomato: 0,
    lettucePrice: 1.5,
    pieceOfCheesePrice: 2,
    sliceOfMeatPrice: 4,
    tomatoPrice: 0.5,
  };

  addRemoveIngredient = (action, ingredient) => {
    let { lettuce, pieceOfCheese, sliceOfMeat, tomato } = this.state;

    let stateValue;

    switch (ingredient) {
      case "lettuce": {
        stateValue = lettuce;
        break;
      }
      case "pieceOfCheese": {
        stateValue = pieceOfCheese;
        break;
      }
      case "sliceOfMeat": {
        stateValue = sliceOfMeat;
        break;
      }
      case "tomato": {
        stateValue = tomato;
        break;
      }
      default:
        break;
    }
    if (action == "add") {
      stateValue += 1;
    } else {
      stateValue -= 1;
    }
    this.setState({
      [ingredient]: stateValue >= 0 ? stateValue : 0,
    });
    // console.log(stateValue);
  };

  burgerContent = () => {
    let { lettuce, pieceOfCheese, sliceOfMeat, tomato } = this.state;

    let burger = [];

    //  pomirdo
    for (let i = 0; i < tomato; i++) {
      burger.push(<div className="orderedTomato" key={burger.length}></div>);
    }
    // pomidor

    //  salat
    for (let i = 0; i < lettuce; i++) {
      burger.push(<div className="orderedLettuce" key={burger.length}></div>);
    }
    // salat

    // cheese
    for (let i = 0; i < pieceOfCheese; i++) {
      burger.push(<div className="orderedCheese" key={burger.length}></div>);
    }
    // cheese

    // meat
    for (let i = 0; i < sliceOfMeat; i++) {
      burger.push(<div className="orderedMeat" key={burger.length}></div>);
    }
    // meat
    return burger;
  };


  render() {

    let burgerPrice =
      this.state.lettuce * this.state.lettucePrice +
      this.state.pieceOfCheese * this.state.pieceOfCheesePrice +
      this.state.sliceOfMeat * this.state.sliceOfMeatPrice +
      this.state.tomato * this.state.tomatoPrice;

    const burgerPriceSNalogom = burgerPrice + burgerPrice * 0.1;



    return (
      <>
        <div className="burgerIngredients">
          <div className="top"></div>

          {this.burgerContent()}
          <div className="bot"></div>
        </div>
        <div className="ingredientsBlock">
          <p>Лист салата 1.49$</p>
          <div className="ingredientsBtnBlock">
            <button
              className="ingredientsButton"
              onClick={() => this.addRemoveIngredient("add", "lettuce")}
            >
              +
            </button>
            <button
              className="ingredientsButton"
              onClick={() => this.addRemoveIngredient("remove", "lettuce")}
            >
              -
            </button>
          </div>
          <p>кусочек сыра 1.99$</p>
          <div className="ingredientsBtnBlock">
            <button
              className="ingredientsButton"
              onClick={() => this.addRemoveIngredient("add", "pieceOfCheese")}
            >
              +
            </button>
            <button
              className="ingredientsButton"
              onClick={() =>
                this.addRemoveIngredient("remove", "pieceOfCheese")
              }
            >
              -
            </button>
          </div>
          <p>ломтик мяса 3.99$</p>
          <div className="ingredientsBtnBlock">
            <button
              className="ingredientsButton"
              onClick={() => this.addRemoveIngredient("add", "sliceOfMeat")}
            >
              +
            </button>
            <button
              className="ingredientsButton"
              onClick={() => this.addRemoveIngredient("remove", "sliceOfMeat")}
            >
              -
            </button>
          </div>
          <p>помидорчики 0.49$</p>
          <div className="ingredientsBtnBlock">
            <button
              className="ingredientsButton"
              onClick={() => this.addRemoveIngredient("add", "tomato")}
            >
              +
            </button>
            <button
              className="ingredientsButton"
              onClick={() => this.addRemoveIngredient("remove", "tomato")}
            >
              -
            </button>
          </div>
          <div className="productTab">
            <h1>Список продуктов:</h1>
            <p>ЛИСТ САЛАТА х {this.state.lettuce}</p>
            <p>КУСОЧЕК СЫРА х {this.state.pieceOfCheese}</p>
            <p>ЛОМТИК МЯСА х {this.state.sliceOfMeat}</p>
            <p>ПОМИДОРЧИКИ х {this.state.tomato}</p>
          </div>
          <h1>Заплатите {burgerPriceSNalogom}$ </h1>
          <h2>(в том числе и обслуга 10%)</h2>
        </div>
      </>
    );
  }
}
