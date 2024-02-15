import React from "react";
import * as C from "./styles";

const ResumeItem = ({ title, Icon, total }) => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon />
      </C.Header>
      <C.Total>{total}</C.Total>
    </C.Container>
  );
};

export default ResumeItem;