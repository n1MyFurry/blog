import React from 'react';
import Widgets from '@/components/ui/Widgets'
import Featured from '@/components/ui/Featured';
import Chart from '@/components/ui/Chart';
import AdminTable from '@/components/ui/AdminTable';

const Home = () => {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <div className="widgets flex p-5 gap-5">
        <Widgets type="user" />
        <Widgets type="order" />
        <Widgets type="earning" />
        <Widgets type="balance" />
      </div>
      <div className="charts flex pt-[5px] pb-[5px] pl-5 pr-5 gap-5">
        <Featured />
        <Chart aspect={2 / 1} title="Last 6 Months (Revenue)" />
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Posts // Show here last 5 created posts</div>
        <AdminTable />
      </div>
    </div>
  )
}

export default Home