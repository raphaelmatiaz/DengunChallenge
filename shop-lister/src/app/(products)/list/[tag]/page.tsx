"use client";

import CardProduct from '@/components/CardProduct/CardProduct';
import Link from 'next/link';
import styles from './browse.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ListProductsOfTag = ({ params }: { params: { tag: string } }) => {
    const tag = params.tag; 

    console.log(tag);

    const [data, setData] = useState(null); 

    useEffect(() => {
        axios.get("/api/getData")
            .then(response => {
                setData(response.data); 
            })
            .catch(error => console.error("Error fetching data:", error));

        console.log(data); 
    }, []);

    return (
        <main>
            <h2>Products {">"} {tag} </h2>
            <Link href="/browse"><button className="buttonPrevious" title='Go back'></button></Link>
            <div className={styles.cardWrapper}>
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
        </main>
    );
};

export default ListProductsOfTag;
function setData(products: any): any {
    throw new Error('Function not implemented.');
}

