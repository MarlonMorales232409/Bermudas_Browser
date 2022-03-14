import React from 'react';
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import { useStateContext } from '../context/StateContextProvider';

// Loading styles
const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;

export const Loading = () => {

  const { loading } = useStateContext();
  const color = "#F90716"; // Red color for loader

  return (
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <RingLoader color={color} loading={loading} css={override} size={75} />
  </div>

  )
};
