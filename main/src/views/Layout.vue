<template>
  <div>
    <el-container>
      <el-header>
        <el-button @click="addCount">count + 1</el-button>
        count: {{ count }}
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            :default-active="curPath"
            router
            class="el-menu-vertical-demo"
          >
            <el-menu-item index="/home">
              <i class="el-icon-s-home"></i>
              <span slot="title">主应用</span>
            </el-menu-item>

            <el-menu-item index="/vue2-child">
              <i class="el-icon-menu"></i>
              <span slot="title">子应用vue2</span>
            </el-menu-item>

            <el-menu-item index="/vue3-child">
              <i class="el-icon-setting"></i>
              <span slot="title">子应用vue3</span>
            </el-menu-item>

            <el-menu-item index="/react18-child">
              <i class="el-icon-setting"></i>
              <span slot="title">子应用react18</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
          <div id="vue2-app"></div>
          <div id="vue3-app"></div>
          <div id="react18-app"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { action } from '@/micro/action';
export default {
  name: 'Layout',
  data() {
    return {
      count: 0
    };
  },
  computed: {
    curPath() {
      return this.$route.path;
    }
  },
  created() {
    action.onGlobalStateChange((val) => {
      this.count = val.count;
    });
  },
  methods: {
    addCount() {
      this.count++;
      action.setGlobalState({
        count: this.count
      });
    }
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-container {
  height: 100vh;
}
</style>
