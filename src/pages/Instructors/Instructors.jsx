import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
    const [instructors, setInstructors] = useState();
    console.log(instructors);

    useEffect(() => {
        fetch('https://global-language-academy-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
                console.log(data);
            })
    }, [])
    return (
        <div className="grid grid-cols-3 gap-5">
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