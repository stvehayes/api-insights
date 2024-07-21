import React, { useContext, useState } from 'react';
import {
  ActionMenu,
  ActionList,
  Box,
  TextInput,
  IconButton,
} from '@primer/react';
import { SearchIcon } from '@primer/octicons-react';
import { SearchContext } from '../../context/SearchContext';

export function FilterBar() {
  const [filters, setFilters] = useState([
    { name: 'All', selected: false },
    { name: 'Rate limited', selected: true },
  ]);

  const [sorts, setSorts] = useState([
    { name: 'All', selected: true },
    { name: 'GitHub apps', selected: false },
    { name: 'OAuth apps', selected: false },
    { name: 'Personal access tokens', selected: false },
  ]);

  const handleSortSelect = (index) => {
    setSorts(sorts.map((sort, i) => ({ ...sort, selected: i === index })));
  };

  const handleFilterSelect = (index) => {
    setFilters(
      filters.map((filter, i) => ({ ...filter, selected: i === index }))
    );
  };

  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const location = window.location.pathname;
  const showFilters = location === '/' || location === '/username';

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            mb: 3,
            width: '100%',
          }}
        >
          <TextInput
            placeholder='Search by app or user'
            value={searchValue}
            onChange={handleChange}
            sx={{
              width: '100%',
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderRight: 0,
            }}
          />
          <IconButton
            icon={SearchIcon}
            sx={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
          />
        </Box>
        {showFilters && (
          <>
            <ActionMenu>
              <ActionMenu.Button sx={{ ml: 2 }}>
                <Box sx={{ color: 'fg.muted', display: 'inline-block' }}>
                  Type:
                </Box>{' '}
                {sorts.find((sort) => sort.selected).name}
              </ActionMenu.Button>{' '}
              <ActionMenu.Overlay
                align='end'
                width='small'
              >
                <ActionList selectionVariant='single'>
                  {sorts.map((sort, index) => (
                    <ActionList.Item
                      selected={sort.selected}
                      key={index}
                      onSelect={() => handleSortSelect(index)}
                    >
                      {sort.name}
                    </ActionList.Item>
                  ))}
                </ActionList>
              </ActionMenu.Overlay>
            </ActionMenu>

            <ActionMenu>
              <ActionMenu.Button sx={{ ml: 2 }}>
                <Box sx={{ color: 'fg.muted', display: 'inline-block' }}>
                  Requests:
                </Box>{' '}
                {filters.find((filter) => filter.selected).name}
              </ActionMenu.Button>{' '}
              <ActionMenu.Overlay align='end'>
                <ActionList selectionVariant='single'>
                  {filters.map((filter, index) => (
                    <ActionList.Item
                      selected={filter.selected}
                      key={index}
                      onSelect={() => handleFilterSelect(index)}
                    >
                      {filter.name}
                    </ActionList.Item>
                  ))}
                </ActionList>
              </ActionMenu.Overlay>
            </ActionMenu>
          </>
        )}
      </Box>
    </>
  );
}
