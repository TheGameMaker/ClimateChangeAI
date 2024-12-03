import { useState } from "react";
import HomePage from "./HomePage";

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
    </div>
  );
}
export default TabGroup;
