import ChatBox from "./components/ChatBox";
import SidebarLinks from "./components/SidebarLinks";

function App() {
  return (
    <div className="container flex mx-auto py-4">
      <div className="pr-5 w-3/12">
        <SidebarLinks />
      </div>

      <div className="border border w-8/12 rounded-lg p-4">
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
