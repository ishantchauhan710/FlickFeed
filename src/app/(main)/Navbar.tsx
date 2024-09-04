import BadgeIcon from "@/components/BadgeIcon";
import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import { Bell, Mail } from "lucide-react";
import Link from "next/link";
import { MdEmail, MdNotifications } from "react-icons/md";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-primary-foreground text-primary shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-3">
        <div>
          <Link href="/" className="text-2xl font-bold">
            FlickFeed
          </Link>
        </div>

        <div className="hidden sm:block">
          <SearchField />
        </div>

        <div>
          <UserButton />
        </div>
      </div>
    </header>
  );
}
