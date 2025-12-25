import { Card } from "../../../../ui/card";
import Actions from "./actions";
import Header from "./header";

export default function HomeActionsCard() {
  return (
    <Card className="p-0 gap-0 border-none">
        <Header />
        <Actions />
    </Card>
  );
}