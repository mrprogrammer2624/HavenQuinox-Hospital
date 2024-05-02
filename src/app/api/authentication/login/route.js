import { connect } from "@/db/dbConfig";
import User from "@/models/common/userModels";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { loginEmail, loginPassword } = reqBody;

    // Check if user already exists in the db
    const existingUser = await User.findOne({ email: loginEmail });

    // User not found
    if (!existingUser) {
      return NextResponse.json({
        message: "User not found",
        status: 200,
      });
    }

    // Check if password is correct
    const isPasswordCorrect = await bcryptjs.compare(
      loginPassword,
      existingUser.password
    );

    // Password is incorrect
    if (!isPasswordCorrect) {
      return NextResponse.json({
        message: "Incorrect password",
        status: 200,
      });
    }

    console.log("tokenData");

    // Create Token Data
    const tokenData = {
      id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
      isAdmin: existingUser.isAdmin,
    };

    console.log(tokenData);

    // Create Token (JWT)
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    // Send Response
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      status: 200,
    });

    // Set Cookie
    response.cookies.set("auth", token, {
      httpOnly: true,
    });

    // Return Response
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
