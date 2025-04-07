import ExcelJS, { Alignment } from "exceljs";
import { saveAs } from "file-saver";
import { Direction } from "src/types";

interface ExcelColumn {
    header: string;
    key: string;
    width?: number;
}

interface ExportExcelOptions<T> {
    columns: ExcelColumn[];
    data: T[];
    headline?: string;
    fileName: string;
    cellStyle?: Partial<Alignment>;
    direction?: Direction;
}

export const exportToExcel = async <T,>({ columns, data, headline, fileName, cellStyle, direction }: ExportExcelOptions<T>): Promise<void> => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Report");
    worksheet.views = [{ rightToLeft: direction === "rtl" }];

    // Apply default width and assign columns
    worksheet.columns = columns.map((col) => ({
        header: col.header,
        key: col.key,
        width: col.width || 18,
    }));

    // Insert title row and merge cells
    if (headline) {
        worksheet.spliceRows(1, 0, []);
        const titleRow = worksheet.getRow(1);
        titleRow.values = [headline];
        worksheet.mergeCells(1, 1, 1, columns.length);
        titleRow.font = { bold: true, size: 16 };
        titleRow.alignment = { horizontal: "center" };
    }

    // Add data rows
    data.forEach((rowData) => {
        const row = worksheet.addRow(rowData);
        row.eachCell((cell) => {
            if (typeof cell.value === "string" && cell.value.startsWith("https://")) {
                cell.value = { text: cell.value, hyperlink: cell.value };
                cell.font = { color: { argb: "FF0000FF" }, underline: true };
            }
            cell.alignment = cellStyle;
        });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, fileName || "export.xlsx");
};
