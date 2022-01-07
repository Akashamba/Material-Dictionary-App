import React from 'react';
import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import wordListPath from 'word-list'
// import words from '/node_modules/word-list/words.txt';
import {withRouter} from 'react-router';

function SearchBar(props) {
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      event.target[0].blur()
      event.target[0].value
        ?props.history.push(`/word/${event.target[0].value.toLowerCase()}`)
        :props.history.push('/')
      event.target[0].value = '';
      }}>
      {/* <Autocomplete
        freeSolo
        // options={suggestions} //autocomplete
        options={words.split('\n').slice(0, 1000).map((word) => word.length>7?word:'')}
        renderInput={(params) => (
          <TextField {...params} label="Enter Word Here" margin="normal" variant="outlined" style={{ width: '100%' }} />
        )}
      /> */}
      <TextField label="Enter Word Here" margin="normal" variant="outlined" style={{ width: '100%' }} />
    </form>
  );
}

export default withRouter(SearchBar);

// const suggestions = ['set', 'center', 'hubris', 'salubrious', 'hermetic', 'banter', 'soliloquy'];
