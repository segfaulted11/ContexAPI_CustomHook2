import { useContext } from "react";
import { familyAssetContext } from "./FamilyTree";

const Special = () => {

    // Access shared data from the Context
    // useContext() reads the value provided by familyAssetContext.Provider
    const familyAsset = useContext(familyAssetContext);

    return (
        <div>
            <h3>Special</h3>

            {/* Display the shared family asset value */}
            <h4>family asset : {familyAsset}</h4>
        </div>
    );
};

export default Special;