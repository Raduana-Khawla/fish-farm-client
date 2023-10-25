import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import coverImage from "../../assets/menu/coverImage.jpeg";
import commonCarpImg from "../../assets/commonCarp.jpeg";
import catlaImg from "../../assets/catlaImg.jpeg";
import WallagoattuImg from "../../assets/WallagoattuImg.jpeg";
import mystuscavasiusImg from "../../assets/mystuscavasiusImg.jpeg";
import useMenu from "../../hooks/useMenu/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../Menu/MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const mystuscavasiuss = menu.filter(
    (item) => item.category === "mystuscavasius"
  );
  const commonCarp = menu.filter((item) => item.category === "commonCarp");
  const catla = menu.filter((item) => item.category === "catla");
  const Wallagoattu = menu.filter((item) => item.category === "Wallagoattu");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={coverImage} title="our menu"></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* mystuscavasius menu items  */}
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
