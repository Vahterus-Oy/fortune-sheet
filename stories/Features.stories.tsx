import React, { useState, useCallback } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Sheet } from "@vahterus/fortune-sheet-core";
import { Workbook } from "@vahterus/fortune-sheet-react";
import cell from "./data/cell";
import formula from "./data/formula";
import empty from "./data/empty";
import freeze from "./data/freeze";
import dataVerification from "./data/dataVerification";
import lockcellData from "./data/protected";

export default {
  component: Workbook,
} as Meta<typeof Workbook>;

const Template: StoryFn<typeof Workbook> = ({
  // eslint-disable-next-line react/prop-types
  data: data0,
  ...args
}) => {
  const [data, setData] = useState<Sheet[]>(data0);
  const [collapsed, setCollapsed] = useState(true);
  const onChange = useCallback((d: Sheet[]) => {
    setData(d);
    console.log("onchange", d[0]);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "grid",
        gridTemplateColumns: collapsed ? "60px auto" : "240px auto",
        alignItems: "start",
        gap: "16px", // optional, for spacing
        padding: "16px", // optional, for nicer layout
      }}
    >
      {collapsed ? (
        <div style={{ width: "60px", height: "300px" }}>
          <button
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            type="button"
          >
            Click
          </button>
        </div>
      ) : (
        <div style={{ width: "240px", height: "300px" }}>
          <button
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            type="button"
          >
            Click
          </button>
        </div>
      )}
      <div style={{ width: "100%", height: "100vh" }}>
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "grid",
            gridTemplateColumns: "1fr 200px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100vh",
            }}
          >
            <Workbook
              {...args}
              data={data}
              onChange={onChange}
              helpLink="https://docs.vahterus.cloud/doc/data-sheet-editor-LHvgPK5pxm"
              cellContextMenu={[
                "locked",
                "locked-open",
                "hide-cell",
                "unhide-cell",
                "|",
                "number-decrease",
                "number-increase",
              ]}
              headerContextMenu={["hide-row", "|", "insert-row", "delete-row"]}
              toolbarItems={[
                "bold",
                "italic",
                "|",
                "number-decrease",
                "number-increase",
                "|",
                "hide",
                "|",
                "locked",
                "locked-open",
                "|",
                "insert-row",
                "|",
                "help",
              ]}
            />
          </div>
          <div style={{ width: "200px" }} />
        </div>
      </div>
    </div>
  );
};

// export const Basic = Template.bind({});
// @ts-ignore
// Basic.args = { data: [cell] };

export const Formula = Template.bind({});
// @ts-ignore
Formula.args = { data: [formula] };

export const Empty = Template.bind({});
Empty.args = { data: [empty] };

export const Tabs = Template.bind({});
// @ts-ignore
Tabs.args = { data: [cell, formula] };

export const Freeze = Template.bind({});
// @ts-ignore
Freeze.args = { data: [freeze] };

export const DataVerification = Template.bind({});
// @ts-ignore
DataVerification.args = { data: [dataVerification] };

export const ProtectedSheet = Template.bind({});
// @ts-ignore
ProtectedSheet.args = {
  data: lockcellData,
};

export const MultiInstance: StoryFn<typeof Workbook> = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "inline-block",
          width: "50%",
          height: "100%",
          paddingRight: "12px",
          boxSizing: "border-box",
        }}
      >
        <Workbook data={[empty]} />
      </div>
      <div
        style={{
          display: "inline-block",
          width: "50%",
          height: "100%",
          paddingLeft: "12px",
          boxSizing: "border-box",
        }}
      >
        <Workbook data={[empty]} />
      </div>
    </div>
  );
};
