import { useState, useRef, useEffect } from 'react';
import FilterIcon from '../icons/FilterIcon';
import { DocumentCategory } from '../../types/enums';
import { formatCategoryDisplay } from '../../utils/formatters';
import styles from './FilterDropdown.module.css';

const FilterDropdown = ({ selectedCategory, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const categories = [
    { value: null, label: 'All Categories' },
    ...Object.values(DocumentCategory).map(category => ({
      value: category,
      label: formatCategoryDisplay(category)
    }))
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategorySelect = (category) => {
    onCategoryChange(category);
    setIsOpen(false);
  };

  const selectedLabel = selectedCategory 
    ? formatCategoryDisplay(selectedCategory) 
    : 'All Categories';

  return (
    <div className={styles.filterContainer} ref={dropdownRef}>
      <button
        className={`${styles.filterButton} ${selectedCategory ? styles.active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FilterIcon width={16} height={16} />
        {selectedLabel}
      </button>
      
      {isOpen && (
        <div className={styles.dropdown}>
          {categories.map((category) => (
            <div
              key={category.value || 'all'}
              className={`${styles.dropdownItem} ${
                selectedCategory === category.value ? styles.selected : ''
              }`}
              onClick={() => handleCategorySelect(category.value)}
            >
              {category.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;