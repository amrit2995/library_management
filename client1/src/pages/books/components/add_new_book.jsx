import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const CreateNewBookButton = () => {
  return (
    <Link to="/form/add_book">
      <Button variant="contained" color="primary">
        Create New Book
      </Button>
    </Link>
  );
};

export default CreateNewBookButton;
