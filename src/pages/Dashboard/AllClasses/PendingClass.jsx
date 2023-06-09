
import useClass from "../../../hooks/useClass";
import PendingClassCard from "./PendingClassCard";


const PendingClass = () => {
    const [allClass] = useClass()

    return (
        <div>
            <h3 className="text-3xl font-semibold my-4 gap-5">Total Users: {allClass.length}</h3>
            <div className="grid grid-cols-3 gap-5">
                {
                    allClass.map(singleClass => <PendingClassCard
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></PendingClassCard>)
                }
            </div>
        </div>
    );
};

export default PendingClass;