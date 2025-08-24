import * as React from 'react';
import { createLink, type LinkComponent } from '@tanstack/react-router';
import { NavLink as MantineNavLink, type NavLinkProps } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MantineNavLinkProps extends Omit<NavLinkProps, 'href'> {
  // Add any additional props you want to pass to the anchor
}

const MantineLinkComponent = React.forwardRef<
  HTMLAnchorElement,
  MantineNavLinkProps
>((props, ref) => {
  return <MantineNavLink ref={ref} {...props} />;
});

const CreatedLinkComponent = createLink(MantineLinkComponent);

export const NavLink: LinkComponent<typeof MantineLinkComponent> = (props) => {
  return <CreatedLinkComponent preload="intent" {...props} />;
};
