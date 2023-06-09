
const PopularClassCard = ({singleClass}) => {
    const { availableSeats, className, image, instructorEmail, instructorName, price } = singleClass;

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <img src={image} alt="Class" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-bold mb-2">{className}</h2>
            <p className="text-gray-600 mb-2">Instructor: {instructorName}</p>
            <p className="text-gray-600 mb-2">Instructor Email: {instructorEmail}</p>
            <p className="text-gray-600 mb-2">Available Seats: {availableSeats}</p>
            <p className="text-gray-600 mb-2">Price: {price}</p>
        </div>
    );
};

export default PopularClassCard;