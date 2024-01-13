import React from 'react';
import { Container, Paper, Typography, CssBaseline } from '@mui/material';

const FormLayout = ({ form }) => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          TEST
        </Typography>
        {form}
      </Paper>
    </Container>
  );
};

export default FormLayout;
