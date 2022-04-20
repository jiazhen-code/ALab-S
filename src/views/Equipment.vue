<!-- 
	This is the dashboard page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
	<div>
		<!-- Counter Widgets -->
		<a-row :gutter="24">
			<a-col :span="24" :lg="12" :xl="12" class="mb-24" v-for="(stat, index) in stats" :key="index">
				<!-- Widget 1 Card -->
				<WidgetCounter
					:title="stat.title"
					:value="stat.value"
					:prefix="stat.prefix"
					:suffix="stat.suffix"
					:icon="stat.icon"
					:status="stat.status"
				></WidgetCounter>
				<!-- / Widget 1 Card -->
			</a-col>
		</a-row>

    <h6>设备列表</h6>
		<a-row :gutter="24" type="flex" align="stretch">
			<a-col :span="24" :xl="12" class="mb-24">

				<!-- Information Card 1 -->
				<CardInfo
            :Id="121"
            :name='"任意门"'
            :descriptions='"\t为一扇可至十光年内任何地方的门，在《大雄与云之王国》中，任意门加装了特殊旋钮，更可以设定时间，只要扭动其门柄，门另一边的时间便会改变。"'
            :usage="1"
            :price="10000"
            :number="1"
            :imgPath="'images/img_4.png'"></CardInfo>
				<!-- / Information Card 1 -->

			</a-col>
      <a-col :span="24" :xl="12" class="mb-24">

        <!-- Information Card 1 -->
        <CardInfo
          :Id="122"
          :name='"竹蜻蜓"'
          :descriptions='"内部装有一个超小的电池。能够以时速80公里连续在空中飞行8小时（某些情况是4小时）。此外，据说如果是飞一会儿休息一会儿的话，电池就能够维持更长的时间，飞行距离也更远。可以在天上或海里使用。但是在某些片段时，没电时，休息20个小时还可以继续使用。"'
          :usage="2"
          :price="10000"
          :number="2"
          :imgPath="'images/img_2.png'"
        ></CardInfo>
        <!-- / Information Card 1 -->

      </a-col>
      <a-col :span="24" :xl="12" class="mb-24">

        <!-- Information Card 1 -->
        <CardInfo
            :Id="123"
            :name='"哆啦A梦体内GPS"'
            :descriptions='"鸡蛋形状的道具。设在哆啦A梦的体内，可以知道哆啦A梦现在的所在地。道具上还有哆啦A梦的出厂编号“MS903”。"'
            :usage="4"
            :price="10000"
            :number="2"
            :imgPath="'images/img_1.png'"></CardInfo>
        <!-- / Information Card 1 -->

      </a-col>
      <a-col :span="24" :xl="12" class="mb-24">

        <!-- Information Card 1 -->
        <CardInfo
            :Id="124"
            :name='"原来如此机器人"'
            :descriptions='"打开开关之后使用者只要说出自己的困扰或问题，就会给予对方一个精确且有理的回答和解释，因此让使用者惊叹道“原来如此”的学士服样貌机器人。"'
            :usage="4"
            :price="10000"
            :number="13"
            :imgPath="'images/img_3.png'"></CardInfo>
        <!-- / Information Card 1 -->

      </a-col>
		</a-row>

    <a-row :gutter="24" type="flex" align="stretch">
    			<!-- Table -->
    			<a-col :span="24" :lg="16" class="mb-24">

    				<!-- Projects Table Card -->
    				<CardProjectTable
    					:data="tableData"
    					:columns="tableColumns"
    				></CardProjectTable>
    				<!-- / Projects Table Card -->

    			</a-col>
    			<!-- / Table -->

    			<!-- Timeline -->
    			<a-col :span="24" :lg="8" class="mb-24">

    				<!-- Orders History Timeline Card -->
    <!--				<CardOrderHistory></CardOrderHistory>-->
    				<!-- / Orders History Timeline Card -->

    			</a-col>
    			<!-- / Timeline -->
    		</a-row>
     / Table & Timeline

    <a-row type="flex" justify="end" align="middle">
      <a-col :span="4" :md="4" >
        <a-input-search placeholder="搜索设备" enter-button @search="onSearch" size="small"/>
      </a-col>

      <a-col :span="1" :md="1" ></a-col>

      <a-col>
        <MyPagination></MyPagination>
      </a-col>

    </a-row>


	</div>
</template>

