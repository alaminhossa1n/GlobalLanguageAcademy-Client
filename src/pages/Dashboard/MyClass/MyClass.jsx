import useMyClass from "../../../hooks/useMyClass";

const MyClass = () => {
    const [myClass] = useMyClass();
    console.log(myClass);

    return (
        <div className="overflow-x-auto w-3/4 h-full">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Enrolled Students</th>
                        <th>Feedback</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myClass.map((singleClass, index) =>
                            <tr
                                key={singleClass._id}>
                                <th>{index + 1}</th>
                                <th>{singleClass.status}</th>
                                <th>{singleClass.enrolledStudents}</th>
                                <th>{singleClass.feedback}</th>
                                <th><button className="btn">Update</button></th>

                            </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyClass;