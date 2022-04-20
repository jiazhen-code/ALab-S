<template>

	<a-card :bordered="false" class="card-info">
		<a-row type="flex" justify="space-between" align="middle">
			<a-col class="col-content" :span="24" :xl="8">
				<div class="card-content" >
          <h5>设备名称: {{ name }}</h5>
					<h6>资产编号: {{ Id }}</h6>

					<p> 设备描述: {{ descriptions }}</p>
          <a-row class="card-footer" type="flex" justify="left" align="top">
            <a-col :span="8">
              <h4>{{usage}}</h4>
              <span>排队人数</span>
            </a-col>
<!--            <a-col :span="8">-->
<!--              <h4>¥{{price}}</h4>-->
<!--              <span>设备单价</span>-->
<!--            </a-col>-->
            <a-col :span="8">
              <h4>{{number}}台</h4>
              <span>设备数量</span>
            </a-col>
          </a-row>
				</div>
				<div class="card-footer">
					<a href="#" size="small">
						<span>查看详情</span>
						<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="#111827"/>
						</svg>
					</a>
				</div>
			</a-col>
			<a-col class="col-img" :span="24" :xl="16" >
				<div class="card-img-bg">
					<img :src="imgPath" alt="">
				</div>
			</a-col>
		</a-row>
	</a-card>

</template>

<script>

	export default ({
    props: {
      Id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        default: "123",
      },
      descriptions: {
        type: String,
        default: "",
      },
      usage:{
        type: Number
      },
      price:{
        type: Number
      },
      number:{
        type: Number
      },
      imgPath:{
        type: String
      }
    },
		data() {
			return {
			}
		},
	})

</script>