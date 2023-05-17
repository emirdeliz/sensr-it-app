import styled from 'styled-components';

const MAX_WIDTH = '200px';

export const DropdownTheme = styled.div<{ close: boolean }>`
  max-width: ${MAX_WIDTH};
  width: 100%;
  position: absolute;
  bottom: 15px;
  z-index: 9999;
  left: ${({ close}) => close ? '-200' : '15'}px;
`;
