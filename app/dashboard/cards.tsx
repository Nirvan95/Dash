import { fetchCardData } from '@/app/lib/data';
import { Card } from '../ui/dashboard/cards';

// export default async function CardsWrapper({}){
//     const {totalPaidInvoices,totalPendingInvoices, numberOfInvoices ,numberOfCustomers} = await fetchCardData();
// return <>
//         <Card title="Collected" value={totalPaidInvoices} type="collected" />
//         <Card title="Pending" value={totalPendingInvoices} type="pending" />
//         <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
//         <Card
//           title="Total Customers"
//           value={numberOfCustomers}
//           type="customers"
//         />
//         </>
// }

export default async function CardWrapper() {
    const {
      numberOfInvoices,
      numberOfCustomers,
      totalPaidInvoices,
      totalPendingInvoices,
    } = await fetchCardData();
   
    return (
      <>
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </>
    );
  }