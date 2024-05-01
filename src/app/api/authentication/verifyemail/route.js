import { connect } from "@/db/dbConfig";
import User from "@/models/userModels";
import { NextResponse } from "next/server";
connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user)
      return NextResponse.json({ error: "Invalid Token", status: 401 });

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    const userSave = await user.save();

    return NextResponse.json({
      message: "Email Verified",
      success: true,
      status: 200,
      userSave,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
