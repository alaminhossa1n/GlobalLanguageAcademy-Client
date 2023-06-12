
import useClass from "../../../hooks/useClass";
import PendingClassCard from "./PendingClassCard";


const PendingClass = () => {
    const [allClasses] = useClass();

    return (
        <div>
            <h3 className="text-3xl font-semibold my-4 gap-5">All Classes {allClasses.length}</h3>
            <div className="sm:grid-cols-1 grid-cols-3 gap-5">
                {
                    allClasses.map(singleClass => <PendingClassCard
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></PendingClassCard>)
                }
            </div>
        </div>
    );
};

export default PendingClass;