<template>
  <div class="app-container">
    <div class="my-head">
    </div>
    <div class="my-body" ref="myBody">
      <div class="my-page">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aidDetail',
  props: {},
  data() {
    return {
      open: false,
      loading: false,
      form: {},
      myBodyHeight: null,
      applyList: [],
      userData: {},
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        mutualAidId: this.$route.query.id,
        checkStatus: '0'
      },
      mutualAidApplyList: [],
      total: 0,
      numGather: {
        waitCheck: 0,
        successCheck: 0,
        rejectCheck: 0
      },
      title: ''
    }
  },
  methods: {
  }
}
</script>
