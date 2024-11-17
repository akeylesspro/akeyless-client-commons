import {
    TableBodySCN,
    TableCaptionSCN,
    TableCellSCN,
    TableFooterSCN,
    TableHeadSCN,
    TableHeaderSCN,
    TableRowSCN,
    TableSCN,
} from "@/components/ui/table";

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
];

export function TableDemo() {
    return (
        <TableSCN>
            <TableCaptionSCN>A list of your recent invoices.</TableCaptionSCN>
            <TableHeaderSCN>
                <TableRowSCN>
                    <TableHeadSCN className="w-[100px]">Invoice</TableHeadSCN>
                    <TableHeadSCN>Status</TableHeadSCN>
                    <TableHeadSCN>Method</TableHeadSCN>
                    <TableHeadSCN className="text-right">Amount</TableHeadSCN>
                </TableRowSCN>
            </TableHeaderSCN>
            <TableBodySCN>
                {invoices.map((invoice) => (
                    <TableRowSCN key={invoice.invoice}>
                        <TableCellSCN className="font-medium">{invoice.invoice}</TableCellSCN>
                        <TableCellSCN>{invoice.paymentStatus}</TableCellSCN>
                        <TableCellSCN>{invoice.paymentMethod}</TableCellSCN>
                        <TableCellSCN className="text-right">{invoice.totalAmount}</TableCellSCN>
                    </TableRowSCN>
                ))}
            </TableBodySCN>
            <TableFooterSCN>
                <TableRowSCN>
                    <TableCellSCN colSpan={3}>Total</TableCellSCN>
                    <TableCellSCN className="text-right">$2,500.00</TableCellSCN>
                </TableRowSCN>
            </TableFooterSCN>
        </TableSCN>
    );
}
