import { Box, Text } from '@primer/react';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Data } from '../../../data/Data';

export function LineChart() {
  const labels = [
    {
      name: 'Total requests',
      color: 'success.emphasis',
    },
    {
      name: 'Rate limited requests',
      color: 'severe.emphasis',
    },
  ];

  const data = {
    labels: Data.map((data) => data.time),
    datasets: [
      {
        label: 'Requests',
        data: Data.map((data) => data.requests),
        fill: true,
        borderColor: '#2DA44E',
        borderWidth: 1,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 250);
          gradient.addColorStop(0, 'rgba(218,251,225,1)');
          gradient.addColorStop(1, 'rgba(218,251,225,0.0)');
          return gradient;
        },
        pointHoverBackgroundColor: '#2DA44E',
      },
      {
        label: 'Rate limited requests',
        data: Data.map((data) => data.requestsFailed),
        fill: true,
        borderColor: '#E16F24',
        borderWidth: 1,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(255,241,229,1)');
          gradient.addColorStop(1, 'rgba(255,241,229,0.0)');
          return gradient;
        },
        pointHoverBackgroundColor: '#E16F24',
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
                fontSize: '12px',
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
