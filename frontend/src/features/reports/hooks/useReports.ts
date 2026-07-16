import {
  useEffect,
  useState,
} from "react";

import {
  getDashboardReport,
  type DashboardReport,
} from "../../../api/reports";

export function useReports() {

  const [report, setReport] =
    useState<DashboardReport>();

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadReport();
  }, []);

  async function loadReport() {
    try {
      const data =
        await getDashboardReport();

      setReport(data);
    } finally {
      setLoading(false);
    }
  }

  return {
    report,
    loading,
  };
}