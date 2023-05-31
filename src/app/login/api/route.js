import { NextResponse } from "next/server";
import users from "../../../mockData/users";

export async function POST(request) {
  const res = await request.json();

  try {
    const mockDB = users.data;
    const { email, password } = res.data;
    const result = mockDB.filter(
      (user) => user.email === email && user.password === password
    );

    if (!result?.length) {
      return new Response("Uncorrect email or password", {
        status: 404,
        statusText: 'Uncorrect email or password'
      });
    }

    const [user] = result;
    return NextResponse.json({
      token: `auth-token-${user.user_name}`,
      user: {
        id: user.id,
        name: user.user_name,
        avatar: user.user_avatar,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("error", error);
    return new Response(`Server error: ${error.message}`, {
      status: 500,
    });
  }
}
