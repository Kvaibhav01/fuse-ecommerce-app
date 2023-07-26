import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

//? `POST` function name is required so it is capable of sending `POST` requests
export async function POST(req: Request) {
  try {
    // The currently logged in `userId` who's trying to create a new store
    const { userId } = auth();

    const body = await req.json();
    const { name } = body;

    // If there's no `userId`
    if (!userId) {
      return new NextResponse("Unauthorized user", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    // Create a new store
    const store = await prismadb.store.create({
      data: {
        name,
        userId,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
