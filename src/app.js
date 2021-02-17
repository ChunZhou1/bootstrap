import React from "react";
import Gird1 from "./component";
import { Gird_offset } from "./component";
import { Gird_by_gird } from "./component";
import { Print_address } from "./component";
import { Table_responsive } from "./component";
import { Form_horizonta } from "./component";
import { Gird_h } from "./component";
import { Gird_v } from "./component";
import { Gird_break } from "./component";
import { Gutter } from "./component";
import { Gutter_v } from "./component";
import { Flex_1 } from "./component";
import { Flex_align } from "./component";
import { Position } from "./component";

function App() {
  return (
    <div>
      <Gird1 />
      <Gird_offset />
      <Gird_by_gird />
      <Print_address />
      <Table_responsive />
      <Form_horizonta />
      <Gird_v />
      <Gird_break />
      <Gird_offset />
      <br />
      <br />
      <Gutter_v />
      <Flex_1 />
      <Flex_align />
      <Position />
    </div>
  );
}
export default App;
