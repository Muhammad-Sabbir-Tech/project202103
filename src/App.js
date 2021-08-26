import React from "react";
import TopNavBar from "./component/navbar/topNavBar";
import TopBanner from "./component/topBanner/TopBanner";
import FeatureComponent from "./component/featureComponent/FeatureComponent";
import OurService from "./component/ourService/OurService";
import FeatureQuality from "./component/FeatureQuality/FeatureQuality";
import CoreFeature from "./component/coreFeature/CoreFeature";
import HowItWork from "./component/howItWorks/howItWork";
import PriceComponent from "./component/pricComponent/PriceComponent";




function App() {
  return (
    <div>
        <TopNavBar/>
        <TopBanner/>
        <FeatureComponent/>
        <OurService/>
        <FeatureQuality/>
        <CoreFeature/>
        <HowItWork/>
        <PriceComponent/>
    </div>
  );
}

export default App;
