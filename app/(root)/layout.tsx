import { DesktopHeader, MobileHeader } from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
      {children}
      <footer>footer</footer>
      {/* TODO: add sticky mobile nav at the bottom */}
    </>
  );
}
