import { Bounce } from "react-awesome-reveal";
import useClass from "../../hooks/useClass";
import PopularClassCard from "./PopularClassCard";

const PopularClass = () => {
    const [, approvedClasses] = useClass();
    approvedClasses.sort((a, b) => b.enrolledStudents - a.enrolledStudents);

    const limitedApprovedClasses = approvedClasses.slice(0, 6);


    return (
        <div>
            <Bounce>
                <h2 className="text-5xl font-bold text-white text-center py-10">Popular Class</h2>
            </Bounce>
            <div className="md:grid grid-cols-3 gap-5">
                {
                    limitedApprovedClasses.map(singleClass => <PopularClassCard
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></PopularClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClass;