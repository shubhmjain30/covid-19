import React from "react";
import Cards from "./Cards/Cards";
import Chart from "./Chart/Chart";
import CountryPicker from "./CountryPicker/CountryPicker";
import styles from "./Containr.module.css";
import { Helmet } from "react-helmet";

const Containr = ({ data, handleCountryChange, country }) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>COVID-19 | Tracker</title>
      </Helmet>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};
export default Containr;
