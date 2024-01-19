import Header from './header'
import SolidarityFundContributionsTable from './solidarity-fund-contributions-table'

export default function SolidarityCollectFund() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Header />
      <div className="w-full h-full mt-4 mx-4 rounded-lg overflow-hidden shadow-lg">
        <SolidarityFundContributionsTable />
      </div>
    </div>
  )
}
