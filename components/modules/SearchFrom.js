import React, { useEffect, useState } from "react";
import styles from "./styles/SearchFrom.module.css";
import Search from "../Template/Search";

function SearchFrom() {
  //---------------------state------------------------------------------
  const [selectedDate, setSelectedDate] = useState();
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  //----------------------useEffects-----------------------------------

  useEffect(() => {
    const fetchProvince = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URI}/proviences`
        );
        const data = await res.json();
        setProvince(data);
      } catch (error) {}
    };
    fetchProvince();
  }, []);
  useEffect(() => {
    const fetchProvince = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URI}/cities`
        );
        const data = await res.json();
        setCity(data);
      } catch (error) {}
    };
    fetchProvince();
  }, []);
  return (
    <div className={styles.formContainer}>
      <Search
        className={styles.search}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        province={province}
        city={city}
      />
      
    </div>
  );
}

export default SearchFrom;
