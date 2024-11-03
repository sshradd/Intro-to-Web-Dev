import connectionToDatabase from "../../../../lib/mongoose";

import Flower from "model/flower"

export async function POST(request){
    try{
        await connectionToDatabase()
        const {name, email} = await request.json()
        const newFlower = new Flower({name, species})
        await newFlower.save()
        return NextResponse.json(newFlower, {status: 201})
    }catch(err){
        console.log(err)
    }
}