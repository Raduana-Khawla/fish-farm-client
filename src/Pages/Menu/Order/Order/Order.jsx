import { useState } from "react";
import orderCoverImg from "../../../../assets/order.jpg";
import Cover from "../../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../../hooks/useMenu/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["mystuscavasius", "commonCarp", "catla", "Wallagoattu"];
  const { category } = useParams();
  console.log(category);

  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const mystuscavasius = menu.filter(
    (item) => item.category === "mystuscavasius"
  );
  const commonCarp = menu.filter((item) => item.category === "commonCarp");
  const catla = menu.filter((item) => item.category === "catla");
  const Wallagoattu = menu.filter((item) => item.category === "Wallagoattu");
  //const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={orderCoverImg} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Mystuscavasius</Tab>
          <Tab>CommonCarp</Tab>
          <Tab>Catla</Tab>
          <Tab>Wallagoattu</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={mystuscavasius}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={commonCarp}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={catla}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={Wallagoattu}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
