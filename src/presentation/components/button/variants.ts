import { ITheme } from "@/presentation";

interface IVariantSchema {
  color: string;
  background: keyof ITheme;
}

type IVariant = {
  [key in "default"]: IVariantSchema;
};

export const variants: IVariant = {
  default: {
    color: "#fff",
    background: "primaryColor",
  },
};

export type { IVariant, IVariantSchema };
