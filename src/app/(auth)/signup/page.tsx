import { Metadata } from "next";
import SignUpForm from "./SignUpForm";
import Image from "next/image";
import FlickFeedSVG from "@/assets/flickfeed.svg";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <main className="block h-screen items-center justify-center bg-primary-foreground px-0 md:flex md:bg-primary">
      <div className="flex items-center justify-center overflow-hidden rounded-none bg-primary-foreground p-8 shadow-none md:rounded-sm md:p-16 md:shadow-sm">
        <div className="w-full">
          {/* LOGO */}
          <div className="flex space-x-2 text-2xl font-bold text-primary">
            <Image src={FlickFeedSVG} alt="logo" width={32} height={32} />
            <span>flickfeed</span>
          </div>
          {/* INFO */}
          <div className="mt-6 text-2xl font-bold">Create an account</div>
          <div className="mb-3 mt-1 text-base font-medium">
            Your Feed Awaits — Sign Up Now!
          </div>

          <SignUpForm />

          <div className="mt-2 text-center">
            Already have an account?{" "}
            <Link className="font-medium text-primary" href="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
