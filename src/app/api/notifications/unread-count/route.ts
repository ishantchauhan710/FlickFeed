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

export async function GET(req: NextRequest) {
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

    const unreadCount = await prisma.notification.count({
      where: {
        recipientId: user.id,
        read: false,
      },
    });

    const data: NotificationCountInfo = {
      unreadCount,
    };

    return Response.json(data);
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
