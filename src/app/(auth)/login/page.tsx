import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FlickFeedSVG from "@/assets/flickfeed.svg";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <main className="block h-screen items-center justify-center bg-primary-foreground px-0 md:flex md:bg-primary">
      <div className="flex items-center justify-center overflow-hidden rounded-none bg-primary-foreground p-8 shadow-none md:rounded-sm md:p-16 md:shadow-sm">
        <div>
          {/* LOGO */}
          <div className="flex space-x-2 text-2xl font-bold text-primary">
            <Image src={FlickFeedSVG} alt="logo" width={32} height={32} />
            <span>flickfeed</span>
          </div>
          {/* INFO */}
          <div className="mt-6 text-2xl font-bold">Welcome back!</div>
          <div className="mb-3 mt-1 text-base font-medium text-muted">
            Your Feed Awaits — Login Now!
          </div>

          <LoginForm />

          <div className="mt-2 text-center">
            Don&apos;t have an account?{" "}
            <Link className="font-medium text-primary" href="/signup">
              Sign Up
            </Link>
          </div>
          <div className="mt-6 text-center text-base">
            Made with ❤️ by ishant
          </div>
        </div>
      </div>
    </main>
  );
}
