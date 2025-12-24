import MainNavbar from "./main-navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-muted h-dvh overflow-auto">
      <main className="pb-16">{children}</main>
    </div>
  );
}
