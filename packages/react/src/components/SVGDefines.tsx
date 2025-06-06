/* eslint-disable react/no-unknown-property */
import React from "react";

const getPath = (currency: string) => {
  switch (currency) {
    case "$":
      return "M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z";
    case "€":
      return "M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0010.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z";
    case "£":
      return "M4 8.585h1.969c.115.465.186.939.186 1.43 0 1.385-.736 2.496-2.075 2.771V14H12v-1.24H6.492v-.129c.825-.525 1.135-1.446 1.135-2.694 0-.465-.07-.913-.168-1.352h3.29v-.972H7.22c-.186-.723-.372-1.455-.372-2.247 0-1.274 1.047-2.066 2.58-2.066a5.32 5.32 0 012.103.465V2.456A5.629 5.629 0 009.348 2C6.865 2 5.322 3.291 5.322 5.366c0 .775.195 1.515.399 2.247H4v.972z";
    case "₹":
      return "M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06z";
    default:
      return "M8.75 14v-2.629h2.446v-.967H8.75v-1.31h2.445v-.967H9.128L12.5 2h-1.699L8.047 7.327h-.086L5.207 2H3.5l3.363 6.127H4.778v.968H7.25v1.31H4.78v.966h2.47V14h1.502z";
  }
};

const SVGDefines: React.FC<{ currency: string }> = ({ currency }) => (
  <svg
    style={{ position: "absolute", width: 0, height: 0 }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <symbol viewBox="0 0 24 24" fill="none" id="add">
        <rect
          x="4.75"
          y="4.75"
          width="14.5"
          height="14.5"
          rx="0.75"
          stroke="#424A59"
          strokeOpacity="0.9"
          strokeWidth="1.5"
        />
        <rect x="11.25" y="8.5" width="1.5" height="7" fill="#535B68" />
        <rect
          x="15.5"
          y="11.25"
          width="1.5"
          height="7"
          transform="rotate(90 15.5 11.25)"
          fill="#535B68"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="align-bottom">
        <path d="M9.25 12.5L12.0002 15.5L14.75 12.5H9.25Z" fill="#525C6F" />
        <rect x="5.5" y="16.5" width="13" height="1.5" fill="#525C6F" />
        <rect x="11.25" y="5.5" width="1.5" height="7.5" fill="#525C6F" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="align-center">
        <path d="M5 6.75H19" stroke="#525C6F" strokeWidth="1.5" />
        <path d="M8 12H16" stroke="#525C6F" strokeWidth="1.5" />
        <path d="M5 17.25L19 17.25" stroke="#525C6F" strokeWidth="1.5" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="align-justify">
        <path
          d="M19.5 6.5H4.5"
          stroke="#525C6F"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M19.5 12L4.5 12"
          stroke="#525C6F"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M19.5 17.5H4.5"
          stroke="#525C6F"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="align-left">
        <path d="M5 6.75H19" stroke="#525C6F" strokeWidth="1.5" />
        <path d="M5 12H13" stroke="#525C6F" strokeWidth="1.5" />
        <path d="M5 17.25L19 17.25" stroke="#525C6F" strokeWidth="1.5" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="align-middle">
        <path d="M9.25 16.5L12.0002 13.5L14.75 16.5H9.25Z" fill="#525C6F" />
        <path d="M9.25 7L12.0002 10L14.75 7L9.25 7Z" fill="#525C6F" />
        <rect x="5.5" y="11" width="13" height="1.5" fill="#525C6F" />
        <rect x="11.25" y="16" width="1.5" height="3.5" fill="#525C6F" />
        <rect x="11.25" y="4" width="1.5" height="3.5" fill="#525C6F" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="align-right">
        <path d="M5 6.75H19" stroke="#525C6F" strokeWidth="1.5" />
        <path d="M11 12H19" stroke="#525C6F" strokeWidth="1.5" />
        <path d="M5 17.25L19 17.25" stroke="#525C6F" strokeWidth="1.5" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="align-top">
        <path d="M9.25 11L12.0002 8L14.75 11H9.25Z" fill="#525C6F" />
        <rect x="5.5" y="5.5" width="13" height="1.5" fill="#525C6F" />
        <rect x="11.25" y="10.5" width="1.5" height="7.5" fill="#525C6F" />
      </symbol>
      <symbol
        viewBox="0 0 24 24"
        fill="none"
        id="bold"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-all">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#535A68"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-bottom">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="5"
          y1="18.25"
          x2="19"
          y2="18.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-color">
        <path
          d="M16 10.9106L18.9511 13.8617L14.5431 18.2697H11.592V15.3186L16 10.9106Z"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.5 6.5H17.5V9.84613H19V6.5V5H17.5H6.5H5V6.5V17.5V19H6.5H9.84616V17.5H6.5V6.5Z"
          fill="#535A68"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-horizontal">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />

        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="5"
          y1="18.25"
          x2="19"
          y2="18.25"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#535A68"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border_diagonal_down">
        <line
          x1="17.9697"
          y1="18.0303"
          x2="5.96967"
          y2="6.03033"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border_diagonal_up">
        <line
          y1="-0.75"
          x2="16.9706"
          y2="-0.75"
          transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 5.5 17.5)"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-inside">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#535A68"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-left">
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="5.75"
          y1="19"
          x2="5.75"
          y2="5"
          stroke="#535A68"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-none">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-outside">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-right">
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="18.25"
          y1="19"
          x2="18.25"
          y2="5"
          stroke="#535A68"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-vertical">
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="18.25"
          y1="19"
          x2="18.25"
          y2="5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-slash">
        <line
          x1="5.75"
          y1="5.75"
          x2="17.95"
          y2="17.95"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-style">
        <line
          x1="5"
          y1="5.75"
          x2="19"
          y2="5.75"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="5"
          y1="12.25"
          x2="7.5"
          y2="12.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="8.8252"
          y1="12.25"
          x2="11.3252"
          y2="12.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="12.6504"
          y1="12.25"
          x2="15.1504"
          y2="12.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="16.4746"
          y1="12.25"
          x2="18.9746"
          y2="12.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="5"
          y1="18.25"
          x2="6.5"
          y2="18.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="7.08008"
          y1="18.25"
          x2="8.58008"
          y2="18.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="9.16016"
          y1="18.25"
          x2="10.6602"
          y2="18.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="11.2402"
          y1="18.25"
          x2="12.7402"
          y2="18.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="13.3203"
          y1="18.25"
          x2="14.8203"
          y2="18.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="15.4004"
          y1="18.25"
          x2="16.9004"
          y2="18.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="17.4805"
          y1="18.25"
          x2="18.9805"
          y2="18.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-top">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="5"
          y1="5.75"
          x2="19"
          y2="5.75"
          stroke="#535A68"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 18 18" fill="none" id="close">
        <path
          d="M13.9255 5L5.00091 13.9246"
          stroke="#262A33"
          strokeOpacity="0.9"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M13.9255 13.9238L5.00091 4.9992"
          stroke="#262A33"
          strokeOpacity="0.9"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </symbol>
      <symbol viewBox="0 0 10 24" fill="none" id="combo-arrow">
        <path d="M8 10H2L5 14L8 10Z" fill="#A6A6A6" />
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="comment">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.968 15.7L12 17.956l2.032-2.258H18.5v-10h-13v10h4.468zm1.289 3.673L9.3 17.2H5.5A1.5 1.5 0 014 15.7v-10a1.5 1.5 0 011.5-1.5h13A1.5 1.5 0 0120 5.7v10a1.5 1.5 0 01-1.5 1.5h-3.8l-1.957 2.174a1 1 0 01-1.486 0z"
          fill="#525C6F"
        />
        <path d="M7 8.2h10v1.5H7V8.2zM7 11.699h6v1.5H7z" fill="#525C6F" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="strike-through">
        <rect x="6" y="11.5" width="13" height="1.5" fill="#394259" />
        <path
          d="M9.00344 11.5C9.69342 11.9717 10.6431 12.3814 11.8525 12.729C13.071 13.0815 13.9121 13.4403 14.376 13.8052C14.8398 14.1639 15.0718 14.6742 15.0718 15.3359C15.0718 15.9977 14.8213 16.5203 14.3203 16.9038C13.8193 17.2873 13.0988 17.479 12.1587 17.479C11.1506 17.479 10.3434 17.244 9.7373 16.7739C9.13737 16.2977 8.8374 15.6514 8.8374 14.835H7.04688C7.04688 15.6204 7.26335 16.3224 7.69629 16.9409C8.13542 17.5594 8.757 18.048 9.56104 18.4067C10.3651 18.7593 11.231 18.9355 12.1587 18.9355C13.5874 18.9355 14.7285 18.6077 15.582 17.9521C16.4355 17.2904 16.8623 16.4121 16.8623 15.3174C16.8623 14.6309 16.7077 14.034 16.3984 13.5269C16.0954 13.0197 15.6253 12.5775 14.9883 12.2002C14.581 11.9526 14.0705 11.7192 13.457 11.5H9.00344Z"
          fill="#394259"
        />
        <path
          d="M7.71685 10C7.5547 9.61466 7.47363 9.19458 7.47363 8.73975C7.47363 7.67594 7.8973 6.79769 8.74463 6.10498C9.59814 5.40609 10.7052 5.05664 12.0659 5.05664C12.9937 5.05664 13.8193 5.236 14.543 5.59473C15.2728 5.95345 15.8356 6.44824 16.2314 7.0791C16.6335 7.70996 16.8345 8.39958 16.8345 9.14795H15.0439C15.0439 8.33154 14.7842 7.69141 14.2646 7.22754C13.7451 6.75749 13.0122 6.52246 12.0659 6.52246C11.1877 6.52246 10.5011 6.71729 10.0063 7.10693C9.51774 7.4904 9.27344 8.02539 9.27344 8.71191C9.27344 9.2095 9.46296 9.63887 9.84201 10H7.71685Z"
          fill="#394259"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="clear-format">
        <line
          x1="8"
          y1="18.25"
          x2="20"
          y2="18.25"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 7.12132L17.8787 11L10 18.8787L6.12132 15L14 7.12132ZM14 5L15.0607 6.06066L18.9393 9.93934L20 11L18.9393 12.0607L12 19L8 19L5.06066 16.0607L4 15L5.06066 13.9393L12.9393 6.06066L14 5Z"
          fill="#525C6F"
        />
        <rect
          x="13.9375"
          y="6.12316"
          width="6.98528"
          height="5.7265"
          transform="rotate(45 13.9375 6.12316)"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="image">
        <circle cx="8.75" cy="8.75" r="1.25" fill="#525C6F" />
        <rect
          x="4.75"
          y="5.25"
          width="14.5"
          height="13.5"
          rx="0.75"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
        <path
          d="M7 19L12.984 11.8949C13.1659 11.6789 13.4905 11.6563 13.7006 11.845L19.5 17.0556"
          stroke="#525C6F"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol
        viewBox="0 0 24 24"
        fill="none"
        id="italic"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="19" x2="10" y1="4" y2="4" />
        <line x1="14" x2="5" y1="20" y2="20" />
        <line x1="15" x2="9" y1="4" y2="20" />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="eye"
      >
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
        <circle cx="12" cy="12" r="3" />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="eye-off"
      >
        <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
        <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
        <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
        <path d="m2 2 20 20" />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="locked"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="locked-open"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 9.9-1" />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="insert-row-top"
      >
        <rect width="18" height="8" x="3" y="13" rx="1" />
        <path d="M12 3v6M15 6H9" />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="insert-row-bottom"
      >
        <rect
          width="18"
          height="8"
          x="21"
          y="11"
          transform="rotate(-180 21 11)"
        />
        <path d="M12 21v-6M9 18h6" />
      </symbol>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="unhide-row"
      >
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
        <circle cx="12" cy="12" r="3" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="hide-row"
      >
        <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
        <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
        <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
        <path d="m2 2 20 20" />
      </svg>

      <symbol viewBox="0 0 24 24" fill="none" id="merge-cancel">
        <path d="M13 14.9998L16.5 11.9996L13 8.99982V14.9998Z" fill="#525C6F" />
        <path
          d="M11 14.9998L7.5 11.9996L11 8.99982L11 14.9998Z"
          fill="#525C6F"
        />
        <rect x="10" y="11.2498" width="4.5" height="1.5" fill="#525C6F" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 6.49982H6.5L6.5 17.4998H9.5V15.4999H11V17.4998V18.9998H9.5H6.5H5V17.4998L5 6.49982V4.99982H6.5H9.5L11 4.99982V6.49982V8.49988H9.5V6.49982ZM13 15.4999V15.9998V17.4998V18.9998H14.5H17.5H19V17.4998V6.49982V4.99982H17.5H14.5H13V6.49982V7.99982V8.49988H14.5V7.99982V6.49982H17.5V17.4998H14.5L14.5 15.9998V15.4999H13Z"
          fill="#525C6F"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="merge-horizontal">
        <path d="M11 15L14.5 11.9998L11 9V15Z" fill="#525C6F" />
        <rect x="5" y="11.25" width="8.5" height="1.5" fill="#525C6F" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.5 6.5H7.5H9.5H11V5H9.5H6.5H5V6.5V17.5V19H6.5H9.5H11V17.5H9.5H7.5H6.5V6.5ZM13 16V15.5H14.5V16V17.5H17.5V6.5H14.5V8V8.5H13V8V6.5V5H14.5H17.5H19V6.5V17.5V19H17.5H14.5H13V17.5V16Z"
          fill="#525C6F"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="merge-vertical">
        <path
          d="M9 10.9998L12.0002 14.4998L15 10.9998L9 10.9998Z"
          fill="#525C6F"
        />
        <rect
          x="12.75"
          y="4.99982"
          width="8.5"
          height="1.5"
          transform="rotate(90 12.75 4.99982)"
          fill="#525C6F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5 6.49982L17.5 7L17.5 10.9998H19V9.49982V6.49982V4.99982H17.5L6.5 4.99982H5V6.49982L5 9.49982V10.9998H6.5V9.49982L6.5 7L6.5 6.49982L17.5 6.49982ZM8 12.9998L8.5 12.9998V14.4998H8H6.5V17.4998H17.5V14.4998H16H15.5V12.9998H16H17.5H19L19 14.4998V17.4998V18.9998H17.5H6.5L5 18.9998L5 17.4998V14.4998V12.9998H6.5H8Z"
          fill="#525C6F"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="merge-all">
        <path
          d="M15.5 14.9998L12 11.9996L15.5 8.99982V14.9998Z"
          fill="#525C6F"
        />
        <path
          d="M8.5 14.9998L12 11.9996L8.5 8.99982L8.5 14.9998Z"
          fill="#525C6F"
        />
        <rect x="7" y="11.2498" width="2.5" height="1.5" fill="#525C6F" />
        <rect x="14.5" y="11.2498" width="2.5" height="1.5" fill="#525C6F" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 6.49982H6.5L6.5 17.4998H9.5V15.4999H11V17.4998V18.9998H9.5H6.5H5V17.4998L5 6.49982V4.99982H6.5H9.5L11 4.99982V6.49982V8.49988H9.5V6.49982ZM13 15.4999V15.9998V17.4998V18.9998H14.5H17.5H19V17.4998V6.49982V4.99982H17.5H14.5H13V6.49982V7.99982V8.49988H14.5V7.99982V6.49982H17.5V17.4998H14.5L14.5 15.9998V15.4999H13Z"
          fill="#525C6F"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 16 16" id="plus">
        <path
          d="M8 1.715v12.571M1.714 8h12.572"
          stroke="#666"
          strokeWidth="1.714"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" version="1.1" p-id="4116" id="minus">
        <path
          d="M801.895 542.105h-579.79C205.479 542.105 192 528.627 192 512c0-16.627 13.479-30.105 30.105-30.105h579.789C818.521 481.895 832 495.373 832 512c0 16.627-13.479 30.105-30.105 30.105z"
          p-id="4117"
        />
      </symbol>
      <symbol viewBox="-100 -100 1224 1224" fill="#525C6F" id="background">
        <path d="M766.4 744.3c43.7 0 79.4-36.2 79.4-80.5 0-53.5-79.4-140.8-79.4-140.8S687 610.3 687 663.8c0 44.3 35.7 80.5 79.4 80.5zM389.3 700.2c7.1 7.1 18.6 7.1 25.6 0l256.1-256c7.1-7.1 7.1-18.6 0-25.6l-256-256c-0.6-0.6-1.3-1.2-2-1.7l-78.2-78.2c-3.5-3.5-9.3-3.5-12.8 0l-48 48c-3.5 3.5-3.5 9.3 0 12.8l67.2 67.2-207.8 207.9c-7.1 7.1-7.1 18.6 0 25.6l255.9 256z m12.9-448.6l178.9 178.9H223.4l178.8-178.9zM904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8z" />
      </symbol>
      <symbol viewBox="-100 -100 1224 1224" fill="#525C6F" id="font-color">
        <path d="M904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zM253.7 736h85c4.2 0 8-2.7 9.3-6.8l53.7-166h219.2l53.2 166c1.3 4 5 6.8 9.3 6.8h89.1c1.1 0 2.2-0.2 3.2-0.5 5.1-1.8 7.8-7.3 6-12.4L573.6 118.6c-1.4-3.9-5.1-6.6-9.2-6.6H462.1c-4.2 0-7.9 2.6-9.2 6.6L244.5 723.1c-0.4 1-0.5 2.1-0.5 3.2-0.1 5.3 4.3 9.7 9.7 9.7z m255.9-516.1h4.1l83.8 263.8H424.9l84.7-263.8z" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="text-overflow">
        <path d="M16.5 15L20 11.9998L16.5 9V15Z" fill="#525C6F" />
        <rect x="7" y="11.25" width="9.5" height="1.5" fill="#525C6F" />
        <line
          x1="4.75"
          y1="5"
          x2="4.75"
          y2="19"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
        <line
          x1="12.25"
          y1="5"
          x2="12.25"
          y2="9.5"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
        <line
          x1="12.25"
          y1="14.5"
          x2="12.25"
          y2="19"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="text-wrap">
        <line
          x1="4.75"
          y1="5"
          x2="4.75"
          y2="19"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
        <line
          x1="19.25"
          y1="5"
          x2="19.25"
          y2="19"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.00001 16.2502L9.99 13.5V15.5H12.0005C13.9335 15.5 15.5005 13.933 15.5005 12C15.5005 10.067 13.9335 8.5 12.0005 8.5H7V7H12.0005C14.7619 7 17.0005 9.23857 17.0005 12C17.0005 14.7614 14.7619 17 12.0005 17H9.99V19L7.00001 16.2502Z"
          fill="#525C6F"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="underline">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 19H7V17.5H17V19Z"
          fill="#394259"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.25 5V12.25C9.25 13.7688 10.4812 15 12 15C13.5188 15 14.75 13.7688 14.75 12.25V5H16.25V12.25C16.25 14.5972 14.3472 16.5 12 16.5C9.65278 16.5 7.75 14.5972 7.75 12.25V5H9.25Z"
          fill="#394259"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="undo">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5 7.75001L7.2019 10.835V8.5H13.25C15.4591 8.5 17.25 10.2909 17.25 12.5C17.25 14.7091 15.4591 16.5 13.25 16.5H7V18H13.25C16.2876 18 18.75 15.5376 18.75 12.5C18.75 9.46244 16.2876 7 13.25 7H7.2019V4.66547L3.5 7.75001Z"
          fill="#525C6F"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="redo">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.5 7.75001L16.7981 10.835V8.5H10.75C8.54086 8.5 6.75 10.2909 6.75 12.5C6.75 14.7091 8.54086 16.5 10.75 16.5H17V18H10.75C7.71243 18 5.25 15.5376 5.25 12.5C5.25 9.46244 7.71243 7 10.75 7H16.7981V4.66547L20.5 7.75001Z"
          fill="#525C6F"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" id="fx">
        <path d="M841 370c3-3.3 2.7-8.3-0.6-11.3-1.5-1.3-3.4-2.1-5.3-2.1h-72.6c-2.4 0-4.6 1-6.1 2.8L633.5 504.6c-2.9 3.4-7.9 3.8-11.3 0.9-0.9-0.8-1.6-1.7-2.1-2.8l-63.5-141.3c-1.3-2.9-4.1-4.7-7.3-4.7H380.7l0.9-4.7 8-42.3c10.5-55.4 38-81.4 85.8-81.4 18.6 0 35.5 1.7 48.8 4.7l14.1-66.8c-22.6-4.7-35.2-6.1-54.9-6.1-103.3 0-156.4 44.3-175.9 147.3l-9.4 49.4h-97.6c-3.8 0-7.1 2.7-7.8 6.4L181.9 415c-0.9 4.3 1.9 8.6 6.2 9.5 0.5 0.1 1.1 0.2 1.6 0.2H284l-89 429.9c-0.9 4.3 1.9 8.6 6.2 9.5 0.5 0.1 1.1 0.2 1.6 0.2H269c3.8 0 7.1-2.7 7.8-6.4l89.7-433.1h135.8l68.2 139.1c1.4 2.9 1 6.4-1.2 8.8l-180.6 203c-2.9 3.3-2.6 8.4 0.7 11.3 1.5 1.3 3.4 2 5.3 2h72.7c2.4 0 4.6-1 6.1-2.8l123.7-146.7c2.8-3.4 7.9-3.8 11.3-1 0.9 0.8 1.6 1.7 2.1 2.8L676.4 784c1.3 2.8 4.1 4.7 7.3 4.7h64.6c4.4 0 8-3.6 8-8 0-1.2-0.3-2.4-0.8-3.5l-95.2-198.9c-1.4-2.9-0.9-6.4 1.3-8.8L841 370z" />
      </symbol>
      <symbol viewBox="0 0 16 16" id="currency-format">
        <path fill="#525C6F" d={getPath(currency)} p-id="5490" />
      </symbol>
      <symbol viewBox="0 0 1024 1024" id="percentage-format">
        <path
          fill="#525C6F"
          d="M855.7 210.8l-42.4-42.4c-3.1-3.1-8.2-3.1-11.3 0L168.3 801.9c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.4c3.1 3.1 8.2 3.1 11.3 0L855.6 222c3.2-3 3.2-8.1 0.1-11.2zM304 448c79.4 0 144-64.6 144-144s-64.6-144-144-144-144 64.6-144 144 64.6 144 144 144z m0-216c39.7 0 72 32.3 72 72s-32.3 72-72 72-72-32.3-72-72 32.3-72 72-72zM720 576c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144-64.6-144-144-144z m0 216c-39.7 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72-32.3 72-72 72z"
          p-id="5920"
        />
      </symbol>
      <symbol
        id="number-decrease"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 18h9M15 15l-3 3 3 3M3 11h.01" />
        <rect width="5" height="8" x="7" y="3" rx="2.5" />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="number-increase"
      >
        <path d="M21 18h-9M18 21l3-3-3-3M3 11h.01" />
        <rect width="5" height="8" x="16" y="3" rx="2.5" />
        <rect width="5" height="8" x="7" y="3" rx="2.5" />
      </symbol>
      <symbol viewBox="0 0 24 24" id="format-painter">
        <path
          fill="#525C6F"
          d="M15.1004 6.5L6.90039 6.5V9.8L15.1004 9.8L15.1004 6.5ZM15.1004 5C15.9288 5 16.6004 5.67157 16.6004 6.5V9.8C16.6004 10.6284 15.9288 11.3 15.1004 11.3H6.90039C6.07196 11.3 5.40039 10.6284 5.40039 9.8V6.5C5.40039 5.67157 6.07196 5 6.90039 5H15.1004Z"
        />
        <path
          fill="#525C6F"
          d="M17.7174 8.90039H15.3262V7.40039H18.4674C18.8816 7.40039 19.2174 7.73618 19.2174 8.15039V13.7859C19.2174 14.163 18.9374 14.4814 18.5634 14.5297L10.8174 15.5299V19.0004H9.31738V14.8705C9.31738 14.4934 9.59736 14.175 9.97134 14.1267L17.7174 13.1265V8.90039Z"
        />
      </symbol>
      <symbol viewBox="0 0 1096 1096" id="formula-sum">
        <path
          fill="#525C6F"
          d="M725.333333 853.333333H256c-17.066667 0-29.866667-8.533333-38.4-25.6-8.533333-17.066667-4.266667-34.133333 4.266667-46.933333l230.4-268.8-230.4-268.8c-8.533333-12.8-12.8-34.133333-4.266667-46.933333 8.533333-17.066667 21.333333-25.6 38.4-25.6h469.333333c46.933333 0 85.333333 38.4 85.333334 85.333333v85.333333c0 25.6-17.066667 42.666667-42.666667 42.666667s-42.666667-17.066667-42.666667-42.666667V256H349.866667l196.266666 226.133333c12.8 17.066667 12.8 38.4 0 55.466667L349.866667 768H725.333333v-85.333333c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667v85.333333c0 46.933333-38.4 85.333333-85.333334 85.333333z"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" id="arrow-doubleleft">
        <path d="M272.9 512l265.4-339.1c4.1-5.2 0.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3c-9.1 11.6-9.1 27.9 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512z" />
        <path d="M576.9 512l265.4-339.1c4.1-5.2 0.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3c-9.1 11.6-9.1 27.9 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" />
      </symbol>
      <symbol viewBox="0 0 1024 1024" id="arrow-doubleright">
        <path d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1c-4.1 5.2-0.4 12.9 6.3 12.9h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" />
        <path d="M837.2 492.3L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1c-4.1 5.2-0.4 12.9 6.3 12.9h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="freeze-col">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
        <path
          d="M5.75 12H18.25M12 5.5V18.5"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
        <path d="M12 12L5.5 17.75" stroke="#525C6F" strokeWidth="1.5" />
        <path d="M11.25 6L5.75 11.5" stroke="#525C6F" strokeWidth="1.5" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="freeze-row">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
        <path
          d="M5.75 12H18.25M12 5.5V18.5"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
        <path d="M18 6.5L11.5 12.25" stroke="#525C6F" strokeWidth="1.5" />
        <path d="M11.25 6L5.75 11.5" stroke="#525C6F" strokeWidth="1.5" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="freeze-row-col">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
        <path
          d="M5.75 12H18.25M12 5.5V18.5"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
        <path d="M18 6L5.75 18.25" stroke="#525C6F" strokeWidth="1.5" />
        <path d="M11.25 6L5.75 11.5" stroke="#525C6F" strokeWidth="1.5" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="freeze-cancel">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#535A68"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="sort-desc">
        <path
          d="M839.6 433.8L749 150.5c-1.2-3.9-4.8-6.5-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-0.3 0.9-0.5 1.9-0.5 2.9 0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-0.1 2.8-0.4 2.4-0.8 4.3-2.4 5.5-4.6 1.1-2.2 1.3-4.7 0.6-7.1zM663.3 325.5l32.8-116.9h6.3l32.1 116.9h-71.2z"
          p-id="2016"
        />
        <path
          d="M806.8 818.4H677.2v-0.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v0.4L587.7 828.9c-1.1 1.6-1.7 3.4-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43c0.1-5.1-4.1-9.3-9.2-9.3z"
          p-id="2017"
        />
        <path
          d="M416 702h-76V172c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v530h-76c-6.7 0-10.5 7.8-6.3 13l112 141.9c3.2 4.1 9.4 4.1 12.6 0l112-141.9c4.1-5.2 0.4-13-6.3-13z"
          p-id="2018"
        />
      </symbol>
      <svg viewBox="0 0 1024 1024" fill="#535A68" id="sort-asc">
        <path
          d="M839.6 433.8L749 150.5c-1.2-3.9-4.8-6.5-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-0.3 0.9-0.5 1.9-0.5 2.9 0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-0.1 2.8-0.4 2.4-0.8 4.3-2.4 5.5-4.6 1.1-2.2 1.3-4.7 0.6-7.1zM663.3 325.5l32.8-116.9h6.3l32.1 116.9h-71.2z"
          p-id="2263"
        />
        <path
          d="M806.8 818.4H677.2v-0.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v0.4L587.7 828.9c-1.1 1.6-1.7 3.4-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43c0.1-5.1-4.1-9.3-9.2-9.3z"
          p-id="2264"
        />
        <path
          d="M310.3 167.1c-3.2-4.1-9.4-4.1-12.6 0L185.7 309c-4.2 5.3-0.4 13 6.3 13h76v530c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V322h76c6.7 0 10.5-7.8 6.3-13l-112-141.9z"
          p-id="2265"
        />
      </svg>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="more">
        <path d="M224 597.333333C183.466667 597.333333 149.333333 563.2 149.333333 522.666667S183.466667 448 224 448s74.666667 34.133333 74.666667 74.666667-32 74.666667-74.666667 74.666666zM512 597.333333c-40.533333 0-74.666667-34.133333-74.666667-74.666666S471.466667 448 512 448s74.666667 34.133333 74.666667 74.666667S554.666667 597.333333 512 597.333333zM800 597.333333c-40.533333 0-74.666667-34.133333-74.666667-74.666666s34.133333-74.666667 74.666667-74.666667 74.666667 34.133333 74.666667 74.666667-32 74.666667-74.666667 74.666666z" />
      </symbol>
      <symbol viewBox="0 0 1024 1024" width="24" height="24" id="text-clip">
        <path
          d="M217.6 810.666667h76.8a4.266667 4.266667 0 0 0 4.266667-4.266667V217.6a4.266667 4.266667 0 0 0-4.266667-4.266667H217.6a4.266667 4.266667 0 0 0-4.266667 4.266667v588.8a4.266667 4.266667 0 0 0 4.266667 4.266667zM725.333333 217.6v247.466667a4.266667 4.266667 0 0 1-4.266666 4.266666H388.266667a4.266667 4.266667 0 0 0-4.266667 4.266667v76.8a4.266667 4.266667 0 0 0 4.266667 4.266667h332.8a4.266667 4.266667 0 0 1 4.266666 4.266666v247.466667a4.266667 4.266667 0 0 0 4.266667 4.266667h76.8a4.266667 4.266667 0 0 0 4.266667-4.266667V217.6a4.266667 4.266667 0 0 0-4.266667-4.266667h-76.8a4.266667 4.266667 0 0 0-4.266667 4.266667z"
          p-id="13371"
          fill="#525C6F"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="text-rotation-none">
        <path
          d="M657.066667 620.088889c24.177778 0 39.822222-24.177778 31.288889-46.933333L509.155556 150.755556c-14.222222-34.133333-64-34.133333-78.222223 0L250.311111 573.155556c-9.955556 22.755556 7.111111 46.933333 31.288889 46.933333 14.222222 0 25.6-8.533333 31.288889-21.333333l36.977778-92.444445h240.355555l36.977778 92.444445c4.266667 12.8 17.066667 21.333333 29.866667 21.333333z m-285.866667-170.666667L469.333333 203.377778l98.133334 246.044444H371.2zM704 662.755556c-11.377778 11.377778-11.377778 28.444444 0 39.822222l45.511111 45.511111H204.8c-15.644444 0-28.444444 12.8-28.444444 28.444444s12.8 28.444444 28.444444 28.444445h544.711111l-45.511111 45.511111c-11.377778 11.377778-11.377778 28.444444 0 39.822222 11.377778 11.377778 28.444444 11.377778 39.822222 0L839.111111 796.444444c11.377778-11.377778 11.377778-28.444444 0-39.822222l-93.866667-93.866666c-11.377778-11.377778-29.866667-11.377778-41.244444 0z"
          p-id="17165"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="text-rotation-angleup">
        <path
          d="M634.311111 398.222222c17.066667-17.066667 11.377778-45.511111-11.377778-54.044444L196.266667 170.666667c-35.555556-14.222222-69.688889 21.333333-55.466667 55.466666l172.088889 426.666667c8.533333 22.755556 38.4 28.444444 54.044444 11.377778 9.955556-9.955556 12.8-24.177778 7.111111-36.977778l-39.822222-91.022222 170.666667-170.666667 91.022222 39.822222c12.8 4.266667 28.444444 2.844444 38.4-7.111111z m-322.844444 81.066667l-105.244445-243.2L449.422222 341.333333l-137.955555 137.955556zM696.888889 393.955556c0 15.644444 12.8 28.444444 28.444444 28.444444h64L403.911111 807.822222c-11.377778 11.377778-11.377778 28.444444 0 39.822222 11.377778 11.377778 28.444444 11.377778 39.822222 0l385.422223-385.422222V526.222222c0 15.644444 12.8 28.444444 28.444444 28.444445s28.444444-12.8 28.444444-28.444445v-133.688889c0-15.644444-12.8-28.444444-28.444444-28.444444h-133.688889c-14.222222 1.422222-27.022222 14.222222-27.022222 29.866667z"
          p-id="17929"
        />
      </symbol>
      <symbol
        viewBox="0 0 1024 1024"
        fill="#535A68"
        id="text-rotation-angledown"
      >
        <path
          d="M625.777778 634.311111c17.066667 17.066667 45.511111 11.377778 54.044444-11.377778l172.088889-426.666666c14.222222-35.555556-21.333333-69.688889-55.466667-55.466667L371.2 312.888889c-22.755556 8.533333-28.444444 38.4-11.377778 54.044444 9.955556 9.955556 24.177778 12.8 36.977778 7.111111l91.022222-39.822222 170.666667 170.666667-39.822222 92.444444c-4.266667 11.377778-2.844444 27.022222 7.111111 36.977778z m-81.066667-322.844444l243.2-105.244445L682.666667 449.422222l-137.955556-137.955555zM630.044444 696.888889c-15.644444 0-28.444444 12.8-28.444444 28.444444v64L216.177778 403.911111c-11.377778-11.377778-28.444444-11.377778-39.822222 0-11.377778 11.377778-11.377778 28.444444 0 39.822222l385.422222 385.422223H497.777778c-15.644444 0-28.444444 12.8-28.444445 28.444444s12.8 28.444444 28.444445 28.444444h133.688889c15.644444 0 28.444444-12.8 28.444444-28.444444v-133.688889c-1.422222-14.222222-14.222222-27.022222-29.866667-27.022222z"
          p-id="18084"
        />
      </symbol>
      <symbol
        viewBox="0 0 1024 1024"
        fill="#535A68"
        id="text-rotation-vertical"
      >
        <path
          d="M465.066667 672.711111c-24.177778 0-39.822222-24.177778-31.288889-46.933333l179.2-423.822222c14.222222-34.133333 64-34.133333 78.222222 0L871.822222 625.777778c9.955556 22.755556-7.111111 46.933333-31.288889 46.933333-14.222222 0-25.6-8.533333-31.288889-21.333333l-36.977777-92.444445H531.911111l-36.977778 92.444445c-4.266667 12.8-17.066667 21.333333-29.866666 21.333333z m285.866666-170.666667L652.8 256 554.666667 502.044444h196.266666zM157.866667 704c11.377778-11.377778 28.444444-11.377778 39.822222 0l45.511111 45.511111V204.8c0-15.644444 12.8-28.444444 28.444444-28.444444s28.444444 12.8 28.444445 28.444444v544.711111l45.511111-45.511111c11.377778-11.377778 28.444444-11.377778 39.822222 0 11.377778 11.377778 11.377778 28.444444 0 39.822222L292.977778 839.111111c-11.377778 11.377778-28.444444 11.377778-39.822222 0l-93.866667-93.866667c-12.8-11.377778-12.8-29.866667-1.422222-41.244444z"
          p-id="18239"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="text-rotation-up">
        <path
          d="M620.088889 366.933333c0-24.177778-24.177778-39.822222-46.933333-31.288889L150.755556 514.844444c-34.133333 14.222222-34.133333 64 0 78.222223l423.822222 179.2c22.755556 9.955556 46.933333-7.111111 46.933333-31.288889 0-14.222222-8.533333-25.6-21.333333-31.288889l-92.444445-36.977778V433.777778l92.444445-36.977778c11.377778-4.266667 19.911111-17.066667 19.911111-29.866667z m-170.666667 285.866667L203.377778 554.666667l246.044444-98.133334v196.266667zM662.755556 320c11.377778 11.377778 28.444444 11.377778 39.822222 0l45.511111-45.511111v544.711111c0 15.644444 12.8 28.444444 28.444444 28.444444s28.444444-12.8 28.444445-28.444444V274.488889l45.511111 45.511111c11.377778 11.377778 28.444444 11.377778 39.822222 0 11.377778-11.377778 11.377778-28.444444 0-39.822222L796.444444 184.888889c-11.377778-11.377778-28.444444-11.377778-39.822222 0l-93.866666 93.866667c-11.377778 11.377778-11.377778 29.866667 0 41.244444z"
          p-id="18394"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="screenshot">
        <path
          d="M320 704V128H256v128H128v64h128v448h448v128h64v-128h128v-64H320z m384-64h64V256H384v64h320v320z"
          p-id="3788"
        />
      </symbol>
      <symbol
        viewBox="0 0 1024 1024"
        fill="#535A68"
        id="conditionFormat"
        width="20"
      >
        <path
          d="M128 128h768v768H128V128z m64 512v128h128v-128H192z m256 0v128h192v-128H448zM192 448v128h128V448H192z m0-192v128h128V256H192z m192 0v128h192V256H384z m320 384v128h128v-128h-128z m0-192v128h128V448h-128z m0-192v128h128V256h-128z"
          p-id="1955"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="splitColumn">
        <path
          d="M143.36 184.32v163.84h737.28v-163.84h-737.28z m-40.96-40.96h819.2v245.76h-819.2v-245.76z m342.016 333.824l67.584 67.584 67.584-67.584c8.192-8.192 20.48-8.192 28.672 0 8.192 8.192 8.192 20.48 0 28.672l-96.256 96.256-96.256-96.256c-8.192-8.192-8.192-20.48 0-28.672 8.192-8.192 20.48-8.192 28.672 0z m-342.016 157.696h368.64v245.76h-368.64v-245.76z m450.56 0h368.64v245.76h-368.64v-245.76z m-409.6 204.8h286.72v-163.84h-286.72v163.84z m450.56 0h286.72v-163.84h-286.72v163.84z"
          p-id="1984"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="locationCondition">
        <path
          d="M938.666667 388.266667H584.533333V247.466667a21.333333 21.333333 0 0 0-21.333333-21.333334H85.333333A21.333333 21.333333 0 0 0 64 247.466667v324.266666a21.333333 21.333333 0 0 0 21.333333 21.333334h277.333334V785.066667a21.333333 21.333333 0 0 0 21.333333 21.333333h554.666667a21.333333 21.333333 0 0 0 21.333333-21.333333V409.6a21.333333 21.333333 0 0 0-21.333333-21.333333z m-832 162.133333v-281.6h435.2v119.466667H384a21.333333 21.333333 0 0 0-21.333333 21.333333v140.8h-256z"
          p-id="9672"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="dataVerification">
        <path
          d="M510.9 921.6l-107.8-66.2c-124.6-76.5-202-214.8-202-361.1V243.9h21.7c205.1 0 262-115.5 267.8-128.6l5.7-13 28.7-0.3 6.2 13.1c5.9 13.3 62.8 128.8 267.8 128.8h21.7v250.4c0 146.3-77.4 284.6-202 361.1l-107.8 66.2zM244.5 287v207.3c0 131.2 69.5 255.4 181.3 324.1l85.1 52.2 85.1-52.2c111.8-68.6 181.3-192.8 181.3-324.1V287c-157.7-6.1-234.1-77.8-266.4-121.7-32.2 43.8-108.6 115.6-266.4 121.7z"
          p-id="5514"
        />
        <path
          d="M502.2 617.3c-5.6 0-11.1-2.1-15.4-6.4L410 534.1c-8.5-8.5-8.5-22.2 0-30.7s22.2-8.5 30.7 0l61.4 61.4 108.7-108.7c8.5-8.5 22.2-8.5 30.7 0s8.5 22.2 0 30.7l-124 124.1c-4.2 4.2-9.8 6.4-15.3 6.4z"
          p-id="5515"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="text-rotation-down">
        <path
          d="M403.911111 657.066667c0 24.177778 24.177778 39.822222 46.933333 31.288889L873.244444 509.155556c34.133333-14.222222 34.13333299-64 0-78.222223L450.844444 250.311111c-22.755556-9.955556-46.933333 7.111111-46.933333 31.288889 0 14.222222 8.533333 25.6 21.333333 31.288889l92.444445 36.977778-1e-8 240.355555-92.44444499 36.977778c-12.8 4.266667-21.333333 17.066667-21.333333 29.866667z m170.666667-285.86666701L820.622222 469.33333299l-246.044444 98.13333401L574.577778 371.19999999zM361.244444 704c-11.377778-11.377778-28.444444-11.377778-39.822222 0l-45.511111 45.511111L275.911111 204.79999999c0-15.644444-12.8-28.444444-28.44444399-28.44444399s-28.444444 12.8-28.44444501 28.444444l-1e-8 544.711111-45.51111099-45.511111c-11.377778-11.377778-28.444444-11.377778-39.822222 0-11.377778 11.377778-11.377778 28.444444 0 39.822222L227.555556 839.111111c11.377778 11.377778 28.444444 11.377778 39.822222-1e-8l93.866666-93.86666699c11.377778-11.377778 11.377778-29.866667 0-41.244444z"
          p-id="10914"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="search">
        <path
          d="M469.333 192c153.174 0 277.334 124.16 277.334 277.333 0 68.054-24.534 130.411-65.216 178.688L846.336 818.24l-48.341 49.877L630.4 695.125a276.053 276.053 0 0 1-161.067 51.542C316.16 746.667 192 622.507 192 469.333S316.16 192 469.333 192z m0 64C351.51 256 256 351.51 256 469.333s95.51 213.334 213.333 213.334 213.334-95.51 213.334-213.334S587.157 256 469.333 256z"
          p-id="11202"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="link">
        <path
          d="M577.155781 655.619241L431.54903 801.139578a119.509873 119.509873 0 0 1-169.111224 0l-26.442532-25.924051a119.6827 119.6827 0 0 1 0-169.111223L366.393249 475.274262a21.344135 21.344135 0 0 1 30.417553 0 21.516962 21.516962 0 0 1 0 30.503966L266.585654 636.176203a76.389536 76.389536 0 0 0 0 108.016877l26.442532 26.442532a76.389536 76.389536 0 0 0 108.016877 0l145.520338-145.606751a76.389536 76.389536 0 0 0 0-108.016878L535.763713 505.864641A21.516962 21.516962 0 0 1 535.763713 475.274262a21.344135 21.344135 0 0 1 30.417553 0l11.233755 11.147341a119.6827 119.6827 0 0 1-0.25924 169.197638z"
          p-id="28239"
        />
        <path
          d="M546.565401 517.011983L535.763713 505.864641A21.516962 21.516962 0 0 1 535.763713 475.274262a21.344135 21.344135 0 0 1 30.417553 0l11.233755 11.147341"
          p-id="28240"
        />
        <path
          d="M446.844219 368.380759l145.606751-145.520337a119.509873 119.509873 0 0 1 169.111224 0l26.442532 26.356118a119.6827 119.6827 0 0 1 0 169.111224L657.606751 548.639325a21.344135 21.344135 0 0 1-30.417553 0 21.516962 21.516962 0 0 1 0-30.503966l130.225148-130.311562a76.389536 76.389536 0 0 0 0-108.016877l-26.442532-26.442532a76.389536 76.389536 0 0 0-108.016877 0L477.434599 398.971139a76.389536 76.389536 0 0 0 0 108.016878L488.581941 518.481013a21.516962 21.516962 0 0 1 0 30.503966 21.344135 21.344135 0 0 1-30.417553 0l-11.233755-11.147342a119.6827 119.6827 0 0 1-0.086414-169.456878z"
          p-id="28241"
        />
        <path
          d="M477.434599 506.988017L488.581941 518.481013a21.516962 21.516962 0 0 1 0 30.503966 21.344135 21.344135 0 0 1-30.417553 0l-11.233755-11.147342"
          p-id="28242"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="copy">
        <path
          d="M832 128c-12.8-76.8-76.8-128-160-128h-448C102.4 0 0 102.4 0 224v448c0 76.8 57.6 140.8 128 160 12.8 76.8 76.8 128 160 128h512c89.6 0 160-70.4 160-160v-512c0-76.8-57.6-140.8-128-160zM64 672v-448C64 134.4 134.4 64 224 64h448c44.8 0 76.8 25.6 89.6 64H288C198.4 128 128 198.4 128 288v473.6c-38.4-12.8-64-44.8-64-89.6z m832 128c0 51.2-44.8 96-96 96h-512c-51.2 0-96-44.8-96-96v-512C192 236.8 236.8 192 288 192h512c51.2 0 96 44.8 96 96v512z"
          p-id="28791"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="pencil">
        <path
          d="M966.283012 57.28336A194.600516 194.600516 0 0 0 828.144425 0.000203c-49.932663 0-100.118792 19.009897-138.138586 57.283157l-667.12066 667.12066-22.811877 276.784103c-1.013861 12.166334 8.61782 22.304946 20.530689 22.304946h1.774257l276.784104-22.811876 667.12066-667.12066c76.293054-76.293054 76.293054-199.984119 0-276.277173zM271.534635 941.116848l-205.813821 16.72871L82.702989 751.778272l547.231575-547.231575 189.085111 189.085111-547.48504 547.48504zM922.686981 289.964502l-60.071275 60.071275-189.085111-189.085111 60.071275-60.071275c25.34653-25.34653 58.803949-39.033656 94.542555-39.033656 35.738607 0 69.196026 13.940591 94.542556 39.033656 52.213851 52.213851 52.213851 136.87126 0 189.085111z"
          p-id="40167"
        />
      </symbol>
      <symbol fill="#535A68" id="unlink" viewBox="0 0 1024 1024">
        <path
          d="M240.469333 240.469333l241.194667 241.194667 90.965333-90.965333a42.88 42.88 0 0 1 60.672 60.672L542.293333 542.293333l241.237334 241.237334a42.666667 42.666667 0 0 1-60.330667 60.330666l-119.936-119.893333-151.893333 151.893333a214.4 214.4 0 0 1-309.674667-296.533333l6.4-6.698667 151.936-151.893333-119.893333-119.893333a42.666667 42.666667 0 0 1 60.330666-60.373334z m120.192 240.896l-151.893333 151.893334a128.64 128.64 0 0 0 176.426667 187.136l5.546666-5.162667 151.850667-151.936-60.629333-60.629333-30.592 30.634666a42.88 42.88 0 1 1-60.672-60.672l30.634666-30.592-60.672-60.672z m515.2-333.226666a214.4 214.4 0 0 1 0 303.232l-121.301333 121.258666A42.88 42.88 0 1 1 693.973333 512l121.258667-121.301333a128.64 128.64 0 0 0-181.930667-181.930667L512 330.069333a42.88 42.88 0 1 1-60.629333-60.629333l121.258666-121.301333a214.4 214.4 0 0 1 303.232 0z m-333.653333 273.365333l-60.373333 60.330667 60.330666 60.330666 60.330667-60.330666-60.330667-60.330667z"
          p-id="39251"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="filter">
        <path
          d="M872.533333 134.4c-12.8-10.666667-29.866667-17.066667-49.066666-17.066667H198.4C157.866667 117.333333 123.733333 151.466667 123.733333 192c0 17.066667 6.4 34.133333 17.066667 49.066667l256 302.933333v251.733333c0 12.8 6.4 23.466667 17.066667 27.733334l162.133333 81.066666c4.266667 2.133333 8.533333 4.266667 14.933333 4.266667 6.4 0 10.666667-2.133333 17.066667-4.266667 8.533333-6.4 14.933333-17.066667 14.933333-27.733333V541.866667l256-302.933334c12.8-14.933333 19.2-34.133333 17.066667-53.333333 2.133333-19.2-6.4-38.4-23.466667-51.2z m-38.4 64L569.6 509.866667c-4.266667 6.4-8.533333 12.8-8.533333 21.333333v292.266667l-98.133334-49.066667V531.2c0-8.533333-2.133333-14.933333-8.533333-21.333333L189.866667 198.4c0-2.133333-2.133333-4.266667-2.133334-6.4 0-6.4 4.266667-10.666667 10.666667-10.666667h625.066667c2.133333 0 4.266667 0 6.4 2.133334 2.133333 2.133333 4.266667 6.4 4.266666 6.4 2.133333 2.133333 2.133333 6.4 0 8.533333z"
          p-id="43580"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="filter1">
        <path
          d="M608 864C588.8 864 576 851.2 576 832L576 448c0-6.4 6.4-19.2 12.8-25.6L787.2 256c6.4-6.4 6.4-19.2 0-19.2 0-6.4-6.4-12.8-19.2-12.8L256 224c-12.8 0-19.2 6.4-19.2 12.8 0 6.4-6.4 12.8 6.4 19.2l198.4 166.4C441.6 428.8 448 441.6 448 448l0 256c0 19.2-12.8 32-32 32S384 723.2 384 704L384 460.8 198.4 307.2c-25.6-25.6-32-64-19.2-96C185.6 179.2 217.6 160 256 160L768 160c32 0 64 19.2 76.8 51.2 12.8 32 6.4 70.4-19.2 89.6l-192 160L633.6 832C640 851.2 627.2 864 608 864z"
          p-id="43727"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="eraser">
        <path
          d="M596.437333 85.333333a42.837333 42.837333 0 0 0-30.549333 13.824l-469.333333 512a42.666667 42.666667 0 0 0 1.28 59.008l170.666666 170.666667A42.496 42.496 0 0 0 298.666667 853.333333h512v-85.333333h-195.669334l311.168-311.168a42.538667 42.538667 0 0 0 0-60.330667l-298.666666-298.666666A43.221333 43.221333 0 0 0 596.437333 85.333333z m-102.144 682.666667H316.330667l-129.28-129.28 268.8-293.205333 230.485333 230.485333-192.042667 192z m252.373334-252.330667l-233.130667-233.130666 85.12-92.842667L835.669333 426.666667 746.666667 515.669333z"
          p-id="50819"
        />
      </symbol>
      <symbol viewBox="0 0 1057 1024" fill="#535A68" id="sort">
        <path
          d="M438.634667 192v644.202667l-0.810667 5.781333c-1.152 7.210667-2.304 8.704-8.64 17.002667l-7.168 3.925333c-15.914667 8.490667-18.282667 7.168-38.4-3.925333L149.333333 624.533333l45.269334-45.226666 180.032 180.138666V192h64z m216.96 10.005333l231.04 231.146667-45.269334 45.248L661.333333 298.261333V865.706667h-64V226.133333a34.133333 34.133333 0 0 1 58.282667-24.128z"
          p-id="52781"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="filter-fill">
        <path
          d="M776.341333 170.666667a64 64 0 0 1 49.557334 104.512L627.541333 517.76v273.386667L398.293333 687.018667v-169.237334l-192.469333-243.413333A64 64 0 0 1 256 170.666667h520.341333z"
          p-id="18344"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#ffffff" id="filter-fill-white">
        <path
          d="M776.341333 170.666667a64 64 0 0 1 49.557334 104.512L627.541333 517.76v273.386667L398.293333 687.018667v-169.237334l-192.469333-243.413333A64 64 0 0 1 256 170.666667h520.341333z"
          p-id="18344"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="all-sheets">
        <path
          d="M849.427 1000.999h-157.9c-73.785 0-132.809-59.029-132.809-132.809v-258.243c0-14.759 10.33-26.562 25.088-29.513 4.427-1.472 8.853-2.953 13.278-2.953h252.337c73.785 0 132.809 59.029 132.809 132.809v157.9c-1.472 72.309-60.5 132.809-132.809 132.809zM616.268 636.505v231.684c0 39.844 32.468 73.785 73.785 73.785h157.9c39.844 0 73.785-32.468 73.785-73.785v-157.9c0-39.844-32.468-73.785-73.785-73.785h-231.684z"
          p-id="4941"
        />
        <path
          d="M315.23 1000.999h-147.571c-76.736 0-137.241-61.981-137.241-137.241v-147.571c0-76.736 61.981-137.241 137.241-137.241h247.911c4.427 0 8.853 1.472 13.278 2.953 14.759 1.472 25.088 14.759 25.088 29.513v253.814c0 73.785-61.981 135.764-138.711 135.764zM167.657 636.505c-42.796 0-78.211 35.418-78.211 78.211v147.571c0 44.269 35.418 78.211 78.211 78.211h147.571c42.796 0 78.211-35.418 78.211-78.211v-225.779h-225.779z"
          p-id="4942"
        />
        <path
          d="M415.576 471.232h-255.291c-72.309 0-129.859-57.549-129.859-129.859v-163.801c0-72.309 57.549-129.859 129.859-129.859h163.801c72.309 0 129.859 57.549 129.859 129.859v261.199c0 14.759-10.33 26.562-25.088 29.513-4.427 1.472-8.853 2.953-13.278 2.953zM158.805 105.259c-38.369 0-70.836 32.468-70.836 70.836v165.279c0 38.369 32.468 70.836 70.836 70.836h234.634v-234.634c0-38.369-32.468-70.836-70.836-70.836h-163.801z"
          p-id="4943"
        />
        <path
          d="M847.948 471.232h-252.337c-4.427 0-8.853-1.472-13.278-2.953-14.759-1.472-25.088-14.759-25.088-29.513v-258.243c0-73.785 60.5-134.287 134.287-134.287h156.423c73.785 0 134.287 60.5 134.287 134.287v156.423c-1.472 73.785-60.5 134.287-134.287 134.287zM616.268 412.199h230.207c41.318 0 75.263-33.941 75.263-75.263v-156.423c0-41.318-33.941-75.263-75.263-75.263h-156.423c-41.318 0-75.263 33.941-75.263 75.263v231.684z"
          p-id="4944"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="hidden">
        <path
          d="M849.152 665.429333c62.762667-69.674667 86.826667-138.538667 87.296-139.904a42.410667 42.410667 0 0 0 0-27.008C935.552 495.658667 837.674667 213.333333 512 213.333333c-37.802667 0-72.192 4.138667-104.064 10.837334l75.776 75.776c9.301333-0.554667 18.517333-1.28 28.288-1.28 228.309333 0 316.757333 164.096 338.176 213.333333a369.365333 369.365333 0 0 1-60.544 93.866667l59.52 59.562666zM512 810.666667c78.293333 0 143.146667-16.597333 196.906667-41.429334l156.928 156.928 60.330666-60.330666-768-768-60.330666 60.330666 141.610666 141.610667c-111.530667 83.285333-151.338667 196.906667-151.936 198.698667a42.410667 42.410667 0 0 0 0 27.008C88.448 528.341333 186.325333 810.666667 512 810.666667zM299.989333 360.32l96.938667 96.938667c-22.229333 47.488-14.378667 106.282667 24.533333 145.194666s97.706667 46.805333 145.194667 24.533334l76.842667 76.842666A394.325333 394.325333 0 0 1 512 725.333333c-228.309333 0-316.757333-164.096-338.176-213.333333a366.933333 366.933333 0 0 1 126.165333-151.68z"
          p-id="19355"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="check">
        <path
          d="M439.439404 776.947278a32.717146 32.717146 0 0 1-21.343097-7.892761L185.810916 570.228169c-13.779841-11.795651-15.389502-32.527834-3.593851-46.308698 11.795651-13.778818 32.528857-15.390525 46.308699-3.593852L435.957093 697.877431l349.863273-405.566946c11.846816-13.736862 32.588209-15.265682 46.323025-3.415796 13.733792 11.847839 15.263635 32.587186 3.414773 46.322002l-371.235023 430.340165c-6.492878 7.52744-15.661701 11.390421-24.883737 11.390422z"
          fill=""
          p-id="5612"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#A8ABB0" id="rightArrow">
        <path
          d="M781.963636 495.709091l-418.909091-323.490909c-20.945455-16.290909-37.236364-9.309091-37.236363 16.290909v646.981818c0 25.6 16.290909 32.581818 37.236363 16.290909l418.909091-323.490909c11.636364-9.309091 11.636364-23.272727 0-32.581818z"
          p-id="5380"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" id="downArrow">
        <path
          d="M163.396608 289.168384c-40.577024 0-66.526208 54.183936-35.44064 85.25824L477.217792 723.704832c20.031488 20.031488 49.82272 20.031488 69.853184 0l349.274112-349.278208c30.30528-30.294016 6.677504-85.25824-34.927616-85.25824L163.396608 289.168384z"
          p-id="2683"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#272636" id="headDownArrow">
        <path
          d="M0 511.976727C0 229.678545 229.725091 0 511.976727 0s511.976727 229.632 511.976727 511.976727c0 282.391273-229.725091 511.976727-511.976727 511.976727C229.725091 1024 0 794.368 0 511.976727M955.717818 511.976727c0-244.898909-199.121455-444.206545-443.741091-444.206545-244.666182 0-443.694545 199.307636-443.694545 444.206545 0 244.945455 199.121455 444.253091 443.694545 444.253091C756.642909 956.276364 955.717818 756.968727 955.717818 511.976727M230.027636 419.025455c0-6.562909 2.420364-13.102545 7.563636-18.059636 9.914182-9.960727 26.042182-9.960727 36.096 0l238.289455 236.916364L750.312727 401.105455c9.960727-9.914182 26.135273-9.914182 36.305455 0 9.914182 9.960727 9.914182 26.042182 0 35.956364L511.976727 709.678545 237.474909 436.922182C232.424727 432.104727 230.027636 425.588364 230.027636 419.025455"
          p-id="5142"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" id="tab">
        <path
          d="M960 591.424V368.96c0-0.288 0.16-0.512 0.16-0.768S960 367.68 960 367.424V192a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v175.424c0 0.288-0.16 0.512-0.16 0.768s0.16 0.48 0.16 0.768v222.464c0 0.288-0.16 0.512-0.16 0.768s0.16 0.48 0.16 0.768V864a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-271.04c0-0.288 0.16-0.512 0.16-0.768S960 591.68 960 591.424z m-560-31.232v-160H608v160h-208z m208 64V832h-208v-207.808H608z m-480-224h208v160H128v-160z m544 0h224v160h-224v-160zM896 224v112.192H128V224h768zM128 624.192h208V832H128v-207.808zM672 832v-207.808h224V832h-224z"
          p-id="3023"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" fill="#535A68" id="default">
        <path
          d="M844.8 896c25.6 0 51.2-19.2 51.2-51.2v-185.6h-51.2c-44.8 0-83.2-38.4-83.2-83.2s38.4-83.2 83.2-83.2h51.2V313.6c0-25.6-19.2-51.2-51.2-51.2h-134.4c0-70.4-57.6-128-128-128S448 185.6 448 256H313.6c-25.6 0-51.2 19.2-51.2 51.2V448C185.6 448 128 505.6 128 576s57.6 128 128 128v134.4c0 25.6 19.2 51.2 51.2 51.2h185.6v-51.2c0-44.8 38.4-83.2 83.2-83.2 44.8 0 83.2 38.4 83.2 83.2v57.6h185.6zM576 710.4c-70.4 0-128 57.6-128 128H307.2v-185.6H256c-44.8 0-83.2-38.4-83.2-83.2S211.2 492.8 256 492.8h51.2V307.2h185.6V256c0-44.8 38.4-83.2 83.2-83.2 44.8 0 83.2 38.4 83.2 83.2v51.2h185.6V448c-70.4 0-128 57.6-128 128s57.6 128 128 128v140.8H704c6.4-70.4-51.2-134.4-128-134.4z"
          fill=""
          p-id="36983"
        />
      </symbol>
    </defs>
  </svg>
);

export default SVGDefines;
