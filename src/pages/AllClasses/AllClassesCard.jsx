
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const AllClassesCard = ({ oneClass }) => {
    const { user } = useAuth();
    const [, refetch] = useCart()

    const { className, instructorName, availableSeats, price, role, image, _id } = oneClass;

    const isDisabled = availableSeats === 0 || role === 'admin' || role === 'instructor';

    const handleSelect = () => {

        if (user && user.email) {
            const cartItem = { menuItemId: _id, className, image, price, email: user.email }
            fetch('https://global-language-academy-server.vercel.app/carts', {
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
                        toast.success('Class Selected!')
                    }
                })
        }
    };

    return (
        <div className={`bg-[#774360] text-white shadow-lg rounded-lg p-4 ${availableSeats === 0 ? 'bg-red-200' : ''}`}>
            <img src={image} alt="Class" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-bold mb-2">{className}</h2>
            <p className="mb-2">Instructor: {instructorName}</p>
            <p className="mb-2">Available Seats: {availableSeats}</p>
            <p className="mb-2">Price: {price}</p>
            {user ? (
                <button
                    className={`bg-[#E7AB79] hover:bg-[#B25068] text-white py-2 px-4 rounded ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isDisabled}
                    onClick={() => handleSelect(oneClass)}
                >
                    Select
                </button>
            ) : (
                <Link to='/login'>
                    <button
                        className="bg-[#E7AB79] hover:bg-[#B25068] text-white py-2 px-4 rounded"
                    // onClick={handleLogin}
                    >
                        Log In to Select
                    </button>
                </Link>
            )}

        </div>
    );
};

export default AllClassesCard;