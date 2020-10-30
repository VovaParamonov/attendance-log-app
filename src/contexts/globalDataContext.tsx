import React from "react";
import {returnType as useDataModuleReturnType} from "../hooks/useDataModule";

export default React.createContext<useDataModuleReturnType | null>(null);