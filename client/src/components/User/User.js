import React from 'react'

import Header from '../Header/Header'
import Products from '../Products/Products'
import FilterForm from '../FilterForm/FilterForm'

const User = () => {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FilterForm />
            </div>
            <Products />
        </div>
    )
}

export default User
