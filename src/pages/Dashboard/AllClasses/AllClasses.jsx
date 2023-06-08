
import useClass from "../../../hooks/useClass";
import AllClassCard from "./AllClassCard";

const AllClasses = () => {
    const [allClass] = useClass()

    return (
        <div>
            <h3 className="text-3xl font-semibold my-4 gap-5">Total Users: {allClass.length}</h3>
            <div className="grid grid-cols-3">
                {
                    allClass.map(singleClass => <AllClassCard
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></AllClassCard>)
                }
            </div>
        </div>
    );
};

export default AllClasses;