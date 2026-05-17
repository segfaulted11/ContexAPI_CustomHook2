import Grandpa from "./Grandpa";
import './style.css'
const FamilyTree = () => {

    const familyAsset = "$1M";
    //if you want to send this family assest to any of the family member you cant send it directly, rather u need to send it gradually(props drilling). 
    // FamilyTree -> grandpa -> dad -> myself -> special
    

    return (
        <div className="family-tree">
            <h2>Family Tree</h2>
            <Grandpa familyAsset={familyAsset}/>
        </div>
    );
};

export default FamilyTree;