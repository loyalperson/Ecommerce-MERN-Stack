import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, Checkbox, CircularProgress, FormControl, FormControlLabel, Paper, Typography } from '@material-ui/core';

import { getProduct } from '../../../actions/product';
import useStyles from './styles'
import { addToCart } from '../../../actions/cart';

const ProductDetails = () => {
    const { product, isLoading } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    const { id } = useParams();
    const classes = useStyles()
    
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getProduct(id));
        }
        fetchData()
    }, [id, dispatch]);

    if (isLoading) {
        return (
          <Paper elevation={6} className={classes.loadingPaper}>
            <CircularProgress size="7em" />
          </Paper>
        );
    }
    
    return (
        <Paper className={classes.paper} elevation={6}>
            <div className={classes.imageSection}>
                <img className={classes.media} src={product?.imageUrl} alt={product?.title} />
            </div>
            <div className={classes.infoSection}>
                <Typography gutterBottom variant="h4" component="h2">
                    {product?.title}
                </Typography>
                <Typography variant="body1" component="h5">
                    <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in officia alias quos enim cum velit laudantium, molestias a iste, quo voluptatum id eaque expedita quam hic nostrum sit dignissimos.</strong>
                </Typography>
                <FormControl className={classes.sizeGroup}>
                    <Typography variant="body1" component="h2">
                        Available sizes:
                    </Typography>
                    <div className={classes.subSizeGroup}>
                        {product?.size?.map((s) =>
                            <FormControlLabel
                                style={{ flex: '1 0 21%' }}
                                key={s}
                                label={s}
                                value={s}
                                control={<Checkbox />}
                            />
                        )}
                    </div>
                </FormControl>
                <Button className={classes.btnAddToCart} variant="outlined" color="inherit" onClick={() => dispatch(addToCart(product))}>
                    Add to cart - ${product?.price}
                </Button>
            </div>
        </Paper>
    )
}

export default ProductDetails;
