import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from "moment";
import DisplayGallery from "./DisplayGallery";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setGalleryPics } from "../slices/gallerySlice";

function DisplayBetween() {
  const apiKey = process.env.REACT_APP_API;

  const dispatch = useDispatch();

  const { galleryPics } = useSelector((state) => state.gallery);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const startDateFormate = Moment(startDate).format("YYYY-MM-DD");
  const endDateFormate = Moment(endDate).format("YYYY-MM-DD");

  const handleSubmit = (e) => {
    e.preventDefault();
    getPictures();
  };
  const getPictures = async () => {

    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDateFormate}&end_date=${endDateFormate}`
    );
    const data = await response.json();
    dispatch(setGalleryPics(data));

    console.log(galleryPics);
  };
  //https://reactdatepicker.com/ - Date Range using input with clear button
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update);
          }}
          dateFormat="yyyy-MM-dd"
          maxDate={new Date()}
          // isClearable={true}
          showYearDropdown
          showMonthDropdown
          dropdownMode="select"
          withPortal
        />
        <input type="submit" value="Search" />
      </form>

      <DisplayGallery pictures={galleryPics} />
    </div>
  );
}

export default DisplayBetween;
