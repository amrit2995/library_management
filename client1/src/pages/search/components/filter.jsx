import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const FilterFields = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="options"
        name="options"
        value={selectedOption}
        onChange={handleOptionChange}
        row
      >
        <FormControlLabel
          value="title"
          control={<Radio />}
          label="Title"
        />
        <FormControlLabel
          value="author"
          control={<Radio />}
          label="Author"
        />
        <FormControlLabel
          value="genre"
          control={<Radio />}
          label="Genre"
        />
        <FormControlLabel
          value="publisher"
          control={<Radio />}
          label="Publisher"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default FilterFields;
