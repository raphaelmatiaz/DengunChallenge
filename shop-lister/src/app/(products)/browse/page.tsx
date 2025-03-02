
"use client"
import { useState, useEffect } from "react"
import axios from "axios"
import CardTag from "@/components/CardTag/CardTag"
import Link from "next/link"
import styles from './browse.module.css'


// Interfaces
interface Variant {
    id: number;
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
}

interface Tag {
    tag: string;
}



// Function Based Component
const BrowseByTag = () => {

    // UseState Variables
    const [data, setData] = useState<Product[]>([])

    // UseEffects
    useEffect(() => {

        axios.get("/api/getData")
            .then(response => setData(response.data.products))
    }, [])

    console.log(data) //debug

    const products: Product[] = data;

    console.log("data: ", data)

    // Nota: Aqui estamos a filtrar cada produto recolhido na API e preencher um array 'tagList'
    // com uma lista das tags que vão aparecendo em cada product.tags, de forma a evitar repetições
    // e ter uma lista com uma única instancia de cada tag de entre todos os productos da API
    const tagList: string[] = [];

        products.forEach((product) => {
            const foundTags = product.tags.split(", ").map(word => word.trim());
            
            foundTags.forEach(tag => {
                if (!tagList.includes(tag)) {
                    tagList.push(tag);
                }
            });
        });

    console.log("tagList", tagList) //debug

    // Nota: Aqui vamos iterar sobre uma cópia do array 'tagList' e selecionar de entre o array 'products'
    // a imagem que corresponde ao primeiro producto com cada tag da 'tagList', de forma a obter uma image de 
    // produto, por cada tag descoberta na API.
    const copyOfTagList = [...tagList]; 
    const imgSrcListOfEachTag: string[] = [];
    
    for (let i = 0; i < copyOfTagList.length; i++) {
        const tag = copyOfTagList[i];
    
        for (let product of products) {
            if (product.tags.includes(tag)) {
                imgSrcListOfEachTag.push(product.image.src);
                
                copyOfTagList.splice(i, 1);
                i--;
                break;
            }
        }
    }
    
    console.log(imgSrcListOfEachTag); //debug

    // Nota: Aqui estamos a criar um novo array de objectos, cujo as propriedades são as uma tag e uma imagem do primeiro produto com essa tag
    // É tipo uma mistura dos dois ultimos arrays criados 'tagList' e 'imgSrcListOfEachTag'. Estamos a pegar no index de cada um desses arrays
    // de forma paralela, e a criar um array de objectos com os dados recolhidos. Isto para depois poder iterar sobre este array 'productTags'
    // e popular o componente 'CardTag' com os dados de cada objecto.
    const productTags = tagList.map((tag, index) => ({
        tag: tag,
        image: imgSrcListOfEachTag[index] || "" 
    }));

    console.log(productTags); //debug

    return (
        <div>
            <main>
                <h2>Browse by Category</h2>
                <div className={styles.cardWrapper}>
                    {productTags.map((item, index) => (
                        <Link key={index} href={`/list/${(item.tag)}`}> 
                            <CardTag tag={item.tag} image={item.image} />
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
    
}

export default BrowseByTag