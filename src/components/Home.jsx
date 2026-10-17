import { useState, useEffect } from 'react';
import { Link } from 'react-router';

function Home() {
  const [image, setImage] = useState('');

  const fetchRandomDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => setImage(data.message));
  };

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => setImage(data.message));
  }, []);

  return (
    <div>
      <h1>Dog Breed Explorer</h1>
      <p>Welcome</p>
       <p>Explore the different types of Dog breeds</p>

      <button onClick={fetchRandomDog}>New Dog</button>
      {' '}
      <Link to="/breeds">Browse Breeds</Link>

      <br />
      <br />

      {image && <img src={image} alt="Dog" width="300" />}
    </div>
  );
}

export default Home;
