import React, { Fragment, useState, useEffect } from "react";
import styles from "./styles.module.css";
import PincodeData from "../../../src/jsonData/pincode.json";
import LocationIcon from "../../icons/locationIcon";
import LocationAreaIcon from "../../icons/locationAreaIcon";
import CloseIcon from "../../icons/closeIcon";

const LocationData = () => {
  const [openDataBar, setOpenDataBar] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [select, setselect] = useState();

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const filterItems = (query) => {
    const filtered = PincodeData.filter(
      (item) =>
        item.Pincode.includes(query) ||
        item.PostOfficeName.toLowerCase() === query.toLowerCase()
    );
    setFilteredItems(filtered);
  };

  const debouncedFilterItems = debounce(filterItems, 300);

  useEffect(() => {
    debouncedFilterItems(search);
  }, [search, debouncedFilterItems]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleToggle = () => {
    setOpenDataBar(!openDataBar);
  };

  const handleSearchClear = () => {
    setSearch("");
  };

  const handleSearchItem = (item) => {
    setselect(`${item.Pincode}: ${item.PostOfficeName} `);
  };

  return (
    <Fragment>
      <div className={styles.delivery_main}>
        <div className={styles.delivery} onClick={handleToggle}>
          <div className={styles.icon}>
            <LocationIcon />
          </div>
          <div className={styles.d_address}>
            Deliver to <br /> <span>{select || "all"} </span>
          </div>
        </div>
        {openDataBar && (
          <div className={styles.location_dropdown}>
            <div className={styles.search_box}>
              <input
                type='number'
                value={search}
                onChange={handleSearch}
                placeholder='Search pincode'
              />
              <span onClick={handleSearchClear}>
                <CloseIcon />
              </span>
            </div>

            <div className={styles.location_list}>
              {search.length === 0 && (
                <div className={styles.location_area}>
                  <LocationAreaIcon />
                  <span>Search location</span>
                </div>
              )}
              {filteredItems.length === 0 && (
                <div className={styles.not_found}>No results found</div>
              )}
              {filteredItems.length > 0 && search.length > 0 && (
                <>
                  {filteredItems.map((item, index) => (
                    <div
                      className='dropdown_menu_item'
                      key={index}
                      onClick={() => handleSearchItem(item)}>
                      {item.Pincode} - {item.PostOfficeName}
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};  

export default LocationData;
