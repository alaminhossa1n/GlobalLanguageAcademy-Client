
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
                
                <section className="bg-[#B25068] py-16">
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-bold text-white text-center mb-8">Benefits of Learning Global Languages</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-[#774360] rounded-lg p-8 text-white">
                                <h3 className="text-2xl font-bold mb-4">Cultural Understanding</h3>
                                <p>Learning global languages opens doors to new cultures, traditions, and perspectives. It helps foster empathy and appreciation for diversity.</p>
                            </div>
                            <div className="bg-[#774360] rounded-lg p-8 text-white">
                                <h3 className="text-2xl font-bold mb-4">Career Opportunities</h3>
                                <p>Being proficient in global languages enhances job prospects and provides opportunities for international careers, networking, and collaboration.</p>
                            </div>
                            <div className="bg-[#774360] rounded-lg p-8 text-white">
                                <h3 className="text-2xl font-bold mb-4">Personal Growth</h3>
                                <p>Learning languages improves cognitive skills, memory, and problem-solving abilities. It boosts self-confidence and helps develop a global mindset.</p>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
};

export default Home;