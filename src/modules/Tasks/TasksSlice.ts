import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {TasksState} from "./tasksTypes";

const initialState: TasksState = {

};

export const TasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {

    },
});

export const {

} = TasksSlice.actions

export default TasksSlice.reducer
