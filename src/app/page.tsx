import T from "@/components/typography";
import { generateMetadataForPage } from "@/lib/metadata";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = generateMetadataForPage(
  "Dídac Sabatés",
  "Full Stack Developer and maker"
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 py-16 md:px-24 md:py-24">
      <div className="relative flex flex-col before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <T.H1 className="place-items-center">Dídac Sabatés</T.H1>
        <T.P>
          Full Stack Developer from Barcelona currently{" "}
          <span className="font-bold">looking for new opportunities</span> (look{" "}
          <Link href="cv/" className="underline">
            here
          </Link>
          , to know more about my work experience).
        </T.P>
        <T.P>
          I like to make stuff using woodworking, electronics, 3D printing and
          coding.
        </T.P>
      </div>

      <div className="grid md:grid-cols-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="cv/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            CV{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            What I&apos;ve worked on
          </p>
        </Link>

        <Link
          href="blog/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Blog{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Sometimes I write...yeah i wish
          </p>
        </Link>
      </div>
    </main>
  );
}
