<template>
  <div class="app-container">
    <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />

    <el-tree
      ref="treeNode"
      :data="subjectData"
      :props="defaultProps" 
      :filter-node-method="filterNode"
      class="filter-tree"
      default-expand-all
    />

  </div>
</template>

<script>
import subject from "@/api/subject"

export default {

  data() {
    return {
      filterText: '',
      subjectData: [],
      defaultProps: { // 树形结构的数据匹配
        children: 'children',
        label: 'title'
      }
    }
  },
  created() {
      this.getAllSubject();
  },
  watch: {
    filterText(newVal, oldVal) {
      this.$refs.treeNode.filter(newVal)
    }
  },

  methods: {
    getAllSubject () {
        subject.getAllSubject().then(response => {
            this.subjectData = response.data.allSubject;
        });
    },
    // 检索过滤方法
    filterNode(value, data) {
      if (!value) return true
      return data.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
}
  }
}
</script>

