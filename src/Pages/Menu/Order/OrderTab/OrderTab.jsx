import FoodCard from "../../../../Components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="bg-slate-50 py-5">
      <div className="container mx-auto text-center">
        <div className="my-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderTab;
