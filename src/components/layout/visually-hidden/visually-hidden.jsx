import React from 'react';
import styled from 'styled-components';

function VisuallyHidden({ children }) {
  return <Hidden>{children}</Hidden>;
}

export default VisuallyHidden;

const Hidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
`;
