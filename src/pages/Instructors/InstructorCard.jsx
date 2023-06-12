
const InstructorCard = ({ instructor }) => {
    const { email, name, image } = instructor
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <img src={image} alt="Class" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-bold mb-2">Name: {name}</h2>
            <p className="text-gray-600 mb-2">Email: {email}</p>
        </div>
    );
};

export default InstructorCard;