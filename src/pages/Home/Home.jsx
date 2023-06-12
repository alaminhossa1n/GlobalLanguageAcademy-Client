
import Banner from "./Banner/Banner";
import PopularInstructors from "./Banner/PopularInstructors/PopularInstructors";
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
                <section>
                    <PopularInstructors></PopularInstructors>
                </section>
            </div>
        </div>
    );
};

export default Home;