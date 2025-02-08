import React from "react";
import SidebarButtonElement from "./SidebarButtonElement";
import { FormElements } from "./FormElements";

function FormBuilderSidebarElements() {
  return (
    <div>
      Elements
      <SidebarButtonElement formElement={FormElements.TextField} />
    </div>
  );
}

export default FormBuilderSidebarElements;
