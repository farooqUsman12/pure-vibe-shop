/* eslint-disable react/prop-types */
import React from "react";
import { Dropdown } from "antd";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
];

const DropDownUi = ({ item, placement, arrow, dropdownRender }:any) => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      arrow={arrow || true}
      placement={placement || "bottomRight"}
      dropdownRender={(menu) => <div>{dropdownRender}</div>}
    >
      {item}
    </Dropdown>
  );
};

export default DropDownUi;
