import React, { useState } from "react";
import { InputDatePicker } from "jalaali-react-date-picker";
import "jalaali-react-date-picker/lib/styles/index.css";
import moment from "jalali-moment";
import Select from "react-select";
import styles from "./Styles/Search.module.css";
import optionsList from "../../utils/options";
import cities from "../../utils/cityOptions";
import { useRouter } from "next/router";

function Search({ selectedDate, setSelectedDate, province, city }) {
  const router = useRouter();
  const [pStart, setPStart] = useState("");
  const [pEnd, setPEnd] = useState("");
  const [startCity, setStartCity] = useState("");
  const [endCity, setEndtCity] = useState("");
  const [cStart, setCStart] = useState("");
  const [cEnd, setCEnd] = useState("");

  //---------------------func-------------------------------------------
  const handleDateChange = (unix, formatted) => {
    const date = moment(unix, "unix").format("YYYY-MM-DDTHH:mm");
    setSelectedDate(date);
  };
  //------
  const startTravelProvince = (selectedOption) => {
    setPStart(selectedOption);
    const citiesList = cities(city, selectedOption.value);
    setStartCity(citiesList);
  };
  //------
  const endTravelProvince = (selectedOption) => {
    setPEnd(selectedOption);
    const citiesList = cities(city, selectedOption.value);
    setEndtCity(citiesList);
  };
  //------
  const startTravelCity = (selectedOption) => {
    setCStart(selectedOption);
  };
  //------
  const EndTravelCity = (selectedOption) => {
    setCEnd(selectedOption);
  };
  //------
  const searchHandler = () => {
    if (cStart && cEnd) {
      console.log(selectedDate);
      router.push(`/safar/${cStart.label}/${cEnd.label}/${selectedDate}`);
    }
  };
  return (
    <>
      <h2>خرید بلیط اتوبوس</h2>
      <p>از تمامی ترمینال‌ها و شرکت‌های مسافربری کشور</p>
      <div className={styles.selected}>
        <span>استان مبداء</span>
        <Select
          isSearchable={true}
          menuStyle={{ maxHeight: 200 }}
          options={optionsList(province[0])}
          onChange={(selectedOption) => startTravelProvince(selectedOption)}
          isLoading={!province.length}
        />
        <span>شهر مبداء</span>
        <Select
          isSearchable={true}
          menuStyle={{ maxHeight: 200 }}
          isDisabled={!pStart}
          options={startCity}
          onChange={(selectedOption) => startTravelCity(selectedOption)}
        />
        <span>استان مقصد</span>

        <Select
          isSearchable={true}
          menuStyle={{ maxHeight: 200 }}
          options={optionsList(province[0])}
          onChange={(selectedOption) => endTravelProvince(selectedOption)}
          isLoading={!province.length}
        />
        <span>شهر مقصد</span>

        <Select
          isSearchable={true}
          menuStyle={{ maxHeight: 200 }}
          isDisabled={!pEnd}
          options={endCity}
          onChange={(selectedOption) => EndTravelCity(selectedOption)}
        />
        <br />
        <InputDatePicker
          onChange={handleDateChange}
          preSelected={selectedDate}
          placeholder={moment(selectedDate).format("jYYYY/jMM/jDD")}
        />
        <button onClick={searchHandler}>جستجو</button>
      </div>
    </>
  );
}

export default Search;
