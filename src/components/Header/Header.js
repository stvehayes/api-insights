import { useContext, useState } from 'react';
import {
  ActionMenu,
  ActionList,
  Box,
  Heading,
  Link,
  Text,
} from '@primer/react';
import { timePeriods, timeIncrements } from '../../data/Data';
import { useLocation } from 'react-router-dom';
import { IncrementContext } from '../../context/IncrementContext';
import { PeriodContext } from '../../context/PeriodContext';
import { convertMinutes } from '../../util/Helpers';

export function Header() {
  const location = useLocation().pathname;
  const { selectedIncrement, setSelectedIncrement } =
    useContext(IncrementContext);
  const { selectedPeriod, setSelectedPeriod } = useContext(PeriodContext);

  return (
    <>
      <Box
        sx={{
          pb: 2,
          borderBottom: '1px solid',
          borderColor: 'border.default',
          width: '100%',
          alignSelf: 'flex-start',
          display: 'flex',
          flexDirection: ['column', null, 'row'],
          gap: 2,
          mb: 3,
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Heading sx={{ fontSize: 3, display: 'inline' }}>API</Heading>
        </Box>
        <ActionMenu>
          <ActionMenu.Button>
            <Box sx={{ color: 'fg.muted', display: 'inline-block' }}>
              Period:
            </Box>{' '}
            {convertMinutes(selectedPeriod)}
          </ActionMenu.Button>{' '}
          <ActionMenu.Overlay align='end'>
            <ActionList selectionVariant='single'>
              {timePeriods.map((period, index) => (
                <ActionList.Item
                  key={index}
                  selected={period.value === selectedPeriod}
                  onSelect={() => setSelectedPeriod(period.value)}
                  value={period.value}
                >
                  {period.type}
                </ActionList.Item>
              ))}
              <ActionList.Divider />
              <ActionList.Item onSelect={() => alert('Delete file clicked')}>
                Custom time range
              </ActionList.Item>
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
        <ActionMenu>
          <ActionMenu.Button>
            <Box sx={{ color: 'fg.muted', display: 'inline-block' }}>
              Increment:
            </Box>{' '}
            {convertMinutes(selectedIncrement)}
          </ActionMenu.Button>
          <ActionMenu.Overlay align='end'>
            <ActionList selectionVariant='single'>
              {timeIncrements.map((period, index) => (
                <ActionList.Item
                  key={index}
                  selected={period.value === selectedIncrement}
                  disabled={period.value > selectedPeriod}
                  onSelect={() => setSelectedIncrement(period.value)}
                >
                  {period.type}
                </ActionList.Item>
              ))}
              <ActionList.Divider />
              <ActionList.Item onSelect={() => alert('Delete file clicked')}>
                Custom time range
              </ActionList.Item>
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
      </Box>
    </>
  );
}
