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
            :Id="1"
            :name='"CHI电化学分析仪"'
            :descriptions='"CHI800D系列电化学分析仪可用于液相色谱，流动电解池，以及毛细管电泳的电化学检测，生物传感器，活体分\n"+
"析，和一般用途的电化学分析。仪器具有极高的灵敏度和极低的噪声，可检测至几个pA的电流。仪器由外部计算机控\n"+
"制，在视窗操作系统下工作。仪器内部含有数字信号发生器，16位高分辨高速数据获得系统，以及恒电位仪，双恒电位\n"+
"仪和恒电流仪。"'
            :usage="1"
            :price="10000"
            :number="1"
            :imgPath="'images/img_1.png'"></CardInfo>
				<!-- / Information Card 1 -->

			</a-col>
      <a-col :span="24" :xl="12" class="mb-24">

        <!-- Information Card 1 -->
        <CardInfo
          :Id="2"
          :name='"电化学石英晶体微天平"'
          :descriptions='"CHI400C系列电化学石英晶体微天平含石英晶体振荡器，频率计数器，快速数字信号发生器，高分辨高速数据\n"+
"采集系统，电位电流信号滤波器，信号增益，iR降补偿电路，以及恒电位仪／恒电流仪（440C）。电位范围为±10V，\n"+
"电流范围为±250mA。电流测量下限低于50pA。石英晶体微天平和恒电位仪/恒电流仪集成使得EQCM测量变得十分简单\n"+
"方便。CHI400C系列采用时间分辨的方式测量频率的改变。传统的方法是采用频率直接计数的方法，要得到1Hz的QCM\n"+
"分辨率，需要1秒的采样时间。"'
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
            :Id="3"
            :name='"扫描电化学显微镜"'
            :descriptions='"电化学扫描显微镜(SECM)发明于1989年并获得美国专利。CH Instruments与University of Taxes at Austin的化学\n"+
"系的Allen J. Bard教授合作实现了电化学扫描显微镜的仪器商品化，从而使得这一强有力的研究方法走进了更多的实验\n"+
"室。\n"+
"扫描电化学显微镜与扫描隧道显微镜(STM)的工作原理类似。但SECM测量的不是隧道电流，而是由化学物质\n"+
"氧化或还原给出的电化学电流。尽管SECM的分辨率较STM低，但SECM的样品可以是导体，绝缘体或半导体，而STM\n"+
"只限于导体表面的测量。SECM除了能给出样品表面的地形地貌外，还能提供丰富的化学信息。其可观察表面的范围也\n"+
"大得多。"'
            :usage="4"
            :price="10000"
            :number="2"
            :imgPath="'images/img_3.png'"></CardInfo>
        <!-- / Information Card 1 -->

      </a-col>
      <a-col :span="24" :xl="12" class="mb-24">

        <!-- Information Card 1 -->
        <CardInfo
            :Id="4"
            :name='"紫外可见光谱仪"'
            :descriptions='"紫外可见光谱仪，是指根据物质分子对波长为200〜760nm的电磁波的吸收特性所建立起来的一种进行定性、定量和结构分析的仪器。具有操作简单、准确度高和重现性好等特点。分光光度测量是关于物质分子对不同波长和特定波长处辐射吸收程度的测量。对应200〜400nm波长的称紫外光，400〜760nm的称可见光。仪器由五个部件组成：光源、单色器、样品池、检测器和记录仪；可分为单光束直读式分光光度计和双光束自动记录式分光光度计。该仪器广泛用于土壤中各种微量和常量的无机和有机物质的测定、无机矿物和有机物质的定性和结构分析以及土壤化学过程（络合-解析、溶解沉淀、酸碱离解常数等），也用于植物营养诊断和营养品质分析，如蛋白质、淀粉、可溶性糖、维生素C和铁、锰、铜、锌、硼等元素的分析以及根系活力和多种酶活性的测定。"'
            :usage="4"
            :price="10000"
            :number="13"
            :imgPath="'images/img_4.png'"></CardInfo>
        <!-- / Information Card 1 -->

      </a-col>
		</a-row>


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
			value: 4,
			// prefix: "$",
			// suffix: "+300%",
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

				// // Associating table data with its corresponding property.
				// tableData,
        //
				// // Associating table columns with its corresponding property.
				// tableColumns,

				// Counter Widgets Stats
				stats,
			}
		},
	})

</script>

<style lang="scss">
</style>