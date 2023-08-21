import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import mongoose from "mongoose";
import Code from "@/app/models/code";

export async function POST(request) {
  const { code } = await request.json();

  try {
    await connectDB();
    await Code.create({ code });

    return NextResponse.json({
      msg: ["KÓD BYL ÚSPĚŠNĚ ULOŽEN"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList });
    } else {
      if (error.code == 11000) {
        return NextResponse.json({ msg: "KÓD BYL POUŽIT!  " });
      }
      return NextResponse.json({ msg: "CHYBA SERVERU" });
    }
  }
}

export async function GET() {
  try {
    await connectDB();
    const codes = await Code.find().sort({ date: -1 });
    return NextResponse.json({ codes });
  } catch (error) {
    console.log("Došlo k chybě!");
  }
}
