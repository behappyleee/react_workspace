import { Grid, Paper, Typography, ListItem } from '@material-ui/core';
import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    image: {
        width: 128,
        height: 164,
    },
    textArea:{
        width: 300
    },
}

class BookListItem extends Component {
    render(){
        const { book, classes , onSelectedBook } = this.props;
        
        return (
                <Paper onClick={ () => onSelectedBook(book)}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <img className={classes.image} src={book.imgUrl} />
                        </Grid>
                        {/* Grid item 은 2개로 쪼개주겠다는 의미 */}
                        <Grid item className={classes.textArea}> 
                            <Typography component='h5' variant='h5'>
                                ISBN: { book.ISBN } <br/>
                                title: { book.title } <br/>
                                author: { book.author } <br/>
                                publisher: { book.publisher } <br/>
                                price: { book.price } <br/>
                                { /*introduce: { book.introduce } <br/>*/ }
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            
        )
    }
}

export default withStyles(styles)(BookListItem);
































































