
const AllClassCard = ({ singleClass }) => {

    const { availableSeats, className, image, instructorEmail, instructorName, price, status } = singleClass;

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <img src={image} alt="Class" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-bold mb-2">{className}</h2>
            <p className="text-gray-600 mb-2">Instructor: {instructorName}</p>
            <p className="text-gray-600 mb-2">Instructor Email: {instructorEmail}</p>
            <p className="text-gray-600 mb-2">Available Seats: {availableSeats}</p>
            <p className="text-gray-600 mb-2">Price: {price}</p>
            <p className={`text-lg font-bold mb-2 ${status === 'approved' ? 'text-green-600' : status === 'denied' ? 'text-red-600' : 'text-yellow-600'}`}>Status: {status}</p>
            <div className="flex justify-between">
                <button className="bg-green-500 text-white rounded-lg px-4 py-2">Approve</button>
                <button className="bg-red-500 text-white rounded-lg px-4 py-2">Deny</button>
                <button className="bg-blue-500 text-white rounded-lg px-4 py-2">Send Feedback</button>
            </div>
        </div>
    );
};

export default AllClassCard;