"use client";

import styled from "styled-components";

export const Wrapper = styled.footer`
  padding: 30px 0;
  background-color: #ebb402;
  position: relative;
  margin-bottom: auto;
  height: 300px;
  margin-top: 150px;
  width: 100%;
  z-index: 2;
  .wave {
    z-index: -1;
    position: absolute !important;
    top: 0;
    transform: translateY(-50%);
    left: 0;
    width: 100%;

    &:last-child {
      transform: translateY(-40%);
    }
  }
`;
