import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
    const [instructors, setInstructors] = useState();

    useEffect(() => {
        fetch('https://global-language-academy-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            })
    }, [])
    return (
        <div className="grid grid-cols-3 gap-5 bg-[#B25068] py-28 h-full">
            {
                instructors?.map(instructor => <InstructorCard
                    key={instructor._id}
                    instructor={instructor}
                ></InstructorCard>)
            }
        </div>
    );
};

export default Instructors;