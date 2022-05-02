<template>
  <div class="todo-list-container" >
    <div class="todo-wrapper" >
      <input class="todo-input" placeholder="请输入待办项" />
      <ul class="todo-list" >
        <li class="todo-item" >
          <span>Todo Items</span>
          <div class="operator-list" >
            <DeleteOutlined />
            <CheckOutlined />
            <ToTopOutlined />
          </div>
        </li>
        <li class="todo-item" >
          <span>Todo Items</span>
          <div class="operator-list" >
            <DeleteOutlined />
            <CheckOutlined />
            <ToTopOutlined />
          </div>
        </li>
        <li class="todo-item todo-completed" >
          <span>Todo Items</span>
          <div class="operator-list" >
            <CheckCircleFilled />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// Input组件
import {Input} from 'ant-design-vue';
// 图标组件 
import { DeleteOutlined, CheckOutlined, CheckCircleFilled, ToTopOutlined } from "@ant-design/icons-vue";
</script>

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
      border: 2px solid rgba(255, 177, 27, 0.5);
      border-radius: 5px;
      padding-left: 10px;
      font-size: 18px;
      color: #f05e1c;
      &::placeholder {
        color: #f05e1c;
        opacity: 0.4;
      }
      &:hover, &:focus {
        border-color: #ffb11b;
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
        border-bottom: 2px solid rgba(255, 177, 27, 0.3);
        border-radius: 5px;
        font-size: 16px;
        color: #f05e1c;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all .5s;
        &:hover {
          box-shadow: 0 0 5px 8px rgba(255, 177, 27, 0.2);
          border-bottom: 2px solid transparent;
        }
        // 完成列表样式
        &.todo-completed {
          color: rgba(199,199,199,1);
          border-bottom-color: rgba(199,199,199,0.4);
          &:hover {
            box-shadow: none;
            border-bottom-color: rgba(199,199,199,0.4);
          }
        }
        // 置顶列表样式
        &.todo-top {
          box-shadow: none;
          background-color: #f05e1c;
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
