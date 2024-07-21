import { useState, useRef } from 'react';
import { Dialog, Button, Box, Text, IconButton } from '@primer/react';
import {
  AlertIcon,
  AppsIcon,
  FilterIcon,
  KeyAsteriskIcon,
  PersonIcon,
  PlusIcon,
  TriangleDownIcon,
  XIcon,
} from '@primer/octicons-react';

export function Filters({ count }) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState([
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
      name: 'API client',
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
      name: 'Rate limited',
      options: [{ label: 'True', value: 'option' }],
      operator: 'is',
      icon: AlertIcon,
      selected: true,
    },
  ]);

  const returnFocusRef = useRef(null);

  const removeFilter = (indexToRemove) => {
    setFilters(filters.filter((_, index) => index !== indexToRemove));
  };

  const labels = ['Qualifier', 'Operator', 'Value'];

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
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              p: 2,
              pl: 7,
              pr: 11,
              bg: 'canvas.subtle',
              borderBottom: '1px solid',
              borderColor: 'border.default',
            }}
          >
            <Text
              sx={{
                width: '400px',
                fontSize: 0,
                fontWeight: 'bold',
                color: 'fg.muted',
              }}
            >
              Qualifier
            </Text>
            <Text
              sx={{
                width: '300px',
                fontSize: 0,
                fontWeight: 'bold',
                color: 'fg.muted',
              }}
            >
              Operator
            </Text>
            <Text
              sx={{
                width: '100%',
                fontSize: 0,
                fontWeight: 'bold',
                color: 'fg.muted',
              }}
            >
              Value
            </Text>
          </Box>

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
                <Box
                  sx={{
                    fontSize: '12px',
                    color: 'fg.muted',
                    mr: 3,
                  }}
                >
                  {index + 1}
                </Box>

                <Box
                  key={filter.name}
                  sx={{
                    ...fakeDropdown,
                    width: '400px',
                  }}
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
                    aria-label='Remove filter'
                    sx={{ color: 'fg.subtle' }}
                    variant='invisible'
                    onClick={() => removeFilter(index)}
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
            justifyContent: 'space-between',
          }}
        >
          <Button leadingVisual={PlusIcon}>Add a filter</Button>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
            <Button
              variant='primary'
              onClick={() => setIsOpen(false)}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
