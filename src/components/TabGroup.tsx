import { useState } from "react";
import HomePage from "./HomePage";
import GamePage from "./FantasyParkVRPage";
import TeamPage from "./TeamPage";
import ServicesPage from "./ServicesPage";
import GameView from "./BaseDefensePage";

interface TabGroupProps {
  tabs: string[];
}

function TabGroup({ tabs }: TabGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="tabgroup">
      <ul className="list-group list-group-horizontal">
        {tabs.map((tab, index) => (
          <li
            className={
              selectedIndex == index
                ? "flex-fill list-group-item active"
                : "flex-fill list-group-item"
            }
            key={tab}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {tab}
          </li>
        ))}
      </ul>
      {selectedIndex == 0 ? <HomePage /> : <></>}
      {selectedIndex == 1 ? <GamePage /> : <></>}
      {selectedIndex == 2 ? <GameView /> : <></>}
      {selectedIndex == 3 ? <TeamPage /> : <></>}
      {selectedIndex == 4 ? <TeamPage /> : <></>}
      {selectedIndex == 5 ? <ServicesPage /> : <></>}
    </div>
  );
}
export default TabGroup;
