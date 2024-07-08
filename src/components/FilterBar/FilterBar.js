import {
  ActionMenu,
  ActionList,
  Box,
  Button,
  Text,
  TextInput,
} from '@primer/react';
import { TriangleDownIcon, XCircleFillIcon } from '@primer/octicons-react';
import { Filters } from '../Filters/Filters';

export function FilterBar({ count, empty }) {
  const filters = [
    { name: 'Type', selected: true },
    {
      name: 'User',
      selected: false,
    },
  ];

  const sorts = [
    {
      name: 'Recent',
      selected: true,
    },
    {
      name: 'Most rate-limited',
      selected: false,
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
        }}
      >
        <Filters
          empty
          count={count}
        />
        <Box
          sx={{
            position: 'relative',
            mb: 3,
            width: '100%',
          }}
        >
          <TextInput
            sx={{
              width: '100%',
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              pl: empty ? 0 : '108px',
            }}
            trailingAction={
              !empty && (
                <TextInput.Action
                  icon={XCircleFillIcon}
                  aria-label='Clear input'
                  sx={{ color: 'fg.subtle' }}
                />
              )
            }
          />
          {!empty && (
            <Box
              sx={{
                position: 'absolute',
                left: 2,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: 1,
                display: 'flex',
              }}
            >
              <Text>rate-limited:</Text>
              <Text
                sx={{
                  bg: 'accent.subtle',
                  borderRadius: 1,
                  px: 1,
                  color: 'accent.emphasis',
                }}
              >
                true
              </Text>
            </Box>
          )}
        </Box>
        <ActionMenu>
          <ActionMenu.Button sx={{ ml: 2 }}>
            <Box sx={{ color: 'fg.muted', display: 'inline-block' }}>
              Group by:
            </Box>{' '}
            {filters.find((filter) => filter.selected).name}
          </ActionMenu.Button>{' '}
          <ActionMenu.Overlay align='end'>
            <ActionList selectionVariant='single'>
              {filters.map((filter, index) => (
                <ActionList.Item
                  selected={filter.selected}
                  key={filter.index}
                >
                  {filter.name}
                </ActionList.Item>
              ))}
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
        <ActionMenu>
          <ActionMenu.Button sx={{ ml: 2 }}>
            <Box sx={{ color: 'fg.muted', display: 'inline-block' }}>
              Sort by:
            </Box>{' '}
            {sorts.find((sort) => sort.selected).name}
          </ActionMenu.Button>{' '}
          <ActionMenu.Overlay align='end'>
            <ActionList selectionVariant='single'>
              {sorts.map((filter, index) => (
                <ActionList.Item
                  selected={filter.selected}
                  key={filter.index}
                >
                  {filter.name}
                </ActionList.Item>
              ))}
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
      </Box>
    </>
  );
}
