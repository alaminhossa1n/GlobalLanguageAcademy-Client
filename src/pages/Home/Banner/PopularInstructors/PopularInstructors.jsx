import { useState } from "react";
import { useEffect } from "react";
import InstructorCard from "../../../Instructors/InstructorCard";

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            })
    }, [])

    const instructorsLimited = instructors?.slice(0, 6);

    return (
        <div>
            <h2 className="text-5xl font-bold text-white text-center py-10">Popular Instructor</h2>
            <div className="grid grid-cols-3 gap-5 bg-[#B25068] pb-10 h-full">
                {
                    instructorsLimited?.map(instructor => <InstructorCard
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;