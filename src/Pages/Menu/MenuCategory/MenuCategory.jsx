import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title }) => {
  return (
    <div className="px-2">
      <div className="grid md:grid-cols-2 gap-10  my-4 md:my-8">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline bg-green-400 text-white border-0  mt-2 ">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
