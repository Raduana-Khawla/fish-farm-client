import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart/useCart";
import { FaShoppingCart } from "react-icons/fa";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("https://fish-farm-server.onrender.com/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="max-w-sm bg-white rounded overflow-hidden shadow-sm border mx-auto p-2">
      <img className="w-full h-32 object-cover" src={image} alt="Shoes" />
      <div className="card-body flex flex-col items-center">
        <h2 className="font-bold text-sm text-gray-700">{name}</h2>
        <p className="text-sm text-gray-700">${price}</p>
        <p className="text-gray-700 text-xs">{recipe}</p>
        <div className="mt-4">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-sm bg-indigo-600 text-white normal-case w-full py-1 hover:bg-indigo-400"
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
