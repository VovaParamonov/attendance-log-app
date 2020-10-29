import React from "react";
import {returnType as useGoogleAccessReturnType} from "../API/useGoogleAccess";

export default React.createContext<useGoogleAccessReturnType | null>(null);