import BadgeIcon from "@/components/BadgeIcon";
import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import { Bell, Mail } from "lucide-react";
import Link from "next/link";
import { MdEmail, MdNotifications } from "react-icons/md";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-primary shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-3">
        <div>
          <Link href="/" className="text-2xl font-bold text-primary-foreground">
            FlickFeed
          </Link>
        </div>

        <div className="flex items-center gap-16">
          <div className="hidden sm:block">
            <SearchField />
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <BadgeIcon
              icon={<MdEmail size={28} />}
              badgeText="2"
              title="Messages"
            />
            <BadgeIcon
              icon={<MdNotifications size={28} />}
              badgeText="8"
              title="Notifications"
            />
          </div>
          <UserButton className="sm:ms-auto" />
        </div>
      </div>
    </header>
  );
}
