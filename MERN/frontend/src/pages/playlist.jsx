import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Playlist() {
  const [data, setData,track_title] = useState(null);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    fetch(`/playlist/getlisttrackid/${user && user.name}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  // Define a function that makes a request to delete the playlist
  const deletePlaylist = (playlist) => {
    // Make a DELETE request to delete the playlist from the server
    // Replace `playlistId` with the actual playlist ID
    fetch(`/playlist/deleteplaylist/${playlist}`, { method: "DELETE" })
      .then(() => {
        // Update the state to reflect the changes
        setData(data.filter((item) => item.id !== track_title));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="search-container">
      {data ? (
        <ul className="search-results">
          {data.map((item, index) => (
            <li key={index}>
              <p>Playlist Name: {item.track_title}</p>
              <p>Songs:</p>
              <ul>
                {item.artist_name.map((song, index) => (
                  <li key={index}>{song}</li>
                ))}
              </ul>
              <button onClick={() => deletePlaylist(item.track_title)}>Delete Playlist</button>
            </li>
          ))}
        </ul>
      ) : (
        <div>No Playlists...</div>
      )}
    </div>
  );
}

export default Playlist;
