import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import mongoose from "mongoose";
import Code from "@/app/models/code";

export async function POST(request) {
  const { code } = await request.json();
  console.log(code);

  try {
    await connectDB();
    await Code.create(code);

    return NextResponse.json({ msg: ["sent 1"], success: true });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(e.message);
      }
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: "unable to send" });
    }
  }
}
