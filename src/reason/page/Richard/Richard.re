%raw
"import './Richard.scss'";

let ricardo1: string = [%raw "require('./img/ricardo1.jpg')"];
let ricardo2: string = [%raw "require('./img/ricardo2.jpg')"];
let ricardo3: string = [%raw "require('./img/ricardo3.jpg')"];
let ricardo4: string = [%raw "require('./img/ricardo4.png')"];
let ricardo5: string = [%raw "require('./img/ricardo5.jpg')"];
let milos: string = [%raw "require('./img/ricardo2.gif')"];
let milos2: string = [%raw "require('./img/ricardo3.gif')"];
let milos3: string = [%raw "require('./img/ricardo4.gif')"];
let milos4: string = [%raw "require('./img/ricardo5.gif')"];
let milos5: string = [%raw "require('./img/ricardo.gif')"];
let head: string = [%raw "require('./img/head.png')"];

[@react.component]
let make = () => {
  <div className="richard">
    <div className="images">
      <img src=ricardo1 />
      <img src=ricardo2 />
      <img src=ricardo3 />
      <img src=ricardo4 />
      <img src=ricardo5 />
    </div>
    <div className="gifs">
      <img src=milos />
      <img src=milos2 />
      <img src=milos3 />
      <img src=milos4 />
      <img src=milos5 />
    </div>
    <div className="column one">
      <img src=head />
      <img src=head />
      <img src=head />
    </div>
    <div className="column two">
      <img src=head />
      <img src=head />
      <img src=head />
    </div>
  </div>;
};