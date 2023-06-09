import useClass from "../../hooks/useClass";
import PopularClassCard from "./PopularClassCard";

const PopularClass = () => {
    const [allClass] = useClass()
    return (
        <div>
            <h2 className="text-3xl text-center">Popular Class</h2>
            <div className="grid grid-cols-3 gap-5">
            {
                allClass.map(singleClass => <PopularClassCard
                    key={singleClass._id}
                    singleClass={singleClass}
                ></PopularClassCard>)
            }
        </div>
        </div>
    );
};

export default PopularClass;