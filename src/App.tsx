import MainBanner from "./components/MainBanner";
import TabGroup from "./components/TabGroup";
import MainFooter from "./components/MainFooter";

function App() {
  let tabs = ["Climate Change AI"];

  return (
    <div className="app">
      <MainBanner />
      <TabGroup tabs={tabs} />
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}

export default App;
