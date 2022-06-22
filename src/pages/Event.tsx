import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

type Props = {};

const Event = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 flex-col sm:flex-row">
        <Video />
        <Sidebar />
      </main>
    </div>
  );
};

export { Event };
