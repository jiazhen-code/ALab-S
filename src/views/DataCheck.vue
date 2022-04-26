<!-- 
	This is the billing page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
	<div>

		<a-row type="flex" :gutter="24">


			<!-- Invoices Column -->
			<a-col :span="24" :md="24" class="mb-24">

				<!-- Invoices Card -->
				<CardInvoices
					:data="invoiceData"
				></CardInvoices>
				<!-- / Invoices Card -->

			</a-col>
			<!-- / Invoices Column -->

		</a-row>

		<a-row type="flex" :gutter="24">

			<!-- Billing Information Column -->
			<a-col :span="12" :md="12" class="mb-24">

				<!-- Billing Information Card -->
				<CardBillingInfo></CardBillingInfo>
				<!-- / Billing Information Card -->

			</a-col>
			<!-- Billing Information Column -->

			<!-- Your Transactions Column -->
			<a-col :span="24" :md="12" class="mb-24">

				<!-- Your Transactions Card -->
				<CardTransactions
					:data="transactionsData"
				></CardTransactions>
				<!-- / Your Transactions Card -->

			</a-col>
			<!-- / Your Transactions Column -->
			
		</a-row>

	</div>
</template>

<script>
	import CardPaymentMethods from "../components/Cards/CardPaymentMethods"
	import CardInvoices from "../components/Cards/CardInvoices"
	import CardBillingInfo from "../components/Cards/CardBillingInfo"
	import CardTransactions from "../components/Cards/CardTransactions"

	// Salary cards data
	const salaries = [
		{
			value: 2000,
			prefix: "+#",
			icon: `
										<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
											<g id="bank" transform="translate(0.75 0.75)">
												<path id="Shape" transform="translate(0.707 9.543)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
												<path id="Path" d="M10.25,0,20.5,9.19H0Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
												<path id="Path-2" data-name="Path" d="M0,.707H20.5" transform="translate(0 19.793)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
											</g>
										</svg>`,
			title: "Salary",
			content: "Belong Interactive",
		},
		{
			value: 49000,
			prefix: "+$",
			icon: `
										<img src="images/logos/paypal-logo-2.png" alt="">`,
			title: "Paypal",
			content: "Freelance Payment",
		},
	] ;

	// "Invoices" list data.
	const invoiceData = [
		{
			title: "实验1",
			time: "实验时间1970-01-01",
			SN: "数据编号",
		},
		{
			title: "实验2",
			time: "实验时间1970-01-01",
			SN: "数据编号",
		},
		{
			title: "实验3",
			time: "实验时间1970-01-01",
			SN: "数据编号",
		},

	] ;

	// "Your Transactions" list data.
	const transactionsData = [
		{
			period: "正在进行",
		},
		{
			title: "工序1",
			datetime: "27 March 2021, at 12:30 PM",
			amount: "21",
			type: 1,// 0 is for pending, 1 is for deposit, -1 is for withdrawal.
			status: 'processing',
		},
		{
			period: "已完成",
		},
		{
			title: "工序2",
			datetime: "26 March 2021, at 12:30 AM",
			amount: "100",
			type: 1,
			status: 'success',
		},
		{
			title: "工序3",
			datetime: "26 March 2021, at 11:30 AM",
			amount: "33",
			type: -1,
			status: 'danger',
		},

	] ;

	export default ({
		components: {
			CardPaymentMethods,
			CardInvoices,
			CardBillingInfo,
			CardTransactions,
		},
		data() {
			return {
				// Salary cards data
				salaries,

				// Associating "Invoices" list data with its corresponding property.
				invoiceData,
				
				// Associating "Your Transactions" list data with its corresponding property.
				transactionsData,
			}
		},
	})

</script>

<style lang="scss">
</style>