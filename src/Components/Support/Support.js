import React from "react";
import SupportComponent from "./SupportComponent";
import { TiMessages } from "react-icons/ti";
import { BsShield } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa6";
import { FaPaintRoller } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";

const Support = () => {
    return (
      <div className="flex flex-col items-center mt-[80px]">
        <div className="grid grid-cols-3 gap-[40px]">
          <SupportComponent
            title="Community Support"
            icon={<TiMessages />}
            description="Apps keep work and information right at your fingertips—and Slack keeps it all securely."
          />
          <SupportComponent
            title="Security First"
            icon={<BsShield />}
            description="Connect the tools you already use to get more from them every time you work."
          />
          <SupportComponent
            title="24/7 Admin Support"
            icon={<FaHeadphones />}
            description="You can work with apps in channels, where they’re a seamless part of the conver."
          />
        </div>
        <div className="grid grid-cols-3 gap-[40px] mt-[40px]">
          <SupportComponent
            title="100+ Themes"
            icon={<FaPaintRoller />}
            description="Spend less time tracking down the people needed to get work done."
          />
          <SupportComponent
            title="Fully Integrated"
            icon={<TbWorld />}
            description="Skip the follow-ups and back-and -forth. Easily standardize how you collect."
          />
          <SupportComponent
            title="Monthly Update"
            icon={<FaRegEdit />}
            description="Take control of your work day. In a just a few minutes, create a customized workflow."
          />
        </div>
      </div>
    );
};

export default Support;
