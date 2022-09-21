import React, { useContext } from 'react'
import CountryCard from '../Components/Card';
import { Context } from '../Context';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Link } from 'react-router-dom';

const Home = () => {
    const {
        theme,
        handleChange,
        input,
        content,
        getInputYear,
        handleRegion,
        setRegion,
        statement,
      } = useContext(Context);
    
      const AllContent =
        content.length > 0 ? (
          content.map((cont) => {
            return (
              <Link to={"countryDetail"}>
              <CountryCard
                key={cont.name.common}
                name={cont.name.common}
                img={cont.flags.png}
                population={cont.population}
                region={cont.region}
                capital={cont.capital}
              />
              </Link>
            );
          })
        ) : (
          <h1>{statement}</h1>
        );
  return (
    <div>
        
      <div className="Container">
        <div className="inputs">
          <form onSubmit={getInputYear}>
            <span>
              <ion-icon name="search-outline"></ion-icon>
            </span>
            <input
              type="text"
              value={input}
              placeholder="Search for a country"
              onChange={handleChange}
            />
          </form>

          <FormControl sx={{ m: 1, minWidth: 160 }} size="small" className = "Mui-form">
            <InputLabel id="demo-select-small">Filter by Region</InputLabel>

            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={"filter"}
              label="filter"
              onChange={handleRegion}
              className={`select select-${theme}`}
            >
              <MenuItem 
              value={"Africa"} 
              className={`list-${theme}`}>
                Africa
              </MenuItem>
              <MenuItem value={"Americas"} className={`list-${theme}`}>
                America
              </MenuItem>
              <MenuItem value={"Europe"} className={`list-${theme}`}>
                Europe
              </MenuItem>
              <MenuItem value={"Oceania"} className={`list-${theme}`}>
                Oceania
              </MenuItem>
              <MenuItem value={"Asia"} className={`list-${theme}`}>
                Asia
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="countryContainer">{AllContent}</div>
    </div>
  )
}

export default Home