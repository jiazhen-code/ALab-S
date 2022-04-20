<!-- 
	This is the tables page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
	<div>

		<!-- / Projects Table -->
    <a-row :gutter="24" type="flex">

      <!-- Projects Table Column -->
      <a-col :span="24" class="mb-24">

        <!-- Projects Table Column -->
        <CardProjectTable
            :dataSource="tableData"
            :columns="tableColumns"
        ></CardProjectTable>
        <!-- / Projects Table Column -->

      </a-col>
      <!-- / Projects Table Column -->

    </a-row>
    <a-row>
      <Flow></Flow>
    </a-row>
	</div>
</template>

<script>
  import CardProjectTable from "@/components/Cards/CardProjectTable";
  import Flow from "@/components/Flows/Flow";
  // "Projects" table list of columns and their properties.
  const tableColumns = [
    {
      title: '实验名称',
      dataIndex: 'experiment',
      scopedSlots: { customRender: 'experiment' },
      width: 300,
    },
    {
      title: '参与人员',
      dataIndex: 'members',
      scopedSlots: { customRender: 'members' },
    },
    {
      title: '开始时间',
      dataIndex: 'time',
      class: 'font-bold text-muted text-sm',
    },
    {
      title: '当前进度',
      scopedSlots: { customRender: 'completion' },
      dataIndex: 'completion',
    },
    {
      title: '',
      scopedSlots: { customRender: 'editBtn' },
      width: 50,
    },
    // {
    //   title: '',
    //   scopedSlots: { customRender: 'stopBtn' },
    //   width: 50,
    // },
  ];

  // "Projects" table list of rows and their properties.
  const tableData = [
    {
      key: '1',
      experiment: {
        name: 'Soft UI Shopify Version',
        logo: 'images/logos/logo-shopify.svg',
      },
      members: [ "images/face-1.jpg", "images/face-4.jpg", "images/face-2.jpg", "images/face-3.jpg", ],
      time: '2022-4-18 20:00',
      completion: {
        label: '24%',
        status: 'normal',
        value: 24,
      },
    },
    {
      key: '2',
      experiment: {
        name: 'Progress Track',
        logo: 'images/logos/logo-atlassian.svg',
      },
      members: [ "images/face-4.jpg", "images/face-3.jpg", ],
      time: '2022-4-18 20:00',
      completion: {
        label: '60%',
        status: 'normal',
        value: 60,
      },
    },
    {
      key: '3',
      experiment: {
        name: 'Fix Platform Errors',
        logo: 'images/logos/logo-slack.svg',
      },
      members: [ "images/face-1.jpg", "images/face-2.jpg", "images/face-3.jpg", ],
      time: '2022-4-18 20:00',
      completion: {
        label: '100%',
        status: 'success',
        value: 100,
      },
    },
    {
      key: '4',
      experiment: {
        name: 'Launch new Mobile App',
        logo: 'images/logos/logo-spotify.svg',
      },
      members: [ "images/face-1.jpg", "images/face-2.jpg", ],
      time: '2022-4-18 20:00',
      completion: {
        label: '100%',
        status: 'success',
        value: 100,
      },
    },
    {
      key: '5',
      experiment: {
        name: 'Add the New Landing Page',
        logo: 'images/logos/logo-jira.svg',
      },
      members: [ "images/face-1.jpg", "images/face-4.jpg", "images/face-2.jpg", "images/face-3.jpg", ],
      time: '2022-4-18 20:00',
      completion: {
        label: 'error',
        status: 'exception',
        value: 100,
      },
    },
    // {
    // 	key: '6',
    //   experiment: {
    // 		name: 'Redesign Online Store',
    // 		logo: 'images/logos/logo-invision.svg',
    // 	},
    // 	members: [ "images/face-1.jpg", "images/face-4.jpg", "images/face-3.jpg", ],
    // 	budget: '$2,000',
    // 	completion: {
    // 		label: 'Cancelled',
    // 		status: 'exception',
    // 		value: 100,
    // 	},
    // },
  ];

	export default ({
		components: {
			CardProjectTable,
      Flow
		},
		data() {
			return {
				// Associating "Authors" table data with its corresponding property.
				tableData: tableData,

				// Associating "Authors" table columns with its corresponding property.
				tableColumns: tableColumns
			}
		},
	})

</script>

<style lang="scss">
</style>