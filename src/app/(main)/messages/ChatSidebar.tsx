import {
  ChannelList,
  ChannelPreviewMessenger,
  ChannelPreviewUIComponentProps,
  useChatContext,
} from "stream-chat-react";
import { useSession } from "../SessionProvider";
import { Button } from "@/components/ui/button";
import { MailPlus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";
import NewChatDialog from "./NewChatDialog";
import { useQueryClient } from "@tanstack/react-query";

interface ChatSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function ChatSidebar({ open, onClose }: ChatSidebarProps) {
  const { user } = useSession();

  // useCallback to prevent rerender of this component
  const ChannelPreviewCustom = useCallback(
    (props: ChannelPreviewUIComponentProps) => (
      <ChannelPreviewMessenger
        {...props}
        onSelect={() => {
          props.setActiveChannel?.(props.channel, props.watchers);
          onClose();
        }}
      />
    ),
    [onClose],
  );

  return (
    <div
      className={cn(
        "size-full flex-col border-e md:flex md:w-72 h-screen",
        open ? "flex" : "hidden",
      )}
    >
      <MenuHeader onClose={onClose} />
      <ChannelList
        filters={{
          type: "messaging",
          members: { $in: [user.id] },
        }}
        showChannelSearch
        options={{ state: true, presence: true, limit: 8 }} // Show 8 chats at a time
        sort={{
          last_message_at: -1, // Show new chats first
        }}
        additionalChannelSearchProps={{
          searchForChannels: true,
          searchQueryParams: {
            channelFilters: {
              filters: {
                members: {
                  $in: [user.id], // Show only those chats where we are a member of
                },
              },
            },
          },
        }}
        Preview={ChannelPreviewCustom}
      />
    </div>
  );
}

interface MenuHeaderProps {
  onClose: () => void;
}

function MenuHeader({ onClose }: MenuHeaderProps) {
  const [showNewChatDialog, setShowNewChatDialog] = useState(false);

  const queryClient = useQueryClient();
  const { channel } = useChatContext();

  useEffect(() => {
    if (channel?.id) {
      queryClient.invalidateQueries({ queryKey: ["unread-messages-count"] });
    }
  }, [channel?.id, queryClient]);

  return (
    <div className="flex items-center gap-3 p-2">
      <div className="h-full md:hidden">
        <Button size="icon" variant="ghost" onClick={onClose}>
          <X className="size-5" />
        </Button>
      </div>
      <h1 className="mx-auto text-xl font-bold md:ms-2">Messages</h1>
      <Button
        onClick={() => setShowNewChatDialog(true)}
        size="icon"
        variant="ghost"
        title="Start new chat"
      >
        <MailPlus className="size-5" />
      </Button>
      {showNewChatDialog && (
        <NewChatDialog
          onOpenChange={setShowNewChatDialog}
          onChatCreated={() => {
            setShowNewChatDialog(false);
            onClose();
          }}
        />
      )}
    </div>
  );
}
