import MainNavbar from "./main-navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-muted">
      <MainNavbar />
      {children}
    </div>
  )
}