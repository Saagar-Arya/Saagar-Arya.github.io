import { Tooltip as ChakraTooltip, Portal } from '@chakra-ui/react';
import type { ReactNode } from 'react';

export interface TooltipProps extends ChakraTooltip.RootProps {
  content: ReactNode;
  children: ReactNode;
}

export const Tooltip = ({ content, children, ...rest }: TooltipProps) => (
  <ChakraTooltip.Root openDelay={200} closeDelay={80} {...rest}>
    <ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>
    <Portal>
      <ChakraTooltip.Positioner>
        <ChakraTooltip.Content>
          <ChakraTooltip.Arrow>
            <ChakraTooltip.ArrowTip />
          </ChakraTooltip.Arrow>
          {content}
        </ChakraTooltip.Content>
      </ChakraTooltip.Positioner>
    </Portal>
  </ChakraTooltip.Root>
);
