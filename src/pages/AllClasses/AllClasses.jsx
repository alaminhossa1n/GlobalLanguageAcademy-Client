import useClass from "../../hooks/useClass";
import AllClassesCard from "./AllClassesCard";

const AllClasses = () => {
    const [allClass] = useClass();

    return (
        <div className="grid grid-cols-3 gap-5 py-20">
            {
                allClass.map(oneClass => <AllClassesCard
                    key={oneClass._id}
                    oneClass={oneClass}
                ></AllClassesCard>)
            }
        </div>
    );
};

export default AllClasses;