import React, { useState, useEffect } from 'react';
import './TrendReportCard.css';

const TrendReportCard = ({ report_id }: { report_id: string }) => {
  const [report, setReport] = useState<string | null>(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/v1/report?report_id=${report_id}`);
        const reportData = (await response.json())[0][" longitude"];
        console.log(reportData)
        setReport(reportData.toString());
      } catch (error) {
        console.error('Error fetching report:', error);
      }
    };

    fetchReport();
  }, [report_id]);

  return (
    <div className="trend-report-card">
      <p className="trend-report-card-title">Report: {report !== null ? report : 'Loading...'}</p>
    </div>
  );
};

export default TrendReportCard;