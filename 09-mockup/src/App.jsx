import { useState } from 'react';
import './index.css';

const data = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
  { category: 'Phone', price: '$100', stocked: true, name: 'iPhone' },
  { category: 'Laptop', price: '$1000', stocked: true, name: 'iMac' },
];

const uniqueCategory = [...new Set(data.map((v) => v.category))];

function SearchBar() {
  const [search, setSearch] = useState(''); //""empty string
  const [checked, setChecked] = useState(false);
  const [category, setCategory] = useState('');

  const handleOnChangeSearch = (e) => {
    setSearch(e.target.value.trim());
  };

  const handleOnChangeStock = (e) => {
    setChecked(e.target.checked);
  };

  const handleOnChangeCategory = (e) => {
    setCategory(e.target.value.trim());
  };

  return (
    <div className='searching-bar'>
      <input
        type='text'
        placeholder='Search by name...'
        onChange={handleOnChangeSearch}
        value={search}
      />
      <label id='check-box'>
        <input type='Checkbox' value={checked} onChange={handleOnChangeStock} />
        Only show products in store
      </label>
      <select onInput={handleOnChangeCategory} value={category}>
        <option value=''>----</option>

        {uniqueCategory.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((v) => (checked ? v.stocked : true))
            .filter((v) =>
              search
                ? v.name.toLowerCase().includes(search.toLowerCase())
                : true
            )
            .filter((v) =>
              category
                ? v.category.toLowerCase() === category.toLowerCase()
                : true
            )
            .map((v) => (
              <tr key={v.name} style={{ color: v.stocked ? '' : 'red' }}>
                <td>{v.category}</td>
                <td>{v.name}</td>
                <td>{v.price}</td>
                <td>
                  <input type='checkbox' checked={v.stocked} readOnly />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchBar;
