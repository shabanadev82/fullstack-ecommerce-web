import dbConnect from "@/lib/mongodb.config";
import Cart from "@/models/Cart";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {

    await dbConnect();
    try {
        const cart = await Cart.find();
        if (!cart) {
            return NextResponse.json({ message: "Cart not found" }, { status: 404 });
        }
        return NextResponse.json(cart, { status: 200 });
    } catch (error: any) {
        const { message } = error;
        return NextResponse.json({ message: "Internal server error", error: message }, { status: 500 });
    }
};