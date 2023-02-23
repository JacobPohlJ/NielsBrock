const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

// Routes
const genresRoutes = require('./routes/genres')
const raw_albumsRoutes = require('./routes/raw_albums')
const raw_artistsRoutes = require('./routes/raw_artists')
const raw_tracksRoutes = require('./routes/raw_tracks')
const playlistRoutes = require('./routes/playlist')

// Defining api routes 
app.use('/genres', genresRoutes)
app.use('/raw_albums', raw_albumsRoutes)
app.use('/raw_artists', raw_artistsRoutes)
app.use('/raw_tracks', raw_tracksRoutes)
app.use('/playlist', playlistRoutes)

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
