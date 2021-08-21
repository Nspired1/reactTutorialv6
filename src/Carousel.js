import React, { Component } from "react";

class Carousel extends Component {
  constructor() {
    super();
  }

  state = {
    active: 0,
  };

  static defaultProps = {
    images: [`http://pets-images.dev-apis.com/pets/none.jpg`],
  };

  handleIndexClick = (e) => {
    this.setState({
      // + converts returning index from a string into a number
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              data-index={index}
              onClick={this.handleIndexClick}
              alt="animal thumbnail"
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
