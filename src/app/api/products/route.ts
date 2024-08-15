import dbConnect from "@/lib/mongodb.config";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request:NextRequest) =>{
    await dbConnect()
    try {
        const products = await Product.find();
        if(!products){
            return NextResponse.json({messgae:"Products not found!"},{status:405})
        }
        return NextResponse.json({products:products},{status:201})
    } catch (error:any) {
        return NextResponse.json({ message: "Internal server error",error }, { status: 500 });
    }
}
export const POST = async (request:NextRequest)=>{
    const body = await request.json();
    await dbConnect();
    try {
        const product = await Product.create(body);
        if(!product){
            return NextResponse.json({message:"Product is not posted!"},{status:405})
        }
        return NextResponse.json(product, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Internal server error",error }, { status: 500 });
    }
}