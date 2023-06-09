import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";

const AllClassesCard = ({ oneClass }) => {
    const { user } = useAuth();
    const [, refetch] = useCart()

    const { className, instructorName, availableSeats, price, role, image, _id, instructorEmail } = oneClass;

    const isDisabled = availableSeats === 0 || role === 'admin' || role === 'instructor';

    const handleSelect = (oneClass) => {

        if (user && user.email) {
            const cartItem = { menuItemId: _id, className, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        console.log(data);
                        refetch(); 
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
    };

    return (
        <div className={`bg-white shadow-lg rounded-lg p-4 ${availableSeats === 0 ? 'bg-red-200' : ''}`}>
            <img src={image} alt="Class" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-bold mb-2">{className}</h2>
            <p className="text-gray-600 mb-2">Instructor: {instructorName}</p>
            <p className="text-gray-600 mb-2">Available Seats: {availableSeats}</p>
            <p className="text-gray-600 mb-2">Price: {price}</p>

            <button
                className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isDisabled}
                onClick={() => handleSelect(oneClass)}
            >
                {user ? 'Select' : 'Log In to Select'}
            </button>
        </div>
    );
};

export default AllClassesCard;