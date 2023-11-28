import { useState } from "react";
// import orderCoverImg from "../../../../assets/order.jpg";
// import Cover from "../../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../../hooks/useMenu/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router";
// import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = [
    "ilish",
    "mystuscavasius",
    "commonCarp",
    "catla",
    "wallagoattu",
  ];
  const { category } = useParams();
  // console.log(category);

  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const mystuscavasius = menu.filter(
    (item) => item.category === "mystuscavasius"
  );
  const commonCarp = menu.filter((item) => item.category === "commonCarp");
  const ilish = menu.filter((item) => item.category === "ilish");
  const catla = menu.filter((item) => item.category === "catla");
  const wallagoattu = menu.filter((item) => item.category === "wallagoattu");

  return (
    <div>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="bg-indigo-300">
          <Tab>Ilish</Tab>
          <Tab>Mystuscavasius</Tab>
          <Tab>CommonCarp</Tab>
          <Tab>Catla</Tab>
          <Tab>wallagoattu</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={ilish}></OrderTab>
        </TabPanel>
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
          <OrderTab items={wallagoattu}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
