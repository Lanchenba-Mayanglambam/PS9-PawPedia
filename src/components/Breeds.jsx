import { useState, useEffect } from 'react';
import { Link } from 'react-router';

function Breeds() {
  const [breeds, setBreeds] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((res) => res.json())
      .then((data) => setBreeds(Object.keys(data.message)));
  }, []);

  const filteredBreeds = breeds.filter((b) =>
    b.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>All Dog Breeds</h1>

      <input
        type="text"
        placeholder="Search breed..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      <ul>
        {filteredBreeds.map((breed) => (
          <li key={breed}>
            <Link to={`/breeds/${breed}`}>{breed}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Breeds;
