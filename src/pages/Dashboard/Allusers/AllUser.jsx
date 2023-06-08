import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaTrashAlt } from "react-icons/fa";

const AllUser = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        // fetch(`http://localhost:5000/users/admin/${user._id}`, {
        //     method: 'PATCH'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.modifiedCount) {
        //             refetch();
        //             Swal.fire({
        //                 position: 'top-end',
        //                 icon: 'success',
        //                 title: `${user.name} is an Admin Now!`,
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             })
        //         }
        //     })
    }

    const handleDelete = user => {

    }


    return (
        <div>
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Current Role</th>
                            <th>Change Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>
                                <p className='text-xl p-3 bg-green-400 rounded-lg text-center'>{user.role}</p>
                                </td>
                                <td>
                                    <div className='flex flex-col gap-2'>
                                      
                                        {user.role === 'instructor' ?
                                            <div className="badge badge-primary">
                                                <p>Instructor</p>
                                            </div> :
                                            <button className='btn btn-success'>Make Admin</button>}

                                        {user.role === 'instructor' ?
                                            <div className="badge badge-primary">
                                                <p>Instructor</p>
                                            </div> :
                                            <button className='btn btn-warning'>Make Instructor</button>}
                                    </div>
                                </td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;