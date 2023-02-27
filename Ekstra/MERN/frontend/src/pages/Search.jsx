import React, { useState, useEffect } from "react";


function Homepage() {
  const [data, setData] = useState(null);
  const [track, setTrack] = useState(""); // add a state variable to store the track value

  // update the fetch call to include the track variable in the URL
  useEffect(() => {
    fetch(`/raw_tracks/gettrackid/${track}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [track]); // specify the track variable as a dependency for the useEffect hook

  // add a function to handle the search submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setTrack(event.target.value); // update the track state with the input value
  };

  return (
    <>  
      <div className="search-container">
        {/* add a form to submit the search */}
        <form onSubmit={handleSubmit}>
          {/* add an input field for the search */}
          <input
            type="text"
            placeholder="Search"
            value={track}
            onChange={(e) => setTrack(e.target.value)}
          />
        </form>
        {data ? (
          <ul className="search-results">
            {data.map((item) => (
              <li key={item.id}>
                <p>Artist Name: {item.artist_name}</p>
                <p>Track Title: {item.track_title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

export default Homepage;
