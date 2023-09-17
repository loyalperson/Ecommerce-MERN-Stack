import React, { useEffect, useState } from 'react'
import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography, Checkbox } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import useStyles from './styles'
import { createProduct, updateProduct } from '../../../actions/product'
import { sizeData, collectionData, genderData } from '../../../constants/data'

const Form = ({ currentId, setCurrentId }) => {
    const user = JSON.parse(localStorage.getItem('profile'))
    const username = user.result.username
    const [productData, setProductData] = useState({ title: '', selection: '', imageUrl: '', price: '', size: [], gender: '', createdBy: username })
    const product = useSelector((state) => (currentId ? state.productReducer.products.find((p) => p._id === currentId) : null))
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const clear = () => {
        setCurrentId(0);
        setProductData({ title: '', imageUrl: '', size: [], selection: '', price: '', gender: '' });
    };

    useEffect(() => {
        if (!product?.title) clear();
        if (product) setProductData(product);
    }, [product]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId === 0) {
            dispatch(createProduct(productData, history));
            clear();
        } else {
            dispatch(updateProduct(currentId, productData));
            clear();
        }
    }

    return (
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? `Editing "${productData.title}"` : 'Create a Product'}</Typography>
                <TextField disabled name="createdBy" variant="outlined" fullWidth value={username} />
                <TextField required name="title" variant="outlined" label="Title" fullWidth value={productData.title} onChange={(e) => setProductData({ ...productData, title: e.target.value })} />
                <TextField required name="price" type="number" variant="outlined" label="Price $" fullWidth value={productData.price} onChange={(e) => setProductData({ ...productData, price: e.target.value })} />
                <div className={classes.selectDiv}>
                    <FormControl required style={{ width: '100%' }}>
                        <InputLabel id="collection-label">Collection</InputLabel>
                        <Select
                            labelId="collection-label"
                            id="collection-label-id"
                            label="Collection"
                            value={productData.selection}
                            onChange={(e) => setProductData({ ...productData, selection: e.target.value })}
                        >
                            {collectionData.map((d) => <MenuItem key={d.name} value={d.name}>{d.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                    <FormControl required className={classes.checkBoxControl}>
                        <Typography variant="h6">Choose available sizes:</Typography>
                        {sizeData.map((s) =>
                            <FormControlLabel
                                style={{ flex: '1 0 21%' }}
                                key={s}
                                label={s}
                                value={s}
                                control={<Checkbox />}
                                onChange={(e) => setProductData({ ...productData, size: [ ...productData.size, e.target.value ] })}
                            />
                        )}
                    </FormControl>
                <FormControl required>
                    <RadioGroup row aria-label="gender" name="radio-buttons-group" onChange={(e) => setProductData({ ...productData, gender: e.target.value })}>
                        {genderData.map((g, i) => <FormControlLabel key={i} value={g} control={<Radio />} label={g} />)}
                    </RadioGroup>
                </FormControl>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} value={productData.imageUrl} onDone={({ base64 }) => setProductData({ ...productData, imageUrl: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form
