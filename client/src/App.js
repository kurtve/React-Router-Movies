import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    // only add a movie if it is not already on the list
    if (savedList.findIndex(item => item.id === movie.id) < 0 ) {
      setSavedList( [...savedList, movie] )
    };
  };


  return (
    <div>
      <SavedList list={savedList} />

      <Route path='/' exact component={MovieList} />

      {/* use render props to pass the addToSavedList function to Movie component */}
      <Route path='/movies/:id' render={(props) => (
          <Movie addToSavedList={addToSavedList} {...props} />
        )}
      />


    </div>
  );
};

export default App;
