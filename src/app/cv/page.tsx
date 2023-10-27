import { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import T from "@/components/typography";
import { Navbar } from "@/components/navbar";
import { generateMetadataForPage } from "@/lib/metadata";

export const metadata: Metadata = generateMetadataForPage(
  "CV",
  "Working experience"
);

export default function CV() {
  const jobs = [
    {
      company_name: "Abacum",
      position: "Full Stack Engineer",
      timespan: "Oct 2023 - Present",
    },
    {
      company_name: "Verse",
      position: "Full Stack Developer",
      timespan: "Jun 2019 - Jul 2023",
    },
    {
      company_name: "hrbs.",
      position: "CTO",
      timespan: "May 2018 - May 2023",
    },
    {
      company_name: "Trinity Tech",
      position: "Full Stack Developer",
      timespan: "Dec 2016 - May 2018",
    },
    {
      company_name: "XMi",
      position: "Full Stack Developer",
      timespan: "Jul 2014 - Jul 2016",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between px-10 py-16 md:px-24 md:py-24">
        <div className="min-w-[50%] flex flex-col">
          <T.H1>CV</T.H1>
          <section className="py-10">
            <div className="py-2">
              {jobs.map((job) => (
                <Card key={job.company_name} className="mb-3">
                  <CardHeader>
                    <CardTitle>{job.company_name}</CardTitle>
                    <CardDescription>
                      {job.position} (
                      <span className="italic">{job.timespan}</span>)
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <T.P>
              For more information you can go to my{" "}
              <Link
                href="https://www.linkedin.com/in/didacsabates/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                LinkedIn
              </Link>{" "}
              profile.
            </T.P>
          </section>
        </div>
      </main>
    </>
  );
}
