import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Heading from "@mui/material/TextField";
const Randomnumber = () => {
  const [val, setVal] = useState(0);
  const Click = () => {
    console.log("running");
    const rand = Math.floor(Math.random() * 10);
    if (rand === 0) {
      setVal(1);
    } else {
      setVal(rand);
    }
  };

  //   var count = 0;

  const funct = () => {
    let myinterval = setInterval(Click, 50);
    //clearInterval(myinterval);
    setTimeout(() => {
      clearInterval(myinterval);
    }, 3000);
  };

  // setTimeout(() => {
  //     clearInterval(myinterval)
  // },5000);

  return (
    <>
      <Card
        sx={{ maxWidth: 400, maxHeight: 900, marginTop: 40, marginLeft: 70 ,boxShadow: '1px 2px 9px #F4AAB9'}}
        className="Container">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"  sx={{marginLeft:20,fontSize:70}}>
            {val}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="success" onClick={funct} sx={{marginLeft:20,fontSize:20}}>
            Click
          </Button>
        </CardActions>
      </Card>
      {/* <div className="container">
        <div className="card">
          <h1>{val}</h1>
          <button onClick={funct}>click</button>
        </div>
      </div> */}
    </>
  );
};

export default Randomnumber;
