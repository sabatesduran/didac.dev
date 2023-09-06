import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

function H1({ children, className }: HeadingProps) {
  return (
    <h1
      className={cn(
        className,
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      )}
    >
      {children}
    </h1>
  );
}

function H2({ children, className }: HeadingProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

function H3({ children, className }: HeadingProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

function H4({ children, className }: HeadingProps) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}

interface PProps {
  children: React.ReactNode;
  className?: string;
}

function P({ children, className }: PProps) {
  return (
    <p className={cn(className, "leading-7 [&:not(:first-child)]:mt-6")}>
      {children}
    </p>
  );
}

function Blockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}

interface TableProps {
  headers: string[];
  rows: string[][];
}

function Table({ headers, rows }: TableProps) {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            {headers.map((header, index) => (
              <th key={index} className="border px-4 py-2 text-left font-bold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="m-0 border-t p-0 even:bg-muted">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border px-4 py-2 text-left">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function List({ children }: { children: React.ReactNode }) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}

function Lead({ children, className }: PProps) {
  return (
    <p className={cn(className, "text-xl text-muted-foreground")}>{children}</p>
  );
}

function Large({ children, className }: PProps) {
  return (
    <div className={cn(className, "text-lg font-semibold")}>{children}</div>
  );
}

function Small({ children, className }: PProps) {
  return (
    <small className={cn(className, "text-sm font-medium leading-none")}>
      {children}
    </small>
  );
}

function Muted({ children, className }: PProps) {
  return (
    <p className={cn(className, "text-sm text-muted-foreground")}>{children}</p>
  );
}

const T = {
  H1,
  H2,
  H3,
  H4,
  P,
  Blockquote,
  Table,
  List,
  InlineCode,
  Lead,
  Large,
  Small,
  Muted,
};

export default T;
