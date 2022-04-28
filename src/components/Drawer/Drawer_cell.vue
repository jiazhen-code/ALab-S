<template>
  <div>
    <a-drawer
        title="编辑仪器具体属性"
        :width="720"
        :visible="visible"
        :body-style="{ paddingBottom: '80px' }"
        @close="onClose"
    >
      <a-form :form="form" layout="vertical" hide-required-mark>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="参比电极输入阻抗">
              <a-input
                  v-decorator="[
                  'name',
                  {
                    rules: [{ required: true, message: 'Please enter user name' }],
                  },
                ]"
                  placeholder="请输入阻抗"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="扫描速度">
              <a-input
                  v-decorator="[
                  'name',
                  {
                    rules: [{ required: true, message: 'Please enter user name' }],
                  },
                ]"
                  placeholder="请输入扫描速度"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Owner">
              <a-select
                  v-decorator="[
                  'owner',
                  {
                    rules: [{ required: true, message: 'Please select an owner' }],
                  },
                ]"
                  placeholder="测量电流范围"
              >
                <a-select-option value="xiao">
                  ±0.025 V
                </a-select-option>
                <a-select-option value="mao">
                  ±0.1 V
                </a-select-option>
                <a-select-option value="xiao1">
                  ±0.25 V
                </a-select-option>
                <a-select-option value="xiao2">
                  ±1 V
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="CA的最小采样间隔">
              <a-input
                  v-decorator="[
                  'name',
                  {
                    rules: [{ required: true, message: 'Please enter user name' }],
                  },
                ]"
                  placeholder="请输入采样间隔"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <!--        <a-row :gutter="16">-->
        <!--          <a-col :span="12">-->
        <!--            <a-form-item label="Approver">-->
        <!--              <a-select-->
        <!--                  v-decorator="[-->
        <!--                  'approver',-->
        <!--                  {-->
        <!--                    rules: [{ required: true, message: 'Please choose the approver' }],-->
        <!--                  },-->
        <!--                ]"-->
        <!--                  placeholder="Please choose the approver"-->
        <!--              >-->
        <!--                <a-select-option value="jack">-->
        <!--                  Jack Ma-->
        <!--                </a-select-option>-->
        <!--                <a-select-option value="tom">-->
        <!--                  Tom Liu-->
        <!--                </a-select-option>-->
        <!--              </a-select>-->
        <!--            </a-form-item>-->
        <!--          </a-col>-->
        <!--          <a-col :span="12">-->
        <!--            <a-form-item label="DateTime">-->
        <!--              <a-date-picker-->
        <!--                  v-decorator="[-->
        <!--                  'dateTime',-->
        <!--                  {-->
        <!--                    rules: [{ required: true, message: 'Please choose the dateTime' }],-->
        <!--                  },-->
        <!--                ]"-->
        <!--                  style="width: 100%"-->
        <!--                  :get-popup-container="trigger => trigger.parentNode"-->
        <!--              />-->
        <!--            </a-form-item>-->
        <!--          </a-col>-->
        <!--        </a-row>-->
        <!--        <a-row :gutter="16">-->
        <!--          <a-col :span="24">-->
        <!--            <a-form-item label="Description">-->
        <!--              <a-textarea-->
        <!--                  v-decorator="[-->
        <!--                  'description',-->
        <!--                  {-->
        <!--                    rules: [{ required: true, message: 'Please enter url description' }],-->
        <!--                  },-->
        <!--                ]"-->
        <!--                  :rows="4"-->
        <!--                  placeholder="please enter url description"-->
        <!--              />-->
        <!--            </a-form-item>-->
        <!--          </a-col>-->
        <!--        </a-row>-->


      </a-form>
      <div
          :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose">
          Cancel
        </a-button>
        <a-button type="primary" @click="onClose">
          Submit
        </a-button>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      visible: false,
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>