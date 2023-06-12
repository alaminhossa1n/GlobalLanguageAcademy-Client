
const InstructorCard = ({ instructor }) => {
    const { email, name, image } = instructor
    return (
        <div className="bg-[#774360] shadow-lg rounded-lg p-4 text-white">
            <img src={image} alt="Class" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-bold mb-2 text-white">Name: {name}</h2>
            <p className="mb-2 text-white">Email: {email}</p>
        </div>
    );
};

export default InstructorCard;