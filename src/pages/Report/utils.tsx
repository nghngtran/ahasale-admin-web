import { getAllReports } from "../../Services";

export const getListReportProduct = async () => {
  const res = await getAllReports({
    url: "http://128.199.162.192:4000/report/list",
    params: {
      page: 0,
    },
  });
  if (res) {
    return res?.report;
  }
};
