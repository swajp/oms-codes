import connectDB from "@/app/lib/mongodb";
import mongoose from "mongoose";

import { getAuth } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

import Code from "@/app/models/code";

export async function POST(request) {
  const { code } = await request.json();
  try {
    const { userId } = getAuth(request);
    await connectDB();
    await Code.create({ code, userId });
    if (!userId) return NextResponse.json({ msg: "AUTORIZACE" });
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

export async function GET(req, url) {
  try {
    await connectDB();
    const limit = req.url.split("limit=")[1];

    const codes = await Code.find().sort({ date: -1 }).limit(limit);
    return NextResponse.json({ codes });
  } catch (error) {
    return NextResponse.json({ message: error, success: false });
  }
}
