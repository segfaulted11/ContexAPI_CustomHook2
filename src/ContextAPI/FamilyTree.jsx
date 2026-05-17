import { createContext } from "react";
import Grandpa from "./Grandpa";
import "./style.css";

// Create and export a Context object
// This will allow data to be shared across components without passing props manually at every level
export const familyAssetContext = createContext("");

const FamilyTree = () => {
  // Shared data to provide through Context
  const familyAsset = "$1M";
  //if you want to send this family assest to any of the family member you cant send it directly, rather u need to send it gradually(props drilling).
  // FamilyTree -> grandpa -> dad -> myself -> special
  //but this can get too lengthy. so the alternative solution for dealing w this problem is "Context API".

  return (
    <div className="family-tree">
      <h2>Family Tree</h2>

      {/* Context Provider wraps components that need access to the shared familyAsset value */}
      <familyAssetContext.Provider value={familyAsset}>
        <Grandpa />
      </familyAssetContext.Provider>
    </div>
  );
};

export default FamilyTree;
