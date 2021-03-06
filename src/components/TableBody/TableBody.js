import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { insetShadow } from "../common";

const StyledTableBody = styled.tbody`
  background: ${({ theme }) => theme.canvas};
  display: table-row-group;
  box-shadow: ${insetShadow};
`;

const TableBody = ({ className, children, style, ...otherProps }) => {
  return (
    <StyledTableBody className={className} style={style} {...otherProps}>
      {children}
    </StyledTableBody>
  );
};

TableBody.defaultProps = {};

TableBody.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};

export default TableBody;
