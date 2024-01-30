import React, { useState } from 'react';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem, Chip} from '@mui/material';
import BookService from '../../services/BookService';

const Genres = {
  BIOGRAPHY: { value: 'Biography', label: 'Biography' },
  HORROR: { value: 'Horror', label: 'Horror' },
  MYSTERY: { value: 'Mystery', label: 'Mystery' },
  EDUCATION: { value: 'Education', label: 'Education' },
};

const CreateBookForm = () => {
  const [book, setBook] = useState({
    title: '',
    subject:'',
    publisher: '',
    number_of_pages: '',
    genre:'',
    authors:[],
  });

  const [newAuthor, setNewAuthor] = useState({
    name:'',
    address:'',
    email:'',
    phone:''
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const addAuthor = () => {
    setBook((prevBook) => ({
      ...prevBook,
      authors: [...prevBook.authors, { name: newAuthor.name, address: newAuthor.address, email: newAuthor.email, phone: newAuthor.phone }],
    }));

    setNewAuthor({
      name:'',
      address:'',
      email:'',
      phone:''
    })
  };

  const handleNewAuthorChange = (event) => {
    const { name, value } = event.target;
    setNewAuthor((prevAuthor) => ({ ...prevAuthor, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle form submission (e.g., send data to server or perform other actions)
    BookService.sendBookData(book)
    // console.log('Form submitted with data:', book);
    setBook({
      title: '',
      subject:'',
      publisher: '',
      number_of_pages: '',
      genre:'',
      authors:[{ name: '', address: '', email: '', phone: '' }],
    })
  };

  const removeAuthor = (index) => {
    setBook((prevBook) => ({
      ...prevBook,
      authors: prevBook.authors.filter((_, i) => i !== index),
    }));
  };

  const displayAuthors = () => {
    return book.authors.map((author, index) => (
      <Chip
        key={index}
        label={`${author.name}`}
        onDelete={() => removeAuthor(index)}
        style={{ margin: '4px' }}
      />
    ));
  };


  return (
    <Container maxWidth="sm">
      <h1> Add a Book </h1>
      <div name="book">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            fullWidth
            name="title"
            value={ book.title}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Subject"
            fullWidth
            name="subject"
            value={ book.subject}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Publisher"
            fullWidth
            name="publisher"
            value={ book.publisher}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Number of Pages"
            name="number_of_pages"
            value={ book.number_of_pages}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <FormControl fullWidth margin='normal'>
            <InputLabel id="genre-label">Genre</InputLabel>
            <Select
              label="Genre"
              labelId="genre-label"
              id="genre"
              name="genre"
              defaultValue={Genres.BIOGRAPHY.value}
              onChange={handleChange}>
              {Object.keys(Genres).map((key) => (
                <MenuItem key={key} value={Genres[key].value}>
                  {Genres[key].label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div>
            <InputLabel style={{ display: 'flex', alignItems: 'center', gap: '10px' }} >Authors</InputLabel>
            {displayAuthors()}
          </div>
          {/* New Author input fields */}
          <div name="author" style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }} >
            <TextField
              label="Author Name"
              fullWidth
              name="name"
              value={newAuthor.name}
              onChange={handleNewAuthorChange}
              margin="normal"
            />
            <TextField
              label="Author Address"
              fullWidth
              name="address"
              value={newAuthor.address}
              onChange={handleNewAuthorChange}
              margin="normal"
            />
            <TextField
              label="Author Email"
              fullWidth
              name="email"
              value={newAuthor.email}
              onChange={handleNewAuthorChange}
              margin="normal"
            />
            <TextField
              label="Author Phone"
              fullWidth
              name="phone"
              value={newAuthor.phone}
              onChange={handleNewAuthorChange}
              margin="normal"
            />
            {/* Button to add more authors */}
            <Button variant="contained" color="primary" onClick={addAuthor}>
              Add Author
            </Button>
          </div>

          <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
            Create Book
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default CreateBookForm;
