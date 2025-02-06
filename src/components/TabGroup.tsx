import { useState } from "react";
import HomePage from "./HomePage";
import ResearchPage from "./ResearchHub";
import CollaborationPage from "./CollaborationTools";

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
      {selectedIndex == 1 ? <ResearchPage /> : <></>}
      {selectedIndex == 2 ? <CollaborationPage /> : <></>}
    </div>
  );
}
export default TabGroup;
