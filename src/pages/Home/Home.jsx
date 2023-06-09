import Banner from "./Banner";
import PopularClass from "./PopularClass";

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <section>
                <Banner></Banner>
            </section>


            {/* popular class section  */}


            <section>
                <PopularClass></PopularClass>
            </section>
        </div>
    );
};

export default Home;