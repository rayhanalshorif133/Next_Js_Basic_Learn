import { useRouter } from 'next/router'
import React from 'react'

export default function productDetails() {

    const router = useRouter();
    const { productId,
        productTitle,
        productDescription, } = router.query;
    return (
        <div style={{ textAlign: 'center', margin: "auto" }}>
            <h1>Product Details Page</h1>
            <h2>Product Id: {productId}</h2>
            <h3>Product Title: {productTitle}</h3>
            <h4>Product Description: {productDescription}</h4>
        </div>
    )
}
