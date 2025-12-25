import { Card } from "../../../../ui/card";
import Header from "./header";
import Content from "./content";

export default function MiniAppsCard() {
  return (
    <Card className="p-1 gap-2 border-none">
      <Header />
      <Content />
    </Card>
  );
}
