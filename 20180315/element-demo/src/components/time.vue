<template>
  <div class="block">
    <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value"
      align="right"
      type="date"
      size="small"
      placeholder="选择日期"
      :picker-options="pickero">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
       	value:'',
       	pickero:{
       		disabledDate(time){
       			return time.getTime()<Date.now()-8.64e7;
       		},
       		firstDayOfWeek:1
       	}
      };
    }
  };
</script>