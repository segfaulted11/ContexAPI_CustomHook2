import Cousin from "./Cousin";

const Aunt = () => {
    return (
        <div>
           <h3>Aunt</h3> 
           <section>
            <Cousin name="JW"></Cousin>
            <Cousin name="JQ"></Cousin>
           </section>
        </div>
    );
};

export default Aunt;