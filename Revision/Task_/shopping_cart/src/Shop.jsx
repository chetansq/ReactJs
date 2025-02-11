import React from 'react'
import { usedispatch, useSelector } from "react-redux"


const Shop = () => {

    const add_1 = useSelector(state => state.addReducer1)
    const add_2 = useSelector(state => state.addReducer2)

    const dispatch = usedispatch()
    return (
        <div>Shop</div>
    )
}

export default Shop