import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search search">
      <form className="form-inline" id="search-form">
        <label for="search">Enter a city </label>
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          id="search"
          autocomplete="off"
        />
        <input className="btn btn-success" type="submit" value="Search" />
      </form>
    </div>
  );
}
