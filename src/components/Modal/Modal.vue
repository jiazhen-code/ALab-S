<template>
  <div>
    <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">

      <template>
        <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
          <a-form-item label="实验名称">
            <a-input
                v-decorator="['name', { rules: [{ required: true, message: '请输入实验名称' }] }]"
            />
          </a-form-item>
          <a-form-item label="参与人员">
            <a-select mode="tags" style="width: 100%" placeholder="Tags Mode" @change="handleSelectChange"
                      v-decorator="['member', { rules: [{ required: true, message: '请选择参与成员' }] }]"
            >
              <a-select-option v-for="i in 6" :key="(i).toString(36)">
                {{ 'member' + i }}
              </a-select-option>
            </a-select>

          </a-form-item>
          <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-button type="primary" html-type="submit">
              Submit
            </a-button>
          </a-form-item>
        </a-form>
      </template>

    </a-modal>
  </div>
</template>
<script>
export default {
  props:{
    addData:{
      type: Function,
      required: true
    }
  },

  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },

    handleOk(e) {
      console.log(e);
      this.visible = false;
      this.form = this.$form.createForm(this, { name: 'coordinated' })
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values['member']);

          this.visible = false;
          this.form = this.$form.createForm(this, { name: 'coordinated' })
          this.addData(values['name'], values['member'])
        }

      });
    },
    handleSelectChange(value) {
      console.log(value);
      // this.form.setFieldsValue({
      //   note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      // });
    },

  },
};
</script>