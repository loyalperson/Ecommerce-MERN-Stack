import React from 'react'
import { Container, Typography } from '@material-ui/core'

const NoProducts = ({ imgSrc, description }) => {
    return (
        <Container style={{ display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
            <img src={imgSrc} alt={description} />
            <Typography variant="title" component="h4">{description}</Typography>
        </Container>
    )
}

export default NoProducts
