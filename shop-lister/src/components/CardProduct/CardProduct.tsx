import { useEffect, useState } from 'react'
import styles from './CardProduct.module.css'

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

interface CardProduct {
    title: string,
    image: string,
    vendor: string,
    tags: string,
    price: string,
    variants: Variant[],
    productOptions: Option[],
}

const CardProduct = (props: CardProduct) => {

    const [totalStockAmount, setTotalStockAmount] = useState(0) 
    const [lowestVariantPrice, setLowestVariantPrice] = useState(0)
    const [highestVariantPrice, setHighestVariantPrice] = useState(0)

    



    // useEffect(() => {

    //     let lowestPrice: number = 0
    //     let highestPrice: number = 0

    //     // Calcular a quantidade total de stock de um produto (across all variants)
    //     for (const variant of props.variants) {
           
    //             let calculatedStockAmount = totalStockAmount + variant.inventory_quantity
    //             setTotalStockAmount(calculatedStockAmount)
    //             console.log(variant.title, totalStockAmount)

    //             // Calcular o preço mais baixo e mais alto de um produto (across all variants)
    //             const variantPrice = parseFloat(variant.price);
    //             if (variantPrice > lowestPrice && variantPrice < highestPrice) {
    //                 lowestPrice = variantPrice


    //                 //add logic here, modify as needed
    //             }
    //     }
        
    // }, [])

    useEffect(() => {
        if (props.variants.length === 0) return;
    
        // Calculate total stock
        const totalStock = props.variants.reduce((sum, variant) => sum + variant.inventory_quantity, 0);
        setTotalStockAmount(totalStock);
    
        // Find min and max prices
        let lowestPrice = Infinity;
        let highestPrice = -Infinity;
    
        props.variants.forEach((variant) => {
            const variantPrice = parseFloat(variant.price);
    
            if (!isNaN(variantPrice)) {
                lowestPrice = Math.min(lowestPrice, variantPrice);
                highestPrice = Math.max(highestPrice, variantPrice);
            }
        });
    
        setLowestVariantPrice(lowestPrice);
        setHighestVariantPrice(highestPrice);
    }, [props.variants]);  // Depend on `props.variants` to update when data changes
    

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.tagImage} style={{ backgroundImage: `url(${props.image})` }}></div>
            <div className={styles.productInfoWrapper}>
                <header className={styles.headerInfo}>
                    <div>
                        <h2 className={styles.productName}>{props.title}</h2>
                        <h3 className={styles.productPrice}>
                            {props.variants.length === 1
                                ? `${parseFloat(props.variants[0].price)}€` // Show single price if only 1 variant
                                : `${lowestVariantPrice}€ - ${highestVariantPrice}€`} {/* Show range otherwise */}
                        </h3>
                    </div>
                    <div className={styles.stockVendorInfo}>
                        <p className={styles.inStock}>In Stock</p>
                        <p className={styles.stockAmount}>
                            <em className={styles.emphasise}>{totalStockAmount}</em> items available
                        </p>
                        <p className={styles.vendor}>
                            Sold by: <em className={styles.emphasise}>{props.vendor}</em>
                        </p>
                    </div>
                </header>
                <div className={styles.tagsWrapper}>
                    <h3 className={styles.heading3}>Tags(3)</h3>
                    <p>{props.tags}</p>
                </div>
                <div className={styles.variantsWrapper}>
                    <h3 className={styles.heading3}>Variants({props.variants.length})</h3>
                    <div className={styles.variantList}>
                        {props.variants.map((variant: Variant, index: number) => (
                            <p className={styles.variant} key={index}>
                                {variant.title}({variant.inventory_quantity})
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default CardProduct