
const PopularClassCard = ({ singleClass }) => {
    const { availableSeats, className, image, instructorEmail, instructorName, price, enrolledStudents } = singleClass;

    return (
        <div className="shadow-lg rounded-lg p-4 bg-[#774360] text-white" data-aos="flip-right">
            <img src={image} alt="Class" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-bold mb-2">{className}</h2>
            <p className="mb-2">Instructor: {instructorName}</p>
            <p className="mb-2">Instructor Email: {instructorEmail}</p>
            <p className="mb-2">Available Seats: {availableSeats}</p>
            <p className="mb-2">Enrolled Students: {enrolledStudents}</p>
            <p className="mb-2">Price: {price}</p>
        </div>
    );
};

export default PopularClassCard;