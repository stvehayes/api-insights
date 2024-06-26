import { useState, useRef } from 'react';
import { Dialog, Button, Box, Text, IconButton } from '@primer/react';
import {
  AlertIcon,
  AppsIcon,
  FilterIcon,
  KeyAsteriskIcon,
  PersonIcon,
  RelFilePathIcon,
  RepoIcon,
  TriangleDownIcon,
  XIcon,
} from '@primer/octicons-react';

export function Filters({ count, empty }) {
  const [isOpen, setIsOpen] = useState(false);
  const returnFocusRef = useRef(null);

  const filters = [
    {
      name: 'Type',
      options: [
        { label: 'Personal Access Token', value: 'pat' },
        { label: 'GitHub app', value: 'github' },
        { label: 'OAuth app', value: 'oauth' },
      ],
      operator: 'is',
      icon: KeyAsteriskIcon,
      selected: false,
    },
    {
      name: 'App name',
      options: [{ label: 'JIRA', value: 'option' }],
      operator: 'is one of',
      icon: AppsIcon,
      selected: false,
    },
    {
      name: 'Username',
      options: [{ label: 'stvehayes', value: 'option' }],
      operator: 'is',
      icon: PersonIcon,
      selected: false,
    },
    {
      name: 'Rate-limited',
      options: [{ label: 'True', value: 'option' }],
      operator: 'is',
      icon: AlertIcon,
      selected: true,
    },
    {
      name: 'Route',
      options: [{ label: 'route/name', value: 'option' }],
      operator: 'is',
      icon: RelFilePathIcon,
      selected: false,
    },
    {
      name: 'Path',
      options: [{ label: 'path/name', value: 'option' }],
      operator: 'is',
      icon: RelFilePathIcon,
      selected: false,
    },
    {
      name: 'Repository',
      options: [{ label: 'repo-name', value: 'option' }],
      operator: 'is one of',
      icon: RepoIcon,
      selected: false,
    },
  ];

  const fakeDropdown = {
    width: '100%',
    border: '1px solid',
    px: 2,
    py: 1,
    borderColor: 'border.default',
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    fontWeight: 'semibold',
    fontSize: 1,
  };

  return (
    <div>
      <Button
        ref={returnFocusRef}
        onClick={() => setIsOpen(true)}
        count={count || 0}
        sx={{
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderRight: 0,
        }}
        leadingVisual={FilterIcon}
      >
        Filter
      </Button>
      <Dialog
        returnFocusRef={returnFocusRef}
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
        aria-labelledby='header'
        sx={{
          width: '640px',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <div data-testid='inner'>
          <Dialog.Header
            sx={{ bg: 'canvas.default' }}
            id='filters-header'
          >
            Advanced filters
          </Dialog.Header>

          <Box p={3}>
            {filters.map((filter, index) => (
              <Box
                key={index}
                sx={{
                  fontSize: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box sx={{ fontSize: '12px', color: 'fg.muted', mr: 3 }}>
                  {index + 1}
                </Box>

                <Box
                  key={filter.name}
                  sx={fakeDropdown}
                >
                  <Box>
                    <Box sx={{ color: 'fg.muted', display: 'inline' }}>
                      <filter.icon sx={{ color: 'fg.muted' }} />
                    </Box>
                    <Text ml='2'>{filter.name}</Text>
                  </Box>
                  <TriangleDownIcon />
                </Box>

                <Box
                  sx={{
                    ...fakeDropdown,
                    width: '300px',
                  }}
                >
                  <Text>{filter.operator}</Text>
                  <TriangleDownIcon />
                </Box>
                <Box sx={fakeDropdown}>
                  <Text>{filter.options[0].label}</Text>
                  <TriangleDownIcon />
                </Box>
                <Box>
                  <IconButton
                    icon={XIcon}
                    aria-label='Edit filter'
                    sx={{ color: 'fg.subtle' }}
                    variant='invisible'
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </div>
        <Box
          sx={{
            borderTop: '1px solid',
            borderColor: 'border.default',
            p: 3,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2,
          }}
        >
          <Button onClick={() => setIsOpen(false)}>Close</Button>
          <Button
            variant='primary'
            onClick={() => setIsOpen(false)}
          >
            Save
          </Button>
        </Box>
      </Dialog>
    </div>
  );
}
