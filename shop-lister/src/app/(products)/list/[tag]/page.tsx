"use client";

import CardProduct from '@/components/CardProduct/CardProduct';
import Link from 'next/link';
import styles from './browse.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "next/navigation"

const ListProductsOfTag = () => {

    const { tag } = useParams(); // Vai buscar o nome da tag passada pelo 'Link' element da outra route

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

