import FoodCard from "../../../../Components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="bg-slate-50 py-5 ">
      <div className="container mx-auto text-center">
        <div className="mb-1 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items?.map((item) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderTab;
