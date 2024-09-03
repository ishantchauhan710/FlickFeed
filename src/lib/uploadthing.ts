import { generateReactHelpers } from "@uploadthing/react";
import { AppFileRouter } from "@/app/api/uploadthing/core";

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<AppFileRouter>();
