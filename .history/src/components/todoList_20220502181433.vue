<script setup lang="ts">
import {Input} from 'ant-design-vue';
import { DeleteOutlined, CheckOutlined, CheckCircleFilled, ToTopOutlined } from "@ant-design/icons-vue";
import { ref } from 'vue'

interface TodoType {
  title: string,
  is_completed: boolean,
  is_top: boolean
};
let todoList = ref<TodoType[]>([]);
const todoListSort = (list: TodoType[]):TodoType[] => {
  // 置顶
  let topList:TodoType[] = [];
  // 完成
  let completedList:TodoType[] = [];
  // 其他
  let otherList:TodoType[] = [];
  list.forEach(item => {
    if(item.is_top){
      topList.push(item);
    }else{
      if(item.is_completed){
        completedList.push(item);
      }else{
        otherList.push(item);
      }
    }
  });
  return [...topList, ...otherList, ...completedList];
}

const todoText = ref('');

// add list
const addTodoList = () => {

  if(!todoText.value) return;
  
  todoList.value.unshift({
    title: todoText.value,
    is_completed: false,
    is_top: false
  });
  todoText.value = '';
  // 插入后排序
  todoList.value = todoListSort(todoList.value);
}

// 删除List
const deleteTodoList = (index:number) => {
  todoList.value.splice(index, 1);
}

// 完成List
const completedTodoList = (index:number) => {
  todoList.value[index].is_completed = true;
  
  todoList.value = todoListSort(todoList.value);
}

// 置顶列表list
const topTodoList = (index:number) => {
  todoList.value[index].is_top = true;
  todoList.value = todoListSort(todoList.value);
}


</script>

<template>
  <div class="todo-list-container" >
    <div class="todo-wrapper" >
      <input 
        class="todo-input" 
        placeholder="请输入待办项" 
        v-model="todoText"
        @keydown.enter="addTodoList"
      />
      <ul class="todo-list" >
        <li 
          v-for="(item, index) in todoList"
          class="todo-item" 
          :class="{'todo-completed': item.is_completed, 'todo-top': item.is_top}"
        >
          <span>{{item.title}}</span>
          <div class="operator-list" >
            <CheckCircleFilled v-if="item.is_completed"/>
            <ToTopOutlined v-if="!item.is_completed" @click="topTodoList(index)" />
            <DeleteOutlined v-if="!item.is_completed" @click="deleteTodoList(index)" />
            <CheckOutlined v-if="!item.is_completed" @click="completedTodoList(index)" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
*{
  padding: 0;
  margin: 0;
}
.todo-list-container {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 100px;
  background: linear-gradient(rgba(93, 190, 129, 0.02), rgba(125, 185, 222, 0.02));
  display: flex;
  justify-content: center;
  .todo-wrapper {
    width: 60vw;
    .todo-input {
      width: 100%;
      height: 50px;
      border: 2px solid #62b9ef;
      border-radius: 5px;
      padding-left: 10px;
      font-size: 18px;
      color: #1c9ff0;
      &::placeholder {
        color: #1c9ff0;
        opacity: 0.4;
      }
      &:hover, &:focus {
        border-color: #1c9ff0;
        box-shadow: 0 0 0 2px rgba(255, 177, 27, 0.2);
        outline: none;
      }
    }
    .todo-list {
      margin-top: 20px;
      list-style: none;
      .todo-item {
        margin-bottom: 10px;
        padding: 15px 10px;
        box-sizing: border-box;
        border-bottom: 2px solid #1c9ff0;
        border-radius: 5px;
        font-size: 16px;
        color: #1c9ff0;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all .5s;
        
        &:hover {
          box-shadow: 0 0 2px 3px #1c9ff0;
          border-bottom: 2px solid transparent;
        }

      
        &.todo-completed {
          color: rgba(199,199,199,1);
          border-bottom-color: #1c9ff0);
          &:hover {
            box-shadow: none;
            border-bottom-color: #1b6a9b;
          }
        }
        // 置顶列表
        &.todo-top {
          box-shadow: none;
          background-color: #1c9ff0;
          color: #fff;
        }

        // 操作列表
        .operator-list {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          &:first-child {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
