import React from "react";

import {Search} from "./search-box.styles.js";

export const SearchBox = ({placeholder, handleChange}) => (
    <Search
          type="search" 
          placeholder={placeholder}
          onChange={handleChange}
    />
)