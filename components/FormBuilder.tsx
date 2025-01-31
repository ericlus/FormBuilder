"use client";

import { Form } from "@prisma/client";
import React from "react";
import FormBuilderHeader from "./FormBuilderHeader";
import FormBuilderDesigner from "./FormBuilderDesigner";
import FormBuilderSidebar from "./FormBuilderSidebar";
import { DndContext } from "@dnd-kit/core";
import DragOverlayWrapper from "./DragOverlayWrapper";

type FormBuilderProps = {
  form: Form;
};

function FormBuilder({ form }: FormBuilderProps) {
  return (
    <main className="flex flex-col w-full">
      <FormBuilderHeader formName={form.name} isPublished={form.published} />
      <div className="flex flex-grow gap-2 bg-[length:50px_50px] bg-repeat bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]">
        <div className="container flex justify-center">
          <DndContext>
            <FormBuilderDesigner />
            <FormBuilderSidebar />
            <DragOverlayWrapper />
          </DndContext>
        </div>
      </div>
    </main>
  );
}

export default FormBuilder;
