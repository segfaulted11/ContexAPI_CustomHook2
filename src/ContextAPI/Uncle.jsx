import Cousin from "./Cousin";


const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section>
                <Cousin name="JY"/>
                <Cousin name="JN"/>
            </section>
        </div>
    );
};

export default Uncle;