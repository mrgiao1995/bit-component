import React, { ReactNode } from 'react';

export type HelloWorldProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function HelloWorld({ children }: HelloWorldProps) {
  return (
    <div>
      {children}
    </div>
  );
}
