import React, { useState } from 'react';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CreateBookForm = () => {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    publisher: '',
    pages: '',
    bookFormat: '',
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
          label="Author"
          fullWidth
          name="author"
          value={formData.author}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Title"
          fullWidth
          name="title"
          value={formData.title}
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
          label="Pages"
          fullWidth
          name="pages"
          type="number"
          value={formData.pages}
          onChange={handleChange}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="book-format-label">Book Format</InputLabel>
          <Select
            labelId="book-format-label"
            id="book-format"
            name="bookFormat"
            value={formData.bookFormat}
            onChange={handleChange}
          >
            <MenuItem value="hardcover">Hardcover</MenuItem>
            <MenuItem value="paperback">Paperback</MenuItem>
            <MenuItem value="ebook">Ebook</MenuItem>
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
