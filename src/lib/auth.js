import { jwtVerify, SignJWT } from "jsonwebtoken";

export const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET_KEY;

  if (!secret || secret.length === 0) {
    throw new Error("The environment variable JWT_SECRET_KEY is not set");
  }

  return secret;
};

export const verifyAuth = async (token) => {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    );
  } catch (error) {
    throw console.log(error);
  }
};
