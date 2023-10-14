'use client'
import styled from 'styled-components';

export const CSSTabletOn = styled.span`
  @media (min-width: 1025px) {
    display: none !important;
  }
`;

export const CSSTabletOff = styled.span`
  @media (max-width: 1024px) {
    display: none !important;
  }
`;

export const CSSMobileOn = styled.span`
  @media (min-width: 768px) {
    display: none !important;
  }
`;

export const CSSMobileOff = styled.span`
  @media (max-width: 767px) {
    display: none !important;
  }
`;

export const CSSLittleMobileOn = styled.span`
  @media (min-width: 541px) {
    display: none !important;
  }
`;

export const CSSLittleMobileOff = styled.span`
  @media (max-width: 540px) {
    display: none !important;
  }
`;

export const CSSDesktopOn = styled.span`
  @media (min-width: 1441px) {
    display: none !important;
  }
`;

export const CSSDesktopOff = styled.span`
  @media (max-width: 1440px) {
    display: none !important;
  }
`;

export const CSSLittleDesktopOn = styled.span`
  @media (min-width: 1281px) {
    display: none !important;
  }
`;

export const CSSLittleDesktopOff = styled.span`
  @media (max-width: 1280px) {
    display: none !important;
  }
`;
