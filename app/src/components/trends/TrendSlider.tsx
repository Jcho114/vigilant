import React, { useState } from 'react';
import './TrendSlider.css';
import { useEffect } from 'react';

const TrendSlider: React.FC = () => {
  const startDate = new Date('2024-01-23T00:00:00');
  const endDate = new Date('2024-01-28T23:59:59');

  const [sliderValue, setSliderValue] = useState<number>(roundToNearestHour(startDate.getTime()));

  useEffect(() => {
    async function fetchData() {
      try {
        const formattedStartDate = startDate.toISOString();
        const formattedEndDate = endDate.toISOString();

        const url = `http://localhost:3001/api/v1/report?startDate=${encodeURIComponent(formattedStartDate)}&endDate=${encodeURIComponent(formattedEndDate)}`;
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
          throw new Error('HTTP error! Status: ${response.status}');
        }
  
        const reports = await response.json();
        
        console.log(reports);
      } catch (error) {
        console.error('Error fetching data:');
      }
    }
  
    fetchData();
  }, [sliderValue]);
  

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  const formatSliderValue = (value: number): string => {
    const selectedDate = new Date(value);
    return selectedDate.toISOString().substring(0, 10);
  };

  return (
    <div className="trend-slider-container">
      <p className="trend-slider-label">Selected Date: {formatSliderValue(sliderValue)}</p>
      <input
        type="range"
        min={roundToNearestHour(startDate.getTime())}
        max={roundToNearestHour(endDate.getTime())}
        step={60 * 60 * 1000} // Step in milliseconds, here set to 1 hour
        value={sliderValue}
        onChange={(e) => handleSliderChange(Number(e.target.value))}
        className="trend-slider-input"
      />
    </div>
  );
};

export default TrendSlider;

const roundToNearestHour = (timestamp: number): number => {
  return Math.round(timestamp / (60 * 60 * 1000)) * (60 * 60 * 1000);
};
