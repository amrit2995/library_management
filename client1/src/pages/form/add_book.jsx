import React, { useState } from 'react';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem, Input } from '@mui/material';

const BookFormat = {
  HARDCOVER: { value: 1, label: 'Hardcover' },
  PAPERBACK: { value: 2, label: 'Paperback' },
  AUDIO_BOOK: { value: 3, label: 'Audio Book' },
  EBOOK: { value: 4, label: 'Ebook' },
  NEWSPAPER: { value: 5, label: 'Newspaper' },
  MAGAZINE: { value: 6, label: 'Magazine' },
  JOURNAL: { value: 7, label: 'Journal' },
};

const Genres = {
  BIOGRAPHY: { value: 1, label: 'Biography' },
  HORROR: { value: 2, label: 'Horror' },
  MYSTERY: { value: 3, label: 'Mystery' },
  EDUCATION: { value: 4, label: 'Education' },
};

const CreateBookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    subject:'',
    publisher: '',
    number_of_pages: '',
    bookFormat: '',
    authors:'',
    genre:''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle form submission (e.g., send data to server or perform other actions)
    console.log('Form submitted with data:', formData);
  };

  return (
    <Container maxWidth="sm">
      <h1> Add a Book </h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          name="title"
          value={formData.title}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Subject"
          fullWidth
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Publisher"
          fullWidth
          name="publisher"
          value={formData.publisher}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Number of Pages"
          name="number_of_pages"
          value={formData.number_of_pages}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Authors"
          fullWidth
          name="author"
          value={formData.author}
          onChange={handleChange}
          margin="normal"
        />
        <FormControl fullWidth margin='normal'>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            label="Genre"
            labelId="genre-label"
            id="genre"
            name="genre"
            value={Genres}
            onChange={handleChange}  
          >
            {
              Object.keys(Genres).map((key) => (
                <MenuItem key={key} value={Genres[key].value}>
                  {Genres[key].label}
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Create Book
        </Button>
      </form>
    </Container>
  );
};

export default CreateBookForm;
