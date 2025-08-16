import { useState } from 'react';
import SearchIcon from '../icons/SearchIcon';
import styles from './SearchInput.module.css';

const SearchInput = ({ value, onChange, placeholder = "Search documents..." }) => {
  const [localValue, setLocalValue] = useState(value || '');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <SearchIcon width={20} height={20} className={styles.searchIcon} />
      <input
        type="text"
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchInput;