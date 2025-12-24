import HomeActionsCard from "../components/modules/home/cards/actions/card";
import MiniAppsCard from "../components/modules/home/cards/mini-apps/card";
import HomeTransactionsWrapper from "../components/modules/home/cards/transactions/wrapper";
import MainAppbar from "../components/modules/layouts/main-appbar";

export default function HomePage() {
  return (
    <>
      <div className="p-4 flex flex-col gap-4">
        <HomeActionsCard />
        <MiniAppsCard />
        <HomeTransactionsWrapper />
      </div>
      <MainAppbar />
    </>
  );
}
