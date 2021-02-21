import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "https://picsum.photos/400",
      allMemeImgs: [],
    };
    this.handhleChange = this.handhleChange.bind(this);
  }
  handhleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    fetch("https://picsum.photos/200")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }
  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            className="mx-2"
            name="topText"
            placeholder="top Text"
            type="text"
            maxLength="15"
            value={this.state.topText}
            onChange={this.handhleChange}
          />
          <input
            className="mr-4"
            name="bottomText"
            placeholder="bottom Text"
            type="text"
            maxLength="35"
            value={this.state.BottomText}
            onChange={this.handhleChange}
          />
          <button className="shadow">Gen</button>
        </form>
        <div className="meme">
          <img
            src={this.state.randomImg}
            alt=""
            className="shadow-lg rounded "
          />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
