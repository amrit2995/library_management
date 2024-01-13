import React, { Component } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from '@mui/material';



export class DisplayBooks extends Component {

  render() {
    console.log("display book")
    console.log(this.props)
    const {data} = this.props;
    // console.lo

    return (
      <Container sx={{ padding: 3 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Publisher</TableCell>
                <TableCell>Pages</TableCell>
                <TableCell>Book Format</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.author}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.publisher}</TableCell>
                  <TableCell>{row.pages}</TableCell>
                  <TableCell>{row.book_format}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    )
  }
}

export default DisplayBooks
