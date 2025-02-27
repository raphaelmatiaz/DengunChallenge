import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req:NextRequest) => {
    const data = await axios.get('https://shopicruit.myshopify.com/admin/products.json?access_token=c32313df0d0ef512ca64d5b336a0d7c6')

    return NextResponse.json(data.data)
}

export {GET}