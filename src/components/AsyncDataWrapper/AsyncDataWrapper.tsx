import { forwardRef, useEffect, useRef, useState } from 'react';
import type { AsyncDataWrapperProps } from './types';
import { Alert, Box, Center, Loader, Stack, Text } from '@mantine/core';
import { IconCircleXFilled } from '@tabler/icons-react';

const MIN_LOAD_TIME = 1000;

export const AsyncDataWrapper = forwardRef<
  HTMLDivElement,
  AsyncDataWrapperProps
>(({ children, label, loading = false, error }, ref) => {
  const loadingSinceRef = useRef(0);
  const [fakeLoading, setFakeLoading] = useState(loading);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const minLoadTime = MIN_LOAD_TIME + Math.random() * 500;

    if (loading) {
      loadingSinceRef.current = Date.now();
      setFakeLoading(true);
    }

    if (!loading) {
      const elapsed = Date.now() - loadingSinceRef.current;
      const remaining = Math.max(minLoadTime - elapsed, 0);

      if (remaining === 0) {
        setFakeLoading(false);
      } else {
        timeout = setTimeout(() => {
          setFakeLoading(false);
        }, remaining);
      }

      loadingSinceRef.current = 0;
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [loading]);

  return (
    <Box ref={ref}>
      {fakeLoading || error ? (
        <>
          {fakeLoading ? (
            <Stack p="sm">
              <Center>
                <Loader />
              </Center>
              <Center>
                <Text c="dimmed" size="sm">
                  {label}
                </Text>
              </Center>
            </Stack>
          ) : (
            <Alert
              title="Loading failed"
              c="red"
              icon={<IconCircleXFilled size={16} />}
            >
              {error?.message}
            </Alert>
          )}
        </>
      ) : (
        children
      )}
    </Box>
  );
});
