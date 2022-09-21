import React, { useContext } from "react";
import Box from "@mui/material/Box";
import ItemConc from "../Components/Item";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CountryDetails = ({ img }) => {
  const { info } = useContext(Context);
  console.log(info);
  const currency = Object.values(info.currencies)[0].name
  console.log(currency)
  const Native = info.name.nativeName;
  const nativeName = Object.values(Native)[0].common
 const languages = Object.values(info.languages).length == 1
 ? Object.values(info.languages)[0] :  Object.values(info.languages).map(el => <span>{el}, </span>)


 console.log(Object.values(info.languages).length);

  const Allborders = info.borders ? info.borders.map(element => (
    <li><ItemConc text = {element} /></li>
  )) : "No Borders";

  return (
    <div className="countryDetail">
      <Link to="/">
        <ItemConc
          icon={<ion-icon name="arrow-back-outline"></ion-icon>}
          text={"Back"}
        />
      </Link>

      <div className="content">
        <Card sx={{ maxWidth: 430 }} className="car ">
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={info.flags.png}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>

        <div className="infos">
          <h2>{info.name.common}</h2>
          <div className="innerDiv">
            <div className="firstDiv">
              <ul>
                <li>
                  Native Name: <span>{nativeName}</span>
                </li>
                <li>
                  Population: <span>{info.population}</span>
                </li>
                <li>
                  Region: <span>{info.region}</span>
                </li>
                <li>
                  Sub Region: <span>{info.subregion}</span>
                </li>
                <li>
                  Capital: <span>{info.capital}</span>
                </li>
              </ul>
            </div>

            <div className="secondDiv">
              <ul>
                <li>
                  Top Level Domain: <span>{info.tld[0]}</span>
                </li>
                <li>
                  Currencies: <span>{currency}</span>
                </li>
                <li>
                  Language: <span>{languages}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="Borders">
          <h3>Borders Countries:</h3>
          <ul>
            {Allborders}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
