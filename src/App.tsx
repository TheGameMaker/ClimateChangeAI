import MainBanner from "./components/MainBanner";
import TabGroup from "./components/TabGroup";
import MainFooter from "./components/MainFooter";

function App() {
  let tabs = ["Home", "Fantasy Park VR", "Team", "Services"];

  return (
    <div className="app">
      <MainBanner />
      <TabGroup tabs={tabs} />
      <footer><MainFooter /></footer>
    </div>
  );
}

export default App;