<script>
  import MyPagination from "../components/Utils/MyPagination";
	// Bar chart for "Active Users" card.
	import CardBarChart from '../components/Cards/CardBarChart' ;

	// Line chart for "Sales Overview" card.
	import CardLineChart from '../components/Cards/CardLineChart' ;

	// Counter Widgets
	import WidgetCounter from '../components/Widgets/WidgetCounter' ;

	// "Projects" table component.
	import CardProjectTable from '../components/Cards/CardProjectTable' ;

	// Order History card component.
	import CardOrderHistory from '../components/Cards/CardOrderHistory' ;

	// Information card 1.
	import CardInfo from '../components/Cards/CardInfo' ;

	// Information card 2.
	import CardInfo2 from '../components/Cards/CardInfo2' ;

	// Counter Widgets stats
	const stats = [
		{
			title: "设备总数",
			value: 3,
			// prefix: "$",
			suffix: "+300%",
			icon: `
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 22C9 22.5523 8.55228 23 8 23C7.44772 23 7 22.5523 7 22C7 21.4477 7.44772 21 8 21C8.55228 21 9 21.4477 9 22ZM13 22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22C11 21.4477 11.4477 21 12 21C12.5523 21 13 21.4477 13 22ZM16 23C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C9 2.55228 8.55228 3 8 3C7.44772 3 7 2.55228 7 2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2ZM13 2C13 2.55228 12.5523 3 12 3C11.4477 3 11 2.55228 11 2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2ZM16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3ZM9 22C9 22.5523 8.55228 23 8 23C7.44772 23 7 22.5523 7 22C7 21.4477 7.44772 21 8 21C8.55228 21 9 21.4477 9 22ZM13 22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22C11 21.4477 11.4477 21 12 21C12.5523 21 13 21.4477 13 22ZM16 23C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23ZM23 16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16C21 16.5523 21.4477 17 22 17C22.5523 17 23 16.5523 23 16ZM23 12C23 11.4477 22.5523 11 22 11C21.4477 11 21 11.4477 21 12C21 12.5523 21.4477 13 22 13C22.5523 13 23 12.5523 23 12ZM22 7C22.5523 7 23 7.44771 23 8C23 8.55229 22.5523 9 22 9C21.4477 9 21 8.55229 21 8C21 7.44771 21.4477 7 22 7ZM2 15C2.55228 15 3 15.4477 3 16C3 16.5523 2.55228 17 2 17C1.44772 17 1 16.5523 1 16C1 15.4477 1.44772 15 2 15ZM2 11C2.55228 11 3 11.4477 3 12C3 12.5523 2.55228 13 2 13C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11ZM3 8C3 7.44771 2.55228 7 2 7C1.44772 7 1 7.44771 1 8C1 8.55229 1.44772 9 2 9C2.55228 9 3 8.55229 3 8ZM17 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V7C18 6.44772 17.5523 6 17 6ZM7 4C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4H7ZM14 10H10V14H14V10ZM8 8V16H16V8H8Z" fill="currentColor" /></svg>`,

		},
		{
			title: "设备使用率",
			value: "35%",
      // prefix: "%",
			// suffix: "+20%",
			icon: `
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 10H17V16H13V10Z" fill="currentColor" fill-opacity="0.5" /><path d="M11 4H7V16H11V4Z" fill="currentColor" /><path d="M18 18H6V20H18V18Z" fill="currentColor" /></svg>`,
		},
		// {
		// 	title: "New Clients",
		// 	value: 1200,
		// 	prefix: "+",
		// 	status: "danger",
		// 	suffix: "-20%",
		// 	icon: `
		// 				<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		// 					<path fill-rule="evenodd" clip-rule="evenodd" d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z" fill="#111827"/>
		// 				</svg>`,
		// },
		// {
		// 	title: "New Orders",
		// 	value: 13200,
		// 	prefix: "$",
		// 	suffix: "+10%",
		// 	icon: `
		// 				<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		// 					<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C7.79086 2 6 3.79086 6 6V7H5C4.49046 7 4.06239 7.38314 4.00612 7.88957L3.00612 16.8896C2.97471 17.1723 3.06518 17.455 3.25488 17.6669C3.44458 17.8789 3.71556 18 4 18H16C16.2844 18 16.5554 17.8789 16.7451 17.6669C16.9348 17.455 17.0253 17.1723 16.9939 16.8896L15.9939 7.88957C15.9376 7.38314 15.5096 7 15 7H14V6C14 3.79086 12.2091 2 10 2ZM12 7V6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6V7H12ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9Z" fill="#111827"/>
		// 				</svg>`,
		// },
	] ;




	export default ({
		components: {
      MyPagination,
			CardBarChart,
			CardLineChart,
			WidgetCounter,
			CardProjectTable,
			CardOrderHistory,
			CardInfo,
			CardInfo2,
		},
		data() {
			return {

				// Associating table data with its corresponding property.
				tableData,

				// Associating table columns with its corresponding property.
				tableColumns,

				// Counter Widgets Stats
				stats,
			}
		},
	})

</script>

<style lang="scss">
</style>