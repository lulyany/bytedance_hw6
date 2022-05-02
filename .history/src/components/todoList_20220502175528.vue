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
  // 添加完成后，清空todoText的值
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
  // 修改后排序，将完成的放后边
  todoList.value = todoListSort(todoList.value);
}

// 置顶列表list
const topTodoList = (index:number) => {
  todoList.value[index].is_top = true;
  // 置顶后排序，将完成的放前边
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
  
}
</style>
