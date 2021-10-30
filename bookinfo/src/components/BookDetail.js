import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core'; 
import { Component } from "react";
import { withStyles } from '@material-ui/core';

const styles = {
    root: {
        maxWidth: 450, 
    },

    media: {
        width:'70%',
        height:'20%',
    }

}

class BookDetail extends Component {

    render() {
        const{book, classes} = this.props;
        return (
            <Card className={classes.root}>
               <CardHeader title={book.title} subheader={book.author} />     
                <CardMedia className={classes.media} component='img' image={book.imgUrl} />
                <CardContent varient='body2' color='textSecondary' component='p'>
                    <Typography>
                        {book.introduce}
                    </Typography>
                </CardContent>
            </Card>

        )

    }

}

export default withStyles(styles)(BookDetail);














