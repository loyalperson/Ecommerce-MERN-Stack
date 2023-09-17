import React, { useState } from 'react'
import { Container, Grid, Grow } from '@material-ui/core'

import useStyles from './styles'
import Products from '../Products/Products'
import Form from './Form/Form'
import Header from '../Header/Header'
import FilterForm from '../FilterForm/FilterForm'
import AddAdmin from './AddAdmin/AddAdmin'

const Admin = () => {
    const classes = useStyles()
    const [currentId, setCurrentId] = useState(0)

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Header />
                <FilterForm />
                <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Products setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <AddAdmin />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Admin
