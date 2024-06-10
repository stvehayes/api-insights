import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Box } from '@primer/react';
import { LineChart } from '../Charts/LineChart/LineChart';

Chart.register(CategoryScale);

export function DataChart() {
  return (
    <Box
      sx={{
        px: 3,
        py: 3,
        textAlign: 'center',
        mb: 3,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'border.default',
        height: '360px',
      }}
    >
      <LineChart />
    </Box>
  );
}
