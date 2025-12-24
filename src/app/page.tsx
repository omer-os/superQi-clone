import HomeActionsCard from "../components/modules/home/cards/actions/card";
import MiniAppsCard from "../components/modules/home/cards/mini-apps/card";
import HomeTransactionsWrapper from "../components/modules/home/cards/transactions/wrapper";
import MainAppbar from "../components/modules/layouts/main-appbar";
import MainNavbar from "../components/modules/layouts/main-navbar";

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col">
      <MainNavbar />
      <div className="p-4 flex flex-col gap-4 flex-1">
        <HomeActionsCard />
        <MiniAppsCard />
        <HomeTransactionsWrapper />
      </div>
      <MainAppbar />
    </div>
  );
}
