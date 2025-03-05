"use client";

import CardProduct from '@/components/CardProduct/CardProduct';
import Link from 'next/link';
import styles from './list.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "next/navigation"

// Interfaces
interface Variant {
    id: number,
    title: string,
    price: string,
    position: number,
    weight: number,
    weight_unit: string,
    inventory_quantity: number,
}

interface Option {
    id: number,
    product_id: number,
    name: string,
    position: number,
    values: string[]
}

interface Image {
    src: string;
}

interface Product {
    id: number;
    title: string;
    variants: Variant[];
    image: Image;
    tags: string;
    vendor: string;
    price: string;
    options: Option[];
}

interface Tag {
    tag: string;
}

const ListProductsOfTag = () => {

    const [data, setData] = useState<Product[]>([])

    useEffect(() => {

        axios.get("/api/getData")
            .then(response => setData(response.data.products))
    }, [])

    // console.log(data) //debug

    const products: Product[] = data;

    // console.log("data: ", data) //debug

    const { tag } = useParams(); // Vai buscar o nome da tag passada pelo 'Link' element da outra route

    const productsOfTag = []

    // Por cada product da API, se esse product tiver a 'tag', vai para o array de 'productsOfTag'
    for (const product of products) {
        if (tag && typeof tag === 'string' && product.tags.includes(tag)) {
            productsOfTag.push(product)
            console.log(product.price)
        }
    }

    return (
        <main>
            <h2>Products {">"} {tag} </h2>
            <Link href="/browse"><button className="buttonPrevious" title='Go back'></button></Link>
            <div className={styles.cardWrapper}>
                {productsOfTag.map((product, index) => (
                    <CardProduct key={index} title={product.title} image={product.image.src} vendor={product.vendor} tags={product.tags} price={product.price} productOptions={product.options} variants={product.variants}/>
                ))}
            </div>
        </main>
    );
};

export default ListProductsOfTag;

