import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState, Suspense } from 'react'

export default function index() {


    const [products, setProducts] = useState([]);
    const [flag, setFlag] = useState(false);

    const fetchProducts = async () => {
        await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFlag(true);
            })
    }

    const router = useRouter();

    const showDetails = (id) => {
        router.push({
            pathname: '/product/' + id + '',
            query: {
                productId: id,
                productTitle: products[id - 1].title,
                productDescription: products[id - 1].description,
            },
        });
    }

    useEffect(() => {
        fetchProducts();
        console.log(products);
    }, [flag]);

    return (
        <>
            <h2>Product List</h2>
            <Suspense fallback={<Loading />}>
                {
                    products.map((product, item) => {
                        return <div key={item}>
                            <div onClick={() => {
                                showDetails(product.id);
                            }}>
                                <div style={{ border: "3px solid #393939", padding: "3px" }}>
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        </div>;
                    })
                }
            </Suspense>
        </>
    )
}


function Loading() {
    return <h2>🌀 Loading...</h2>;
}
