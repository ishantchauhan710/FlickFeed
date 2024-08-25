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
    <main className="h-screen flex items-center justify-center bg-gray-100 px-0 md:px-10">
      <div className="grid grid-cols-12 w-full md:w-auto bg-background shadow-none md:shadow-md rounded-none md:rounded-lg overflow-hidden h-screen md:h-auto">
        <div className="col-span-12 md:col-span-6 flex items-center justify-center p-8 md:p-16">
          <div className="w-full">
            {/* LOGO */}
            <div className="text-primary font-bold text-2xl flex space-x-2">
              <Image src={FlickFeedSVG} alt="logo" width={32} height={32} />
              <span>flickfeed</span>
            </div>
            {/* INFO */}
            <div className="text-2xl font-bold mt-6">Welcome back!</div>
            <div className="text-base mt-1 text-muted font-medium mb-3">
              Your Feed Awaits — Login Now!
            </div>

            <LoginForm />

            <div className="text-center mt-2">
              Don&apos;t have an account?{" "}
              <Link className="font-medium text-primary" href="/signup">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 hidden md:flex bg-primary text-primary-foreground text-center items-center justify-center p-16">
          <div className="flex items-center justify-center flex-col">
            <Image
              src="/auth.png"
              alt="auth illustration"
              width={300}
              height={300}
            />
            <div className="text-xl font-semibold w-2/3">
              Share posts, video call, chat with friends, and more!
            </div>
            <div className="text-sm mt-6">Made with ♡ by ishant</div>
          </div>
        </div>
      </div>
    </main>
  );
}
