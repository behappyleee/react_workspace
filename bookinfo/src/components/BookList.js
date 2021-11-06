import React, { Component } from 'react';
import { List, ListItem, Container } from '@material-ui/core';
import BookListItem from './BookListItem';

class BookList extends Component {

    render() {
        // const books = this.props.books;
        // BookList  key 값을 추가하여야 스타일이 먹힘 
        const { books } = this.props; // 구조분해 할당
        const bookItems = books.map(book=> {
            return (
                <ListItem key={ book.ISBN } >
                    <BookListItem 
                        book = { book } 
                        onSelectedBook ={this.props.onSelectedBook} 
                    />    
                </ListItem>
            )
        })

          return (
            <Container maxWidth='sm'>
                <List>
                   { bookItems }               
                </List>
             </Container>
        
        )    

    }

}

export default BookList;






































































