import {
    GET_ALL_ITEM,
    CHANGE_TODO_ITEM,
    DEL_TODO_ITEM,
    ADD_TODO_ITEM,
    DEL_FINISHED_TODO_ITEM,
    IS_CHECKED_ALL_TODO_ITEM
} from './actionType'
// 获取数据
export const getAllItemAction =(todos)=>({
type:GET_ALL_ITEM,
todos
})
// 2. 单个TODO选中与否
export const getChangeItemFinishedAction = (todoId, isfinished)=>({
    type: CHANGE_TODO_ITEM,
    todoId,
    isfinished
});
// 3. 单个TODO删除
export const getDelItemAction = (todoId)=>({
    type: DEL_TODO_ITEM,
    todoId
});
// 4. 添加一条记录
export const getAddItemAction = (todo)=>({
    type: ADD_TODO_ITEM,
    todo
});
// 5. 删除所有已经完成的记录
export const getRemoveFinishedItemAction = ()=>({
    type: DEL_FINISHED_TODO_ITEM
});

// 6. 全选与非全选
export const getIsCheckedAllAction = (flag)=>({
    type: IS_CHECKED_ALL_TODO_ITEM,
    flag
});



