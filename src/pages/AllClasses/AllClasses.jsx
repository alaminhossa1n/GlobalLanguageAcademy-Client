import useClass from "../../hooks/useClass";
import AllClassesCard from "./AllClassesCard";

const AllClasses = () => {
    const [, approvedClasses] = useClass();

    return (
        <div className="grid grid-cols-3 gap-5 py-28 bg-[#B25068] px-6">
            {
                approvedClasses.map(oneClass => <AllClassesCard
                    key={oneClass._id}
                    oneClass={oneClass}
                ></AllClassesCard>)
            }
        </div>
    );
};

export default AllClasses;