<!-- 
	This is the dashboard page, it uses the dashboard layout in: 
	"./layouts/DashboardRTL.vue" .
 -->

<template>
	<div>
		<!-- Table & Timeline -->
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
				<CardOrderHistory></CardOrderHistory>
				<!-- / Orders History Timeline Card -->

			</a-col>
			<!-- / Timeline -->
		</a-row>
		<!-- / Table & Timeline -->

		<!-- Charts -->
		<a-row :gutter="24" type="flex" align="stretch">
			<a-col :span="24" :lg="10" class="mb-24">

				<!-- Active Users Card -->
				<CardBarChart></CardBarChart>
				<!-- Active Users Card -->

			</a-col>
			<a-col :span="24" :lg="14" class="mb-24">
				
				<!-- Sales Overview Card -->
				<CardLineChart></CardLineChart>
				<!-- / Sales Overview Card -->

			</a-col>
		</a-row>
		<!-- / Charts -->

		

		<!-- Cards -->
		<a-row :gutter="24" type="flex" align="stretch">
			<a-col :span="24" :xl="14" class="mb-24">

				<!-- Information Card 1 -->
				<CardInfo></CardInfo>
				<!-- / Information Card 1 -->

			</a-col>
		</a-row>
		<!-- / Cards -->

	</div>
</template>

<script>

	// Bar chart for "Active Users" card.
	import CardBarChart from '../components/Cards/CardBarChart' ;

	// Line chart for "Sales Overview" card.
	import CardLineChart from '../components/Cards/CardLineChart' ;

	// Counter Widgets
	import WidgetCounter from '../components/Widgets/WidgetCounter' ;

	// "Projects" table component.
	import CardProjectTable from '../components/Cards/CardProjectTable' ;

	// "Projects" table component.
	import CardOrderHistory from '../components/Cards/CardOrderHistory' ;

	// Information Card 1.
	import CardInfo from '../components/Cards/CardInfo' ;

	// Information Card 2.
	import CardInfo2 from '../components/Cards/CardInfo2' ;

	


	export default ({
		components: {
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