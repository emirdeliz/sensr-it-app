import styled from 'styled-components';

const BANNER_HEIGHT = '100px';
const BANNER_MAX_WIDTH = '800px';

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Top = styled.div`
  display: flex;
  flex: 1;
  height: ${BANNER_HEIGHT};
  max-width: ${BANNER_MAX_WIDTH};
`;
