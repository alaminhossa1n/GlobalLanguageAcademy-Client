import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const EnrolledClass = () => {
    const { user } = useAuth();
    const [enrolled, setEnrolled] = useState([]);

    useEffect(() => {
        fetch(`https://global-language-academy-server.vercel.app/enrolled?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setEnrolled(data);

            })
    }, [user])

    return (
        <div className="w-full h-full">
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Items: {enrolled.length}</h3>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Item Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolled.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.className}
                                </td>
                                <td className="text-end">${item.price}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClass;