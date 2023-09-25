import styled from "styled-components";

export const Image = styled.div`
  height: 100%;
  min-height: inherit;
  max-height: inherit;
  width: inherit;
  min-width: inherit;
  max-width: inherit;
  aspect-ratio: inherit;
  position: relative;

  img {
    width: 100% !important;
    position: relative !important;
    height: inherit !important;
    position: relative !important;
    min-height: inherit !important;
    max-height: inherit !important;
    min-width: inherit !important;
    max-width: inherit !important;
    object-fit: cover !important;
    object-position: center center !important;
    aspect-ratio: inherit;
  }
`;
