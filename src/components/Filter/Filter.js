import { useState } from "react";
import { useProductsActions } from "../ProductsProvider.js";
import styles from "./filter.module.css";
import SelectComponent from  "../Select/Select.js";
import SearchBar from "../Seach/Search.js";

const filterOptions = [
  { value: "", label: "All" },
  { value: "Xs", label: "Xs" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];

const Filter = () => {
  const dispatch = useProductsActions();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const filterHanler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setFilter(selectedOption);
  };

  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };

  return (
    <section>
      <SearchBar filter={filter} />
      <div className={styles.filter}>
       
        <SelectComponent
          title="filter by size"
          value={filter}
          onChange={filterHanler}
          options={filterOptions}
        />
        <SelectComponent
          title="sort by price"
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
        />
      </div>
    </section>
  );
};

export default Filter;
