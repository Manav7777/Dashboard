import React, { useEffect, useState } from "react";

const SearchFilter = (props) => {
  return (
    <div>
      <input
        type="search"
        className="form-control"
        placeholder="Search.."
        onChange={props.change}
        value={props.value}
        style={{ color: "black",width:"300px" }}
      />
    </div>
  );
};

export default SearchFilter;
