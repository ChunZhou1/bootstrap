import React from "react";

import { Carousel_1 } from "./component_1";

class Carousel_manager extends React.Component {
  constructor(props) {
    super(props);

    this.state = { action: "run" };
  }

  render() {
    return (
      <div>
        <Carousel_1 action={"pause"} />
      </div>
    );
  }
}

export default Carousel_manager;
