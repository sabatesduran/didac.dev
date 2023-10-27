import { Navbar } from "@/components/navbar";
import T from "@/components/typography";
import { generateMetadataForPage } from "@/lib/metadata";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = generateMetadataForPage();

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between px-10 py-16 md:px-24 md:py-24">
        <div className="relative flex flex-col before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <T.H1 className="place-items-center">Dídac Sabatés</T.H1>
          <T.P>
            Full Stack Engineer from Barcelona currently working at{" "}
            <span className="font-bold">Abacum</span>{" "}
            (look{" "}
            <Link href="/cv" className="underline">
              here
            </Link>
            , to know more about my work experience).
          </T.P>
          <T.P>
            I like to make stuff using woodworking, electronics, 3D printing and
            coding.
          </T.P>
        </div>
      </main>
    </>
  );
}
