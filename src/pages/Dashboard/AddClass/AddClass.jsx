import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_Upload_token = import.meta.env.VITE_Image_Upload_token

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_Upload_token}`

    const onSubmit = (data) => {
        // console.log(data);
        const { availableSeats, className, instructorEmail, instructorName, price, status } = data;

        const formData = new FormData();
        formData.append('image', data.classImage[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                // console.log(imgResponse);
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const newItem = { instructorName, instructorEmail, price: parseFloat(price), className, availableSeats: parseInt(availableSeats), enrolledStudents: parseInt(0), image: imgURL, status }
                    axiosSecure.post('/class', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 h-full py-10 mx-auto">
            <div className="mb-4">
                <label htmlFor="className" className="block mb-2 text-sm font-medium text-gray-700">
                    Class Name
                </label>
                <input
                    type="text"
                    id="className"
                    {...register('className')}
                    placeholder="Enter class name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="classImage" className="block mb-2 text-sm font-medium text-gray-700">
                    Class Image
                </label>
                <input
                    type="file"
                    id="classImage"
                    {...register('classImage')}
                    placeholder="Enter class image URL"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="instructorName" className="block mb-2 text-sm font-medium text-gray-700">
                    Instructor Name
                </label>
                <input
                    type="text"
                    id="instructorName"
                    defaultValue={user?.displayName}
                    readOnly
                    {...register('instructorName')}
                    placeholder="Enter instructor name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="instructorEmail" className="block mb-2 text-sm font-medium text-gray-700">
                    Instructor Email
                </label>
                <input
                    type="email"
                    readOnly
                    defaultValue={user?.email}
                    id="instructorEmail"
                    {...register('instructorEmail')}
                    placeholder="Enter instructor email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="availableSeats" className="block mb-2 text-sm font-medium text-gray-700">
                    Available Seats
                </label>
                <input
                    type="number"
                    id="availableSeats"
                    {...register('availableSeats')}
                    placeholder="Enter available seats"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-700">
                    Price
                </label>
                <input
                    type="number"
                    id="price"
                    {...register('price')}
                    placeholder="Enter price"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-700">
                    Status
                </label>
                <select
                    id="status"
                    {...register('status')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="pending">Pending</option>
                </select>
            </div>
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add
                </button>
            </div>
        </form>
    );
};

export default AddClass;