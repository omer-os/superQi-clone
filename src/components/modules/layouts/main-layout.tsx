import MainNavbar from "./main-navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-muted">
      <MainNavbar />
      <main className="pb-16">{children}</main>
    </div>
  );
}
