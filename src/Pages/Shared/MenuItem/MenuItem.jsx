const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="md:flex space-x-2   md:px-0 ">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[120px] mb-1 md:mb-0 "
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name}----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
