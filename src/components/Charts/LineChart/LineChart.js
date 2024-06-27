import { useContext } from 'react';
import { Box, Text } from '@primer/react';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { convertHexToRGB, convertMinutes } from '../../../util/Helpers';
import { IncrementContext } from '../../../context/IncrementContext';
import { PeriodContext } from '../../../context/PeriodContext';

export function LineChart() {
  const colorGood = '#0969DA';
  const colorBad = '#CF222E';

  const { selectedIncrement } = useContext(IncrementContext);
  const { selectedPeriod } = useContext(PeriodContext);

  const labels = [
    {
      name: 'Total requests',
      color: 'accent.emphasis',
    },
    {
      name: 'Rate-limited requests',
      color: 'danger.emphasis',
    },
  ];

  const incrementsPerPeriod = Math.ceil(selectedPeriod / selectedIncrement);

  const Data = Array.from({ length: incrementsPerPeriod }, (_, index) => ({
    id: index + 1,
    time: index * selectedIncrement,
    requests: Math.floor(Math.random() * (5400 - 1200 + 1)) + 1200,
    requestsFailed: Math.floor(Math.random() * (1000 - 100 + 1)),
  }));

  const data = {
    labels: Data.map((data) => {
      const hours = Math.floor(data.time / 60);
      const minutes = data.time % 60;
      return `${hours}:${minutes.toString().padStart(2, '0')}`;
    }),
    datasets: [
      {
        label: 'Requests',
        data: Data.map((data) => data.requests),
        fill: true,
        borderColor: colorGood,
        borderWidth: 1,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 250);
          gradient.addColorStop(0, convertHexToRGB(colorGood, 0.25));
          gradient.addColorStop(1, convertHexToRGB(colorGood, 0.0));
          return gradient;
        },
        pointHoverBackgroundColor: colorGood,
      },
      {
        label: 'Rate-limited requests',
        data: Data.map((data) => data.requestsFailed),
        fill: true,
        borderColor: colorBad,
        borderWidth: 1,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, convertHexToRGB(colorBad, 0.1));
          gradient.addColorStop(1, convertHexToRGB(colorBad, 0.0));
          return gradient;
        },
        pointHoverBackgroundColor: colorBad,
      },
    ],
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '300px',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          pl: 0,
        }}
      >
        {labels.map((label) => (
          <Box key={label.name}>
            <Box
              sx={{
                height: '8px',
                width: '8px',
                borderRadius: '100%',
                backgroundColor: label.color,
                display: 'inline-block',
                mr: 2,
              }}
            />
            <Text
              sx={{
                fontSize: 0,
              }}
            >
              {label.name}
            </Text>
          </Box>
        ))}
      </Box>
      <Line
        data={data}
        options={{
          tooltips: {
            backgroundColor: 'red',
            bodyFontColor: '#000',
            bodyFontSize: 14,
            displayColors: true,
          },
          maintainAspectRatio: false,
          height: '340px',
          responsive: true,
          interaction: {
            intersect: false,
            mode: 'nearest',
            axis: 'xy',
          },
          elements: {
            point: {
              radius: 0,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (val) => {
                  return val / 1000 + 'k';
                },
                padding: 12,
              },
              border: {
                dash: [3, 3],
              },
            },
            x: {
              beginAtZero: true,
              border: {
                dash: [3, 3],
              },
            },
          },
          plugins: {
            title: {
              display: false,
              text: 'Total requests made by this organization',
            },
            legend: {
              display: false,
              position: 'top',
              align: 'start',
              labels: {
                boxWidth: 8,
                boxHeight: 8,
                useBorderRadius: true,
                pointStyle: 'circle',
                borderRadius: 4,
              },
            },
            datalabels: {
              formatter: (value) => {
                if (value > 1000) {
                  return value / 1000 + 'k';
                }
                return value;
              },
            },
          },
        }}
      />
    </Box>
  );
}
