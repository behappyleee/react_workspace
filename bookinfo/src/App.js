import React, { Component } from 'react';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import {Container, Grid} from '@material-ui/core';
import Books from './static_data/Books';
import BookDetail from './components/BookDetail';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    books : Books,
    selectedBook : Books[0],
  }
}

onSearchTitle(title) {
  let updateList = Books;
  // updateList: 검색된 book 정보 
  updateList = updateList.filter(book => {
    return book.title.toLowerCase().search(title.toLowerCase()) !== -1;
  });
   this.setState ({
      books : updateList,
   }); 
}

// 리스트 클릭된 상세 페이지
onSelectedBook(book){
  this.setState({
    selectedBook : book, 
  });
}

  render() {
   
   return (
      <Container>
            <SearchBar onSearchTitle={ this.onSearchTitle.bind(this)} />
              < Grid container spacing={2} >
            <Grid Item>
              { /*< BookList books={Books}/>*/}
              <BookList onSelectedBook={ this.onSelectedBook.bind(this)} books={ this.state.books } />
            </Grid>
            <Grid Item>
              { /* < BookDetail book= { Books[0]} /> */ }
              <BookDetail book={ this.state.selectedBook } />
            </Grid>
           </Grid>
        </Container>
    );
  }
}

export default App;




































































