<template>
  <div>
    <button 
    @click="$router.back()" 
    type="button" 
    class="btn btn-light btn-sm"
    >后退</button>
    <h4 class="text-center">用户详情 --- {{ id }}</h4>
  </div>
</template>

<script>
export default {
  name: 'MyUserDetail',
  props: ['id']
}
</script>

<style lang="less" scoped></style>
