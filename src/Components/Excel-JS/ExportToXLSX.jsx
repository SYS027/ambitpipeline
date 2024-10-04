import ExcelJS from "exceljs";

export const ExportToXLSX = async (data, filename, customHeaders) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sheet1");
  const headerRow = worksheet.addRow(customHeaders);

  headerRow.eachCell((cell, index) => {
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFC0C0C0" },
    };
    cell.font = {
      bold: true,
      color: { argb: "FF000000" },
    };
    cell.alignment = { vertical: "middle", horizontal: "center" };
    cell.border = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    };

    const column = worksheet.getColumn(index + 1);
    column.width = 20;
    cell.height = 50;
  });

  data.forEach((item) => {
    const row = customHeaders.map((header) => item[header]);
    worksheet.addRow(row);
  });

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.download = `${filename}.xlsx`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

