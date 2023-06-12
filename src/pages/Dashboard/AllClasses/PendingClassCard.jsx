import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useClass from "../../../hooks/useClass";

const PendingClassCard = ({ singleClass }) => {
    const [axiosSecure] = useAxiosSecure();
    const [, refetch] = useClass();

    const { availableSeats, className, image, instructorEmail, instructorName, price, status } = singleClass;

    const isApproved = status === 'approved' || status === 'denied';

    const approvedClass = (id) => {
        axiosSecure.patch(`/approved-class/${id}`, { status: 'approved' })
            .then(data => {
                if (data.data.modifiedCount) {
                    refetch()
                }
            })
    }

    const handleDeny = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Submit your Github username',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                return
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                //    if confirm 
                axiosSecure.patch(`/approved-class/${id}`, { status: 'denied', feedback: result.value})
                    .then(data => {
                        if (data.data.modifiedCount) {
                            refetch();
                        }
                    })
            }
        })
    }


    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <img src={image} alt="Class" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-bold mb-2">{className}</h2>
            <p className="text-gray-600 mb-2">Instructor: {instructorName}</p>
            <p className="text-gray-600 mb-2">Instructor Email: {instructorEmail}</p>
            <p className="text-gray-600 mb-2">Available Seats: {availableSeats}</p>
            <p className="text-gray-600 mb-2">Price: {price}</p>
            <p className={`text-lg font-bold mb-2 ${status === 'approved' ? 'text-green-600' : status === 'denied' ? 'text-red-600' : 'text-yellow-600'}`}>Status: {status}</p>
            <div className="flex justify-around">
                <button
                    onClick={() => approvedClass(singleClass._id)}
                    className={`bg-green-500 text-white rounded-lg px-4 py-2 ${isApproved ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isApproved}
                >
                    Approve
                </button>

                <button
                    onClick={() => handleDeny(singleClass._id)}
                    className={`bg-red-500 text-white rounded-lg px-4 py-2 ${isApproved ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isApproved}
                >
                    Deny
                </button>
            </div>
        </div>
    );
};

export default PendingClassCard;