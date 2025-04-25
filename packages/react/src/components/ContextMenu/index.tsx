import {
  locale,
  handleCopy,
  handlePasteByClick,
  deleteRowCol,
  insertRowCol,
  removeActiveImage,
  deleteSelectedCellText,
  sortSelection,
  createFilter,
  showImgChooser,
  handleLink,
  hideSelected,
  showSelected,
  getSheetIndex,
  api,
  isAllowEdit,
  jfrefreshgrid,
  handleLockedCell,
  handleUnlockedCell,
  handleNumberDecrease,
  handleNumberIncrease,
} from "@vahterus/fortune-sheet-core";
import _ from "lodash";
import React, { useContext, useRef, useCallback, useLayoutEffect } from "react";
import regeneratorRuntime from "regenerator-runtime";
import WorkbookContext, { SetContextOptions } from "../../context";
import { useAlert } from "../../hooks/useAlert";
import { useDialog } from "../../hooks/useDialog";
import Divider from "./Divider";
import "./index.css";
import Menu from "./Menu";
import CustomSort from "../CustomSort";

const ContextMenu: React.FC = () => {
  const { showDialog } = useDialog();
  const containerRef = useRef<HTMLDivElement>(null);
  const { context, setContext, settings, refs } = useContext(WorkbookContext);
  const { contextMenu } = context;
  const { showAlert } = useAlert();
  const { rightclick, drag, generalDialog, info } = locale(context);
  const getMenuElement = useCallback(
    (name: string, i: number) => {
      const selection = context.luckysheet_select_save?.[0];
      if (name === "|") {
        return <Divider key={`divider-${i}`} />;
      }
      if (name === "copy") {
        return (
          <Menu
            key={name}
            onClick={() => {
              setContext((draftCtx) => {
                if (draftCtx.luckysheet_select_save?.length! > 1) {
                  showAlert(rightclick.noMulti, "ok");
                  draftCtx.contextMenu = {};
                  return;
                }
                handleCopy(draftCtx);
                draftCtx.contextMenu = {};
              });
            }}
          >
            {rightclick.copy}
          </Menu>
        );
      }
      if (name === "paste" && regeneratorRuntime) {
        return (
          <Menu
            key={name}
            onClick={async () => {
              let clipboardText = "";
              const sessionClipboardText =
                sessionStorage.getItem("localClipboard") || "";

              try {
                clipboardText = await navigator.clipboard.readText();
              } catch (err) {
                console.warn(
                  "Clipboard access blocked. Attempting to use sessionStorage fallback."
                );
              }

              const finalText = clipboardText || sessionClipboardText;

              setContext((draftCtx) => {
                handlePasteByClick(draftCtx, finalText);
                draftCtx.contextMenu = {};
              });
            }}
          >
            {rightclick.paste}
          </Menu>
        );
      }
      if (name === "insert-column") {
        return selection?.row_select
          ? null
          : ["left", "right"].map((dir) => (
              <Menu
                key={`add-col-${dir}`}
                onClick={(e) => {
                  const position =
                    context.luckysheet_select_save?.[0]?.column?.[0];
                  if (position == null) return;
                  const countStr = (e.target as HTMLDivElement).querySelector(
                    "input"
                  )?.value;
                  if (countStr == null) return;
                  const count = parseInt(countStr, 10);
                  if (count < 1) return;
                  const direction = dir === "left" ? "lefttop" : "rightbottom";
                  const insertRowColOp: SetContextOptions["insertRowColOp"] = {
                    type: "column",
                    index: position,
                    count,
                    direction,
                    id: context.currentSheetId,
                  };
                  setContext(
                    (draftCtx) => {
                      try {
                        insertRowCol(draftCtx, insertRowColOp);
                        draftCtx.contextMenu = {};
                      } catch (err: any) {
                        if (err.message === "maxExceeded")
                          showAlert(rightclick.columnOverLimit, "ok");
                        else if (err.message === "readOnly")
                          showAlert(
                            rightclick.cannotInsertOnColumnReadOnly,
                            "ok"
                          );
                        draftCtx.contextMenu = {};
                      }
                    },
                    {
                      insertRowColOp,
                    }
                  );
                }}
              >
                <>
                  {_.startsWith(context.lang ?? "", "zh") && (
                    <>
                      {rightclick.to}
                      <span className={`luckysheet-cols-rows-shift-${dir}`}>
                        {(rightclick as any)[dir]}
                      </span>
                    </>
                  )}
                  {`${rightclick.insert}  `}
                  <input
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    tabIndex={0}
                    type="text"
                    className="luckysheet-mousedown-cancel"
                    placeholder={rightclick.number}
                    defaultValue="1"
                  />
                  <span className="luckysheet-cols-rows-shift-word luckysheet-mousedown-cancel">
                    {`${rightclick.column}  `}
                  </span>
                  {!_.startsWith(context.lang ?? "", "zh") && (
                    <span className={`luckysheet-cols-rows-shift-${dir}`}>
                      {(rightclick as any)[dir]}
                    </span>
                  )}
                </>
              </Menu>
            ));
      }
      if (name === "insert-row") {
        return selection?.column_select
          ? null
          : ["top", "bottom"].map((dir) => (
              <Menu
                key={`add-row-${dir}`}
                onClick={() => {
                  const position =
                    context.luckysheet_select_save?.[0]?.row?.[0];
                  if (position == null) return;
                  const direction = dir === "top" ? "lefttop" : "rightbottom";
                  const insertRowColOp: SetContextOptions["insertRowColOp"] = {
                    type: "row",
                    index: position,
                    count: 1,
                    direction,
                    id: context.currentSheetId,
                  };
                  setContext(
                    (draftCtx) => {
                      try {
                        insertRowCol(draftCtx, insertRowColOp);
                        draftCtx.contextMenu = {};
                      } catch (err: any) {
                        if (err.message === "maxExceeded")
                          showAlert(rightclick.rowOverLimit, "ok");
                        else if (err.message === "readOnly")
                          showAlert(rightclick.cannotInsertOnRowReadOnly, "ok");
                        draftCtx.contextMenu = {};
                      }
                    },
                    { insertRowColOp }
                  );
                }}
              >
                <>
                  <div className="menuElement">
                    <div>
                      {/* {_.startsWith(context.lang ?? "", "zh") && (
                        <>
                          {rightclick.to}
                          <span className={`luckysheet-cols-rows-shift-${dir}`}>
                            {(rightclick as any)[dir]}
                          </span>
                        </>
                      )} */}
                      {`${rightclick.insert} 1 `}
                      <span className="luckysheet-cols-rows-shift-word luckysheet-mousedown-cancel">
                        row {dir === "top" ? "above" : "below"}
                      </span>
                    </div>
                    {dir === "top" ? (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2"
                          y="8.66675"
                          width="12"
                          height="5.33333"
                          rx="1"
                          stroke="black"
                          strokeWidth="1.25"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 2V6"
                          stroke="black"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 4L6 4"
                          stroke="black"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="14"
                          y="7.33325"
                          width="12"
                          height="5.33333"
                          rx="1"
                          transform="rotate(-180 14 7.33325)"
                          stroke="black"
                          strokeWidth="1.25"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 14L8 10"
                          stroke="black"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 12L10 12"
                          stroke="black"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  {/* {!_.startsWith(context.lang ?? "", "zh") && (
                    <span className={`luckysheet-cols-rows-shift-${dir}`}>
                      {(rightclick as any)[dir]}
                    </span>
                  )} */}
                </>
              </Menu>
            ));
      }
      if (name === "delete-column") {
        return (
          selection?.column_select && (
            <Menu
              key="delete-col"
              onClick={() => {
                if (!selection) return;
                const [st_index, ed_index] = selection.column;
                const deleteRowColOp: SetContextOptions["deleteRowColOp"] = {
                  type: "column",
                  start: st_index,
                  end: ed_index,
                  id: context.currentSheetId,
                };
                setContext(
                  (draftCtx) => {
                    if (draftCtx.luckysheet_select_save?.length! > 1) {
                      showAlert(rightclick.noMulti, "ok");
                      draftCtx.contextMenu = {};
                      draftCtx.dataVerificationDropDownList = false;
                      return;
                    }
                    const slen = ed_index - st_index + 1;
                    const index = getSheetIndex(
                      draftCtx,
                      context.currentSheetId
                    ) as number;
                    if (
                      draftCtx.luckysheetfile[index].data?.[0]?.length! <= slen
                    ) {
                      showAlert(rightclick.cannotDeleteAllColumn, "ok");
                      draftCtx.contextMenu = {};
                      return;
                    }
                    try {
                      deleteRowCol(draftCtx, deleteRowColOp);
                    } catch (e: any) {
                      if (e.message === "readOnly") {
                        showAlert(rightclick.cannotDeleteColumnReadOnly, "ok");
                      }
                    }
                    draftCtx.contextMenu = {};
                  },
                  { deleteRowColOp }
                );
              }}
            >
              {rightclick.deleteSelected}
              {rightclick.column}
            </Menu>
          )
        );
      }
      if (name === "delete-row") {
        const rowRangeAllowed = (() => {
          if (!selection?.row_select || !selection.row) return false;

          const [st_index, ed_index] = selection.row;
          const sheetIndex = getSheetIndex(context, context.currentSheetId);
          if (sheetIndex == null) return false;

          const addedRow =
            context.luckysheetfile[sheetIndex]?.config?.addedRow || {};

          // eslint-disable-next-line no-plusplus
          for (let r = st_index; r <= ed_index; r++) {
            if (!Object.prototype.hasOwnProperty.call(addedRow, r.toString())) {
              return false;
            }
          }

          return true;
        })();
        return (
          rowRangeAllowed && (
            <Menu
              key="delete-row"
              onClick={() => {
                if (!selection) return;
                const [st_index, ed_index] = selection.row;
                const deleteRowColOp: SetContextOptions["deleteRowColOp"] = {
                  type: "row",
                  start: st_index,
                  end: ed_index,
                  id: context.currentSheetId,
                };
                setContext(
                  (draftCtx) => {
                    if (draftCtx.luckysheet_select_save?.length! > 1) {
                      showAlert(rightclick.noMulti, "ok");
                      draftCtx.contextMenu = {};
                      return;
                    }
                    const slen = ed_index - st_index + 1;
                    const index = getSheetIndex(
                      draftCtx,
                      context.currentSheetId
                    ) as number;
                    if (draftCtx.luckysheetfile[index].data?.length! <= slen) {
                      showAlert(rightclick.cannotDeleteAllRow, "ok");
                      draftCtx.contextMenu = {};
                      return;
                    }
                    try {
                      deleteRowCol(draftCtx, deleteRowColOp);
                    } catch (e: any) {
                      if (e.message === "readOnly") {
                        showAlert(rightclick.cannotDeleteRowReadOnly, "ok");
                      }
                    }
                    draftCtx.contextMenu = {};
                  },
                  { deleteRowColOp }
                );
              }}
            >
              <div className="menuElement">
                Delete row
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.95833 2.66659C5.95833 2.53652 6.02966 2.35414 6.19194 2.19186C6.35423 2.02958 6.5366 1.95825 6.66667 1.95825H9.33333C9.4634 1.95825 9.64577 2.02958 9.80806 2.19186C9.97034 2.35414 10.0417 2.53652 10.0417 2.66659V3.37492H5.95833V2.66659ZM4.70833 3.37492V2.66659C4.70833 2.12998 4.97034 1.64569 5.30806 1.30798C5.64577 0.970261 6.13006 0.708252 6.66667 0.708252H9.33333C9.86994 0.708252 10.3542 0.970261 10.6919 1.30798C11.0297 1.64569 11.2917 2.12998 11.2917 2.66659V3.37492H12.5554C12.5882 3.36955 12.6218 3.36673 12.6561 3.36667C12.6912 3.36661 12.7255 3.36943 12.759 3.37492H14C14.3452 3.37492 14.625 3.65474 14.625 3.99992C14.625 4.3451 14.3452 4.62492 14 4.62492H13.2833L13.2987 13.3239C13.2997 13.8605 13.0385 14.3452 12.7014 14.6836C12.3643 15.0219 11.8805 15.2847 11.3439 15.2857L4.67721 15.2975C4.14061 15.2984 3.65586 15.0373 3.31755 14.7001C2.97923 14.363 2.71637 13.8792 2.71542 13.3426L2.7 4.62492H2C1.65482 4.62492 1.375 4.3451 1.375 3.99992C1.375 3.65474 1.65482 3.37492 2 3.37492H4.70833ZM10.6667 4.62492H5.33333H3.95L3.96542 13.3404C3.96565 13.4705 4.03729 13.6527 4.19986 13.8147C4.36244 13.9767 4.54494 14.0477 4.675 14.0475L11.3417 14.0357C11.4717 14.0354 11.654 13.9638 11.816 13.8012C11.978 13.6387 12.049 13.4562 12.0487 13.3261L12.0333 4.62492H10.6667ZM6.66667 6.70825C7.01184 6.70825 7.29167 6.98807 7.29167 7.33325V11.3333C7.29167 11.6784 7.01184 11.9583 6.66667 11.9583C6.32149 11.9583 6.04167 11.6784 6.04167 11.3333V7.33325C6.04167 6.98807 6.32149 6.70825 6.66667 6.70825ZM9.95833 7.33325C9.95833 6.98807 9.67851 6.70825 9.33333 6.70825C8.98815 6.70825 8.70833 6.98807 8.70833 7.33325V11.3333C8.70833 11.6784 8.98815 11.9583 9.33333 11.9583C9.67851 11.9583 9.95833 11.6784 9.95833 11.3333V7.33325Z"
                    fill="black"
                  />
                </svg>
              </div>
            </Menu>
          )
        );
      }
      if (name === "hide-row") {
        const selectedRows = selection?.row || [];
        const isAnyRowHidden = selectedRows.some(
          (rowIndex) => context.config.rowhidden?.[rowIndex] !== undefined
        );

        // Only show hide/show options based on current state
        let menuItems = [];
        if (selectedRows?.every((val) => val === selectedRows[0])) {
          if (isAnyRowHidden) {
            menuItems = ["showHide"];
          } else {
            menuItems = ["hideSelected"];
          }
        } else {
          menuItems = ["showHide", "hideSelected"];
        }
        return (
          selection?.row_select === true &&
          menuItems.map((item) => (
            <Menu
              key={item}
              onClick={() => {
                setContext((draftCtx) => {
                  let msg = "";
                  if (item === "hideSelected") {
                    msg = hideSelected(draftCtx, "row");
                  } else if (item === "showHide") {
                    showSelected(draftCtx, "row");
                  }
                  if (msg === "noMulti") {
                    showDialog(drag.noMulti);
                  }
                  draftCtx.contextMenu = {};
                });
              }}
            >
              {item === "hideSelected" ? (
                <div className="menuElement">
                  <div>Hide row</div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_6931_5484)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.890415 0.89131C1.13449 0.647233 1.53022 0.647233 1.7743 0.89131L15.1076 14.2246C15.3517 14.4687 15.3517 14.8644 15.1076 15.1085C14.8636 15.3526 14.4678 15.3526 14.2237 15.1085L11.5504 12.4352C10.7006 12.8703 9.77686 13.1462 8.82484 13.2477C7.71364 13.3661 6.58996 13.2441 5.53006 12.89C4.47017 12.5358 3.49884 11.9579 2.682 11.1953C1.86515 10.4327 1.22191 9.50329 0.795898 8.47018C0.793065 8.46331 0.790354 8.45639 0.787767 8.44942C0.680119 8.15942 0.680119 7.84042 0.787767 7.55042C0.790354 7.54345 0.793065 7.53653 0.795899 7.52966C1.33719 6.21699 2.22477 5.082 3.35722 4.242L0.890415 1.77519C0.646337 1.53112 0.646337 1.13539 0.890415 0.89131ZM9.35989 10.2447L10.6122 11.497C10.0033 11.7623 9.356 11.934 8.69238 12.0047C7.75945 12.1041 6.81604 12.0017 5.92618 11.7044C5.03632 11.4071 4.22082 10.9218 3.53502 10.2816C2.85353 9.64533 2.31596 8.87083 1.95827 8.01C1.95662 8.00338 1.95662 7.99646 1.95827 7.98984C2.43723 6.83716 3.23463 5.84865 4.25265 5.13743L5.75428 6.63906C5.50343 7.05282 5.36977 7.5314 5.37404 8.02282C5.38002 8.71108 5.65609 9.36947 6.14279 9.85616C6.62948 10.3429 7.28787 10.6189 7.97613 10.6249C8.46755 10.6292 8.94613 10.4955 9.35989 10.2447ZM8.42316 9.30793L6.69102 7.57579C6.64574 7.71536 6.6227 7.86253 6.62399 8.01196C6.62713 8.37248 6.77173 8.71735 7.02667 8.97228C7.28161 9.22722 7.62647 9.37182 7.98699 9.37496C8.13642 9.37626 8.28359 9.35321 8.42316 9.30793ZM7.2283 4.00453C8.64571 3.83562 10.0795 4.13525 11.3106 4.85767C12.5367 5.57713 13.4947 6.67654 14.0398 7.98915C14.0414 7.99577 14.0414 8.0027 14.0398 8.00933C13.817 8.54539 13.5238 9.04943 13.1679 9.50814C12.9563 9.78086 13.0058 10.1735 13.2785 10.3851C13.5513 10.5967 13.9439 10.5471 14.1555 10.2744C14.5837 9.72243 14.9357 9.11538 15.2021 8.46957C15.205 8.46268 15.2077 8.45574 15.2103 8.44876C15.3179 8.15876 15.3179 7.83976 15.2103 7.54976C15.2077 7.54283 15.205 7.53596 15.2022 7.52913C14.5543 5.95701 13.4098 4.64012 11.9432 3.77957C10.4767 2.91902 8.76881 2.5621 7.08038 2.76331C6.73763 2.80416 6.49288 3.11513 6.53373 3.45788C6.57458 3.80063 6.88554 4.04538 7.2283 4.00453Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6931_5484">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              ) : (
                <div className="menuElement">
                  <div>Unhide row </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.36051 5.064C5.43715 4.34342 6.70351 3.95874 7.99903 3.95874C9.29456 3.95874 10.5609 4.34342 11.6376 5.064C12.7093 5.7813 13.545 6.79929 14.0398 7.98993C14.0415 7.99654 14.0415 8.00345 14.0398 8.01007C13.545 9.2007 12.7093 10.2187 11.6376 10.936C10.5609 11.6566 9.29456 12.0413 7.99903 12.0413C6.70351 12.0413 5.43715 11.6566 4.36051 10.936C3.28878 10.2187 2.45308 9.2007 1.95827 8.01007C1.95662 8.00345 1.95662 7.99654 1.95827 7.98992C2.45308 6.79929 3.28878 5.7813 4.36051 5.064ZM7.99903 2.70874C6.45595 2.70874 4.94762 3.16692 3.66525 4.02519C2.38288 4.88347 1.38424 6.10318 0.795911 7.5297C0.793073 7.53659 0.790358 7.54352 0.787767 7.5505C0.680119 7.8405 0.680119 8.1595 0.787767 8.4495C0.790358 8.45647 0.793073 8.46341 0.795911 8.47029C1.38424 9.89681 2.38288 11.1165 3.66525 11.9748C4.94762 12.8331 6.45595 13.2913 7.99903 13.2913C9.54212 13.2913 11.0505 12.8331 12.3328 11.9748C13.6152 11.1165 14.6138 9.89681 15.2022 8.47029C15.205 8.46341 15.2077 8.45647 15.2103 8.4495C15.318 8.1595 15.318 7.8405 15.2103 7.5505C15.2077 7.54352 15.205 7.53659 15.2022 7.5297C14.6138 6.10318 13.6152 4.88347 12.3328 4.02519C11.0505 3.16692 9.54212 2.70874 7.99903 2.70874ZM6.62402 8C6.62402 7.24061 7.23963 6.625 7.99902 6.625C8.75842 6.625 9.37402 7.24061 9.37402 8C9.37402 8.75939 8.75842 9.375 7.99902 9.375C7.23963 9.375 6.62402 8.75939 6.62402 8ZM7.99902 5.375C6.54928 5.375 5.37402 6.55025 5.37402 8C5.37402 9.44975 6.54928 10.625 7.99902 10.625C9.44877 10.625 10.624 9.44975 10.624 8C10.624 6.55025 9.44877 5.375 7.99902 5.375Z"
                      fill="black"
                    />
                  </svg>
                </div>
              )}
            </Menu>
          ))
        );
      }
      if (name === "hide-column") {
        return (
          selection?.column_select === true &&
          ["hideSelected", "showHide"].map((item) => (
            <Menu
              key={item}
              onClick={() => {
                setContext((draftCtx) => {
                  let msg = "";
                  if (item === "hideSelected") {
                    msg = hideSelected(draftCtx, "column");
                  } else if (item === "showHide") {
                    showSelected(draftCtx, "column");
                  }
                  if (msg === "noMulti") {
                    showDialog(drag.noMulti);
                  }
                  draftCtx.contextMenu = {};
                });
              }}
            >
              {(rightclick as any)[item] + rightclick.column}
            </Menu>
          ))
        );
      }
      if (name === "set-row-height") {
        const rowHeight = selection?.height || context.defaultrowlen;
        const shownRowHeight = context.luckysheet_select_save?.some(
          (section) =>
            section.height_move !==
            (rowHeight + 1) * (section.row[1] - section.row[0] + 1) - 1
        )
          ? ""
          : rowHeight;
        return context.luckysheet_select_save?.some(
          (section) => section.row_select
        ) ? (
          <Menu
            key="set-row-height"
            onClick={(e, container) => {
              const targetRowHeight = container.querySelector("input")?.value;
              setContext((draftCtx) => {
                if (
                  _.isUndefined(targetRowHeight) ||
                  targetRowHeight === "" ||
                  parseInt(targetRowHeight, 10) <= 0 ||
                  parseInt(targetRowHeight, 10) > 545
                ) {
                  showAlert(info.tipRowHeightLimit, "ok");
                  draftCtx.contextMenu = {};
                  return;
                }
                const numRowHeight = parseInt(targetRowHeight, 10);
                const rowHeightList: Record<string, number> = {};
                _.forEach(draftCtx.luckysheet_select_save, (section) => {
                  for (
                    let rowNum = section.row[0];
                    rowNum <= section.row[1];
                    rowNum += 1
                  ) {
                    rowHeightList[rowNum] = numRowHeight;
                  }
                });
                api.setRowHeight(draftCtx, rowHeightList, {}, true);
                draftCtx.contextMenu = {};
              });
            }}
          >
            {rightclick.row}
            {rightclick.height}
            <input
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
              tabIndex={0}
              type="number"
              min={1}
              max={545}
              className="luckysheet-mousedown-cancel"
              placeholder={rightclick.number}
              defaultValue={shownRowHeight}
              style={{ width: "40px" }}
            />
            px
          </Menu>
        ) : null;
      }
      if (name === "set-column-width") {
        const colWidth = selection?.width || context.defaultcollen;
        const shownColWidth = context.luckysheet_select_save?.some(
          (section) =>
            section.width_move !==
            (colWidth + 1) * (section.column[1] - section.column[0] + 1) - 1
        )
          ? ""
          : colWidth;
        return context.luckysheet_select_save?.some(
          (section) => section.column_select
        ) ? (
          <Menu
            key="set-column-width"
            onClick={(e, container) => {
              const targetColWidth = container.querySelector("input")?.value;
              setContext((draftCtx) => {
                if (
                  _.isUndefined(targetColWidth) ||
                  targetColWidth === "" ||
                  parseInt(targetColWidth, 10) <= 0 ||
                  parseInt(targetColWidth, 10) > 2038
                ) {
                  showAlert(info.tipColumnWidthLimit, "ok");
                  draftCtx.contextMenu = {};
                  return;
                }
                const numColWidth = parseInt(targetColWidth, 10);
                const colWidthList: Record<string, number> = {};
                _.forEach(draftCtx.luckysheet_select_save, (section) => {
                  for (
                    let colNum = section.column[0];
                    colNum <= section.column[1];
                    colNum += 1
                  ) {
                    colWidthList[colNum] = numColWidth;
                  }
                });
                api.setColumnWidth(draftCtx, colWidthList, {}, true);
                draftCtx.contextMenu = {};
              });
            }}
          >
            {rightclick.column}
            {rightclick.width}
            <input
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
              tabIndex={0}
              type="number"
              min={1}
              max={545}
              className="luckysheet-mousedown-cancel"
              placeholder={rightclick.number}
              defaultValue={shownColWidth}
              style={{ width: "40px" }}
            />
            px
          </Menu>
        ) : null;
      }
      if (name === "clear") {
        return (
          <Menu
            key={name}
            onClick={() => {
              setContext((draftCtx) => {
                const allowEdit = isAllowEdit(draftCtx);
                if (!allowEdit) return;
                if (draftCtx.activeImg != null) {
                  removeActiveImage(draftCtx);
                } else {
                  const msg = deleteSelectedCellText(draftCtx);
                  if (msg === "partMC") {
                    showDialog(generalDialog.partiallyError, "ok");
                  } else if (msg === "allowEdit") {
                    showDialog(generalDialog.readOnlyError, "ok");
                  } else if (msg === "dataNullError") {
                    showDialog(generalDialog.dataNullError, "ok");
                  }
                }
                draftCtx.contextMenu = {};
                jfrefreshgrid(draftCtx, null, undefined);
              });
            }}
          >
            {rightclick.clearContent}
          </Menu>
        );
      }
      if (name === "orderAZ") {
        return (
          <Menu
            key={name}
            onClick={() => {
              setContext((draftCtx) => {
                sortSelection(draftCtx, true);
                draftCtx.contextMenu = {};
              });
            }}
          >
            {rightclick.orderAZ}
          </Menu>
        );
      }
      if (name === "orderZA") {
        return (
          <Menu
            key={name}
            onClick={() => {
              setContext((draftCtx) => {
                sortSelection(draftCtx, false);
                draftCtx.contextMenu = {};
              });
            }}
          >
            {rightclick.orderZA}
          </Menu>
        );
      }
      if (name === "sort") {
        return (
          <Menu
            key={name}
            onClick={() => {
              setContext((draftCtx) => {
                showDialog(<CustomSort />);
                draftCtx.contextMenu = {};
              });
            }}
          >
            {rightclick.sortSelection}
          </Menu>
        );
      }
      if (name === "filter") {
        return (
          <Menu
            key={name}
            onClick={() => {
              setContext((draftCtx) => {
                createFilter(draftCtx);
                draftCtx.contextMenu = {};
              });
            }}
          >
            {rightclick.filterSelection}
          </Menu>
        );
      }
      if (name === "image") {
        return (
          <Menu
            key={name}
            onClick={() => {
              setContext((draftCtx) => {
                showImgChooser();
                draftCtx.contextMenu = {};
              });
            }}
          >
            {rightclick.image}
          </Menu>
        );
      }
      if (name === "link") {
        return (
          <Menu
            key={name}
            onClick={() => {
              setContext((draftCtx) => {
                handleLink(draftCtx);
                draftCtx.contextMenu = {};
              });
            }}
          >
            {rightclick.link}
          </Menu>
        );
      }
      if (name === "locked") {
        if (!selection) return null;

        const sheetIndex = getSheetIndex(context, context.currentSheetId);
        if (sheetIndex === null) return null;

        // Check if any selected cell is unlocked
        const hasUnlockedCells = selection.row.some((r) =>
          selection.column.some((c) => {
            const cell = context.luckysheetfile[sheetIndex]?.data?.[r]?.[c];
            return cell?.locked === false || cell?.locked === undefined;
          })
        );

        // Only show lock option if there are unlocked cells
        if (hasUnlockedCells) {
          return (
            <Menu
              key="locked"
              onClick={() => {
                setContext((draftCtx) => {
                  handleLockedCell(draftCtx, refs.cellInput.current!);
                  draftCtx.contextMenu = {};
                });
              }}
            >
              <div className="menuElement">
                <div>{rightclick.lockedCell}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  id="locked"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
            </Menu>
          );
        }
      }

      if (name === "locked-open") {
        if (!selection) return null;

        const sheetIndex = getSheetIndex(context, context.currentSheetId);
        if (sheetIndex === null) return null;

        // Check if any selected cell is locked
        const hasLockedCells = selection.row.some((r) =>
          selection.column.some((c) => {
            const cell = context.luckysheetfile[sheetIndex]?.data?.[r]?.[c];
            return cell?.locked === true;
          })
        );

        // Only show unlock option if there are locked cells
        if (hasLockedCells) {
          return (
            <Menu
              key="unlocked"
              onClick={() => {
                setContext((draftCtx) => {
                  handleUnlockedCell(draftCtx, refs.cellInput.current!);
                  draftCtx.contextMenu = {};
                });
              }}
            >
              <div className="menuElement">
                <div>{rightclick.unlockedCell}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  id="locked-open"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                </svg>
              </div>
            </Menu>
          );
        }
      }

      if (name === "number-decrease") {
        if (!selection) return null;

        const sheetIndex = getSheetIndex(context, context.currentSheetId);
        if (sheetIndex === null) return null;

        return (
          <Menu
            key="number-decrease"
            onClick={() => {
              setContext((draftCtx) => {
                handleNumberDecrease(draftCtx, refs.cellInput.current!);
                draftCtx.contextMenu = {};
              });
            }}
          >
            <div className="menuElement">
              <div>Decrease decimal place</div>
              <svg
                id="number-decrease"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 18h9M15 15l-3 3 3 3M3 11h.01" />
                <rect width="5" height="8" x="7" y="3" rx="2.5" />
              </svg>
            </div>
          </Menu>
        );
      }

      if (name === "number-increase") {
        if (!selection) return null;

        const sheetIndex = getSheetIndex(context, context.currentSheetId);
        if (sheetIndex === null) return null;

        return (
          <Menu
            key="number-increase"
            onClick={() => {
              setContext((draftCtx) => {
                handleNumberIncrease(draftCtx, refs.cellInput.current!);
                draftCtx.contextMenu = {};
              });
            }}
          >
            <div className="menuElement">
              <div>Increase decimal place</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                id="number-increase"
              >
                <path d="M21 18h-9M18 21l3-3-3-3M3 11h.01" />
                <rect width="5" height="8" x="16" y="3" rx="2.5" />
                <rect width="5" height="8" x="7" y="3" rx="2.5" />
              </svg>
            </div>
          </Menu>
        );
      }
      return null;
    },
    [
      context,
      rightclick,
      setContext,
      showAlert,
      showDialog,
      drag.noMulti,
      info.tipRowHeightLimit,
      info.tipColumnWidthLimit,
      generalDialog.partiallyError,
      generalDialog.readOnlyError,
      generalDialog.dataNullError,
      refs.cellInput,
    ]
  );

  useLayoutEffect(() => {
    // re-position the context menu if it overflows the window
    if (!containerRef.current) {
      return;
    }
    const winH = window.innerHeight;
    const winW = window.innerWidth;
    const rect = containerRef.current.getBoundingClientRect();
    const workbookRect =
      refs.workbookContainer.current?.getBoundingClientRect();
    if (!workbookRect) {
      return;
    }
    const menuW = rect.width;
    const menuH = rect.height;
    let top = contextMenu.y || 0;
    let left = contextMenu.x || 0;

    let hasOverflow = false;
    if (workbookRect.left + left + menuW > winW) {
      left -= menuW;
      hasOverflow = true;
    }
    if (workbookRect.top + top + menuH > winH) {
      top -= menuH;
      hasOverflow = true;
    }
    if (top < 0) {
      top = 0;
      hasOverflow = true;
    }
    if (hasOverflow) {
      setContext((draftCtx) => {
        draftCtx.contextMenu.x = left;
        draftCtx.contextMenu.y = top;
      });
    }
  }, [contextMenu.x, contextMenu.y, refs.workbookContainer, setContext]);

  if (_.isEmpty(context.contextMenu)) return null;

  return (
    <div
      className="fortune-context-menu luckysheet-cols-menu"
      ref={containerRef}
      onContextMenu={(e) => e.stopPropagation()}
      style={{ left: contextMenu.x, top: contextMenu.y }}
    >
      {context.contextMenu.headerMenu
        ? settings.headerContextMenu.map((menu, i) => getMenuElement(menu, i))
        : settings.cellContextMenu.map((menu, i) => getMenuElement(menu, i))}
    </div>
  );
};

export default ContextMenu;
