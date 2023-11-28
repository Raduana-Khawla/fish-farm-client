// fishes page
import commonCarpImg from "../../assets/commonCarp.jpeg";
import catlaImg from "../../assets/catlaImg.jpeg";
import WallagoattuImg from "../../assets/WallagoattuImg.jpeg";
import ilish from "../../assets/ilish3.jpeg";
import mystuscavasiusImg from "../../assets/mystuscavasiusImg.jpeg";
import useMenu from "../../hooks/useMenu/useMenu";
import MenuCategory from "../Menu/MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const mystuscavasiuss = menu.filter(
    (item) => item.category === "mystuscavasius"
  );
  const commonCarp = menu.filter((item) => item.category === "commonCarp");
  const ilish = menu.filter((item) => item.category === "ilish");
  const catla = menu.filter((item) => item.category === "catla");
  const Wallagoattu = menu.filter((item) => item.category === "Wallagoattu");

  return (
    <div>
      <MenuCategory items={ilish} title="ilish" img={ilish}></MenuCategory>
      <MenuCategory
        items={mystuscavasiuss}
        title="mystuscavasius"
        img={mystuscavasiusImg}
      ></MenuCategory>
      <MenuCategory
        items={Wallagoattu}
        title={"Wallagoattu"}
        img={WallagoattuImg}
      ></MenuCategory>
      <MenuCategory items={catla} title={"catla"} img={catlaImg}></MenuCategory>
      <MenuCategory
        items={commonCarp}
        title={"commonCarp"}
        img={commonCarpImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
