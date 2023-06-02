import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "../../../../lib/db";
import { verifyPassword } from "@/utils/helpers/passwordHelpers"; 
import { omit } from "lodash";

const privateKey = process.env.NextAuth_SECRET

export async function POST(request) {
  const res = await request.json();

  try {
    const { email, password } = res.data;
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    // -- Response in case if such a user does not exist in the database -- //
    if (!user) {
      return NextResponse.json(
        { error: "There is no user with provided email", slot: 'email' },
        { status: 404, statusText: "Email error" }
      );
    }

    const isVerified = await verifyPassword(user.password, password)
    
    // -- Response in case if the password provided for the found user is incorrect -- //
    if (!isVerified) {
      return NextResponse.json(
        { error: "Password did not match", slot: 'password' },
        { status: 404, statusText: "Password error" }
      );
    }

    // -- Creates a token and set it to the client coockies, when all checks have passed successfully -- //
    const token = jwt.sign({ email, password}, privateKey, { algorithm: 'HS256', expiresIn: '2 days' })
    const userData = omit(user, 'password')

    return new Response(JSON.stringify({
      token,
      userData
    }), {
      status: 200,
      headers: { 'Set-Cookie': `auth_token=${token}` }
    })
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
