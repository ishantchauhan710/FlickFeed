import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import {
  getPostDataInclude,
  NotificationCountInfo,
  notificationsInclude,
  NotificationsPage,
} from "@/lib/types";
import { NextRequest } from "next/server";
import { PostsPage } from "@/lib/types";

export async function PATCH() {
  try {
    const { user } = await validateRequest();
    if (!user) {
      return Response.json(
        { error: "Unauthorized" },
        {
          status: 401,
        },
      );
    }

    await prisma.notification.updateMany({
      where: {
        recipientId: user.id,
        read: false,
      },
      data: {
        read: true,
      },
    });

    return new Response()
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Internal server error" },
      {
        status: 500,
      },
    );
  }
}
