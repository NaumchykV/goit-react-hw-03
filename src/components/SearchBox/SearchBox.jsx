import css from './SearchBox.module.css'
import { useState } from 'react'

const SearchBox = ({ onSearch}) => {
    const [inputValue, setInputValue] = useState("");
  
    const handleChange = (evt) => {
      setInputValue(evt.target.value);
      onSearch(evt.target.value)
    };
  
    return (
      <div className={css.searchbox}>
        <p className={css.searchbox_title}>Find contacts by name</p>
        <input type="text" className={css.searchbox_input} value={inputValue} onChange={handleChange} />
        </div>
    );
  };
  
  export default SearchBox