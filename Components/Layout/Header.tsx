import Button from "../Button";
import React, { useState } from "react";
import { Dropdown } from "antd";

export default function Header() {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const filters = [
    {
      label: "Applied",
      count: 1745,
    },
    {
      label: "Shortlisted",
      count: 453,
    },
    {
      label: "Technical Interview",
      count: 123,
    },
    {
      label: "Opportunity Browsing",
      count: 243,
    },
    {
      label: "Video Interview I",
      count: 25,
    },
    {
      label: "Video Interview II",
      count: 25,
    },
    {
      label: "Video Interview III",
      count: 25,
    },
    {
      label: "Offer",
      count: 25,
    },
    {
      label: "Withdrawn",
      count: 25,
    },
  ];

  return (
    <header className="w-full py-[24px] px-[32px] grid grid-flow-col grid-cols-[30%_auto] gap-[32px]">
      <div>
        <h1 className="text-[20px] font-[600] text-primary">
          London Internship Program
        </h1>
        <span className="block mt-[8px] text-[12px] font-[300]">London</span>
      </div>

      <div className=" w-full  grid grid-flow-col gap-2  items-center grid-cols-[auto_max-content]">
        <Dropdown
          className="py-[8px] block px-[16px] bg-white text-primary w-full max-w-[321px] cursor-pointer text-[16px] rounded-[16px]"
          overlayClassName="header-program-filter-dropdown"
          openClassName="rounded-b-none shadow-[0px_4px_25px_0px_rgba(29,78,216,0.05)]"
          menu={{
            items: filters.map((filter, index) => {
              return {
                key: filter.label,
                label: (
                  <div
                    className={`
                      px-[16px] py-[23.5px] flex justify-between items-center 
                      ${
                        categoryFilter === filter.label
                          ? "bg-[#EDF2FF] shadow-[0px_4px_25px_0px_rgba(29,78,216,0.05)] text-primary"
                          : ""
                      } 
                      ${
                        index === filters.length - 1
                          ? ""
                          : "border-b-[1px] border-[#EEE]"
                      }
                    `}
                  >
                    <span className="text-[16px]">{filter.label}</span>
                    <span
                      className={`bg-[#F8F8F8] py-[2px] px-[10px] rounded-3xl ${
                        categoryFilter === filter.label ? "bg-[#D1DDFF]" : ""
                      }`}
                    >
                      {filter.count}
                    </span>
                  </div>
                ),
                className: "!p-0",
                onClick: (ev) => {
                  setCategoryFilter(ev.key);
                },
              };
            }),
            onSelect: (ev) => {
              alert("dude");
              setCategoryFilter(ev.selectedKeys[0]);
            },
          }}
          trigger={["click"]}
        >
          <button className="flex justify-between items-center text-[16px]">
            {categoryFilter || (
              <span className="text-[#dadada]">Select a category</span>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 10L12 14L8 10"
                stroke="#1D4ED8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </Dropdown>

        <div className=" grid grid-flow-col gap-[8px] justify-between items-center">
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.96 5.28L19.3425 11.6625C20.1 12.42 20.1 13.6425 19.3425 14.4L13.77 19.9725C13.0125 20.73 11.79 20.73 11.0325 19.9725L4.65002 13.59C4.29002 13.23 4.08002 12.735 4.08002 12.225V6.6525C4.08002 5.5875 4.95002 4.7175 6.01502 4.7175H11.5875C12.105 4.7175 12.6 4.92 12.96 5.28Z"
                stroke="#444444"
                stroke-width="0.7"
                strokeMiterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.58004 10.2525C9.15579 10.2525 9.62254 9.78577 9.62254 9.21001C9.62254 8.63425 9.15579 8.16751 8.58004 8.16751C8.00428 8.16751 7.53754 8.63425 7.53754 9.21001C7.53754 9.78577 8.00428 10.2525 8.58004 10.2525Z"
                stroke="#444444"
                stroke-width="0.7"
                strokeMiterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 19C15 16.7909 12.3137 15 9 15C5.68629 15 3 16.7909 3 19M17 14L21 10M17 10L21 14M9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12Z"
                stroke="#A80000"
                stroke-width="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 19C15 16.7909 12.3137 15 9 15C5.68629 15 3 16.7909 3 19M21 10L17 14L15 12M9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12Z"
                stroke="#0B0B0B"
                stroke-width="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 19C15 16.7909 12.3137 15 9 15C5.68629 15 3 16.7909 3 19M16.8281 5.17163C17.1996 5.54307 17.4942 5.98402 17.6952 6.46932C17.8962 6.95463 17.9998 7.47469 17.9998 7.99997C17.9998 8.52526 17.8963 9.04543 17.6953 9.53073C17.4943 10.016 17.1996 10.457 16.8281 10.8285M19 3C19.6566 3.65661 20.1775 4.43612 20.5328 5.29402C20.8882 6.15192 21.071 7.07134 21.071 7.99993C21.071 8.92851 20.8881 9.84808 20.5327 10.706C20.1774 11.5639 19.6566 12.3435 19 13.0001M9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12Z"
                stroke="#0B0B0B"
                stroke-width="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 6L12.2286 12L19.9999 6M21 8.19995V15.8C21 16.9201 21.0002 17.4802 20.7822 17.908C20.5905 18.2844 20.2841 18.5902 19.9078 18.782C19.48 19 18.9203 19 17.8002 19H6.2002C5.08009 19 4.51962 19 4.0918 18.782C3.71547 18.5902 3.40973 18.2844 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.19995C3 7.07985 3 6.51986 3.21799 6.09204C3.40973 5.71572 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.48 5 19.9078 5.21799C20.2841 5.40973 20.5905 5.71572 20.7822 6.09204C21.0002 6.51986 21 7.07985 21 8.19995Z"
                stroke="#0B0B0B"
                stroke-width="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>

          <Dropdown
            trigger={["click"]}
            className="bg-primary "
            menu={{
              items: [
                {
                  label: "Item 1",
                  key: "1",
                },
                {
                  label: "Item 2",
                  key: "2",
                },
                {
                  label: "Item 3",
                  key: "3",
                },
                {
                  label: "Item 4",
                  key: "4",
                },
              ],
            }}
          >
            <Button className="flex items-center p-0 h-full text-white">
              <div className="px-[16px] text-[13px]">
                Move To Video Interview I
              </div>
              <div className="flex items-center justify-center border-l-[1px] p-[10px] h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_18_353)">
                    <path
                      d="M11.06 5.72665L8 8.77999L4.94 5.72665L4 6.66665L8 10.6667L12 6.66665L11.06 5.72665Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_18_353">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </Button>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
