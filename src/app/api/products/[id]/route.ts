import dbConnect from "@/lib/mongodb.config";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;

    await dbConnect();
    try {
        const product = await Product.findById(id);
        if (!product) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }
        return NextResponse.json(product, { status: 200 });
    } catch (error: any) {
        const { message } = error;
        return NextResponse.json({ message: "Internal server error", error: message }, { status: 500 });
    }
};
export const PUT = async (request: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    const body = await request.json();
    
    await dbConnect();
    try {
        const newProduct = await Product.findByIdAndUpdate(id, body, { new: true });
        if (!newProduct) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }
        return NextResponse.json({newProduct }, { status: 200 });
    } catch (error: any) {
        const { message } = error;
        return NextResponse.json({ message: "Internal server error", error: message }, { status: 500 });
    }
};
export const DELETE = async (request: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    const body = await request.json();
    
    await dbConnect();
    try {
        
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }
        return NextResponse.json({deletedProduct }, { status: 200 });
    } catch (error:any) {
        const { message } = error;
        return NextResponse.json({ message: "Internal server error", error: message }, { status: 500 });
    }    
    }
