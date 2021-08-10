import { Box, Typography } from "@material-ui/core";
import { memo } from "react";
import useStyles from "./styles";

import Pagination from "@material-ui/lab/Pagination";
import { GridColDef, GridCellParams, DataGrid } from "@material-ui/data-grid";
import { getListReportProduct } from "./utils";
import { useQuery } from "react-query";
import Header from "../Header";
export const getColumns = (): GridColDef[] => [
  {
    field: "id",
    headerName: "ID",
    type: "number",
    disableColumnMenu: true,
    renderCell: (params: GridCellParams) => <p>{params.value}</p>,
    width: 50,
    align: "center",
    sortable: false,
    headerAlign: "center",
    resizable: true,
  },
  {
    field: "title",
    headerName: "Tiêu đề",
    renderCell: (params) => {
      const id = params.row?.title ? params.row?.title : "";

      return <p>{id}</p>;
    },
    flex: 0.3,
    disableColumnMenu: true,
    align: "left",
    sortable: false,
  },
  {
    field: "content",
    headerName: "Nội dung",
    valueGetter: (params) => params.row?.content,
    renderCell: (params) => {
      return <p>{params.value}</p>;
    },
    sortable: false,
    disableColumnMenu: true,
    flex: 0.4,
  },
  {
    field: "product_id",
    headerName: "ID sản phẩm",
    renderCell: (params: GridCellParams) => {
      return <p>{params.value}</p>;
    },
    disableColumnMenu: true,
    sortable: false,
    flex: 0.2,
  },
  {
    field: "created_at",
    headerName: "Thời gian tạo",
    renderCell: (params: GridCellParams) => {
      return <p>{params.value}</p>;
    },
    disableColumnMenu: true,
    sortable: false,
    flex: 0.2,
  },
];

const ReportComponent: React.FC = () => {
  const { data } = useQuery(["reports"], getListReportProduct, {
    refetchOnWindowFocus: false,
  });
  const css = useStyles();
  return (
    <>
      <Header />
      <section className="paper-content">
        <Box className={css.root} mt={3} padding="24px">
          <Typography variant="h5" className={css.title}>
            Danh sách báo lỗi
          </Typography>
          <div className={css.table}>
            <DataGrid
              rows={data}
              columns={getColumns()}
              autoHeight
              className={css.root}
              rowCount={data?.length}
              components={{
                Pagination: Pagination,
              }}
              componentsProps={{
                pagination: {
                  //   page: currentPage + 1,
                  //   onChange: onPageChange,
                  count: data.total,
                },
              }}
            />
          </div>
        </Box>
      </section>
    </>
  );
};
const Report = memo(ReportComponent);
Report.displayName = "Report";

export default Report;
