"use client";
import { signIn } from "next-auth/react";

export default function Component() {
  return (
    <>
      <button onClick={() => signIn("github")}>Sign in github</button>
      <button onClick={() => signIn("google")}>Sign in google</button>
    </>
  );
}
