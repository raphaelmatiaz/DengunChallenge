import CardProduct from '@/components/CardProduct/CardProduct'
import { useState, useEffect } from "react"
import Link from 'next/link'
import styles from './browse.module.css'


const ListProductsOfTag = () => {
    return(
        <main>
                <h2>Products {">"} Tag</h2>
                <Link href="/browse"><button className="buttonPrevious" title='Go back'></button></Link>
                <div className={styles.cardWrapper}>
                   <CardProduct></CardProduct>
                   <CardProduct></CardProduct>
                   <CardProduct></CardProduct>
                </div>
            </main>
    )
}

export default ListProductsOfTag