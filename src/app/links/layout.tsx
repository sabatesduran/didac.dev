import { DarkModeToggle } from "@/components/dark-mode-toggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="absolute top-3 right-3">
        <DarkModeToggle />
      </div>
      {children}
    </>
  );
}
