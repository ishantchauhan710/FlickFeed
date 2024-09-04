import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import {
  getPostDataInclude,
  MessageCountInfo,
  NotificationCountInfo,
  notificationsInclude,
  NotificationsPage,
} from "@/lib/types";
import { NextRequest } from "next/server";
import { PostsPage } from "@/lib/types";
import streamServerClient from "@/lib/stream";

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

    const { total_unread_count } = await streamServerClient.getUnreadCount(
      user.id,
    );

    const data: MessageCountInfo = {
      unreadCount: total_unread_count,
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
