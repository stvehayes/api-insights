import { Box, Text, TextInput } from '@primer/react';
import { XCircleFillIcon } from '@primer/octicons-react';
import { Filters } from '../Filters/Filters';

export function FilterBar({ count, empty }) {
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
              <Text>rate limited:</Text>
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
      </Box>
    </>
  );
}
