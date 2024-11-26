import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  href: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          'transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';