import { createAction} from "@reduxjs/toolkit";
import userActionsTypes from "./user.actionTypes";
import {IUser} from "../../types";

export const addUser = createAction<IUser>(userActionsTypes.ADD_USER);

