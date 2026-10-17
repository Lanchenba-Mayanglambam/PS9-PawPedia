import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';

function BreedDetails() {
  const { breed } = useParams();
  const [subBreeds, setSubBreeds] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/list`)
      .then((res) => res.json())
      .then((data) => setSubBreeds(data.message));

    fetch(`https://dog.ceo/api/breed/${breed}/images/random/6`)
      .then((res) => res.json())
      .then((data) => setImages(data.message));
  }, [breed]);

  let loadMore = () => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/6`)
      .then((res) => res.json())
      .then((data) => setImages([...images, ...data.message]));
  };

  return (
    <div>
      <Link to="/breeds">Back to Breeds</Link>
      <h1>{breed}</h1>

      <h3>Sub-breeds</h3>
      <ul>
        {subBreeds.map((sub) => (
          <li key={sub}>{sub}</li>
        ))}
      </ul>

      <h3>Photos</h3>
      {images.map((img) => (
        <img key={img} src={img} alt="dog" width="200" />
      ))}

      <br />
      <br />
      <button onClick={loadMore}>Load More</button>
    </div>
  );
}

export default BreedDetails;
