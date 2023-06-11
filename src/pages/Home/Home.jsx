
import Banner from "./Banner/Banner";
import PopularClass from "./PopularClass";

const Home = () => {
    return (
        <div className="bg-[#B25068]">
                <Banner></Banner>
            <div className="container mx-auto">
                {/* popular class section  */}
                <section>
                    <PopularClass></PopularClass>
                </section>
            </div>
        </div>
    );
};

export default Home;