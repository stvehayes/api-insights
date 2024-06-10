import { useState, useRef } from 'react';
import { Box, Button, Dialog, Heading, Text } from '@primer/react';

export function UpgradeDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const returnFocusRef = useRef(null);

  return (
    <>
      <Button
        data-testid='trigger-button'
        ref={returnFocusRef}
        onClick={() => setIsOpen(true)}
      >
        Show Dialog
      </Button>
      <Dialog
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        returnFocusRef={returnFocusRef}
        title='Upgrade your plan'
        sx={{
          width: '640px',
        }}
      >
        <Box
          sx={{
            borderBottom: '1px solid',
            borderColor: 'border.default',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              width: '200px',
              height: '200px',
              bg: 'done.emphasis',
              borderRadius: '50%',
              filter: 'blur(100px)',
              position: 'absolute',
              zIndex: -1,
              left: 0,
              bottom: 0,
              transform: 'translate(-50%, 50%)',
            }}
          />
          <Box
            sx={{
              width: '200px',
              height: '200px',
              bg: 'accent.emphasis',
              borderRadius: '50%',
              filter: 'blur(150px)',
              position: 'absolute',
              zIndex: -1,
              left: 0,
              top: 0,
              transform: 'translate(-50%, -50%)',
            }}
          />
          <Box
            sx={{
              width: '200px',
              height: '200px',
              bg: 'done.emphasis',
              borderRadius: '50%',
              filter: 'blur(150px)',
              position: 'absolute',
              zIndex: -1,
              left: 0,
              bottom: 0,
              transform: 'translate(-50%, 50%)',
            }}
          />
          <Box
            sx={{
              width: '200px',
              height: '200px',
              bg: 'done.emphasis',
              borderRadius: '50%',
              filter: 'blur(150px)',
              position: 'absolute',
              zIndex: -1,
              right: 0,
              top: 0,
              transform: 'translate(50%, -050%)',
            }}
          />
          <Box
            boxShadow='0 8px 16px rgba(0, 0, 0, 0.08)'
            sx={{
              width: '330px',
              bg: 'canvas.default',
              height: '300px',
              borderTopLeftRadius: 2,
              borderTopRightRadius: 2,
              margin: '0 auto',
              mt: 8,
            }}
          >
            <Heading sx={{ fontSize: 1, p: 3, textAlign: 'center' }}>
              Free upgrade
            </Heading>
          </Box>
        </Box>
        <Box sx={{ p: 3, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button
            variant='primary'
            onClick={() => setIsOpen(false)}
          >
            Upgrade
          </Button>
        </Box>
      </Dialog>
    </>
  );
}
