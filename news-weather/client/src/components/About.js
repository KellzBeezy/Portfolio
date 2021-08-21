import React from "react";
import axios from "axios";

//mounted : false
const About = () => {
  //   const [load, setLoad] = React.useState(true);
  //   const [arr, setArr] = React.useState(true);
  React.useEffect(() => {
    axios.get("#").then(
      (res) => {
        // setArr(res.data);
        // setLoad(false);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const team = { minHeight: "15em" };
  return (
    <div style={team}>
      <h1>ABOUT PAGE</h1>
      <p>
        This Site was designed by Kelvin Gwari in an effort to bring news and
        weather to one place.
      </p>
    </div>
  );
};
export default About;
