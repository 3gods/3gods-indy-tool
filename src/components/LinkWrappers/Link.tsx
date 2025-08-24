import * as React from 'react';
import { createLink, type LinkComponent } from '@tanstack/react-router';
import { Anchor, type AnchorProps } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MantineAnchorProps extends Omit<AnchorProps, 'href'> {
  // Add any additional props you want to pass to the anchor
}

const MantineAnchorComponent = React.forwardRef<
  HTMLAnchorElement,
  MantineAnchorProps
>((props, ref) => {
  return <Anchor ref={ref} {...props} />;
});

const CreatedLinkComponent = createLink(MantineAnchorComponent);

export const Link: LinkComponent<typeof MantineAnchorComponent> = (props) => {
  return <CreatedLinkComponent preload="intent" {...props} />;
};
