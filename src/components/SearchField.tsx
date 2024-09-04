"use client";

import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";

export default function SearchField() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const query = (form.query as HTMLInputElement).value.trim();
    if (!query) return;
    router.push(`/search?q=${encodeURIComponent(query)}`); // Navigate to search page with query params
  }

  return (
    <form onSubmit={handleSubmit} method="GET" action="/search">
      <div className="relative bg-background rounded-md">
        <Input name="query" placeholder="Search people, feeds or hashtags" className="pe-10 min-w-auto md:min-w-[300px]" />
        <SearchIcon className="absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-muted-foreground/80 hover:text-muted-foreground/100 cursor-pointer" />
      </div>
    </form>
  );
}
