import useClass from "../../hooks/useClass";
import PopularClassCard from "./PopularClassCard";

const PopularClass = () => {
    const [, approvedClasses] = useClass();

    return (
        <div>
            <h2 className="text-5xl font-bold text-white text-center py-10">Popular Class</h2>
            <div className="grid grid-cols-3 gap-5">
                {
                    approvedClasses.map(singleClass => <PopularClassCard
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></PopularClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClass;