import { connect } from "@/db/dbConfig";
import User from "@/models/userModels";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendMail } from "@/helpers/mailer";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    // Check if User Is Already Registered
    const existingUsers = await User.findOne({ email });
    if (existingUsers) {
      return NextResponse.json({
        message: "User is already registered",
        status: 200,
      });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    const savedUsers = await newUser.save();
    // Send Confirmation Email to Verify Account
    await sendMail({ email, emailType: "VERIFY", userId: savedUsers._id });
    console.log(savedUsers);

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUsers,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
