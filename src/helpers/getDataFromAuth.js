import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getDataFromAuth = (request) => {
  try {
    const token = request.cookies.get("auth")?.value || "";
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    return decodedToken.id;
  } catch (error) {
    return null;
  }
};
