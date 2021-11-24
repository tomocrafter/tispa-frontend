import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes';

import {
  ColorMode,
  ColorModeProvider,
  CSSReset,
  GlobalStyle,
  PortalManager,
  theme,
  ThemeProvider as ChakraThemeProvider,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

// ref. https://github.com/pacocoursey/next-themes/issues/59#issuecomment-968366980

function CustomChakraProvider({ children }: PropsWithChildren<{}>) {
  const { resolvedTheme } = useNextTheme();

  return (
    <ChakraThemeProvider theme={theme}>
      <ColorModeProvider
        options={{
          initialColorMode: 'dark',
        }}
        value={resolvedTheme as ColorMode}
      >
        <GlobalStyle />
        <CSSReset />
        <PortalManager>{children}</PortalManager>
      </ColorModeProvider>
    </ChakraThemeProvider>
  );
}

export function ThemeProvider({ children }: PropsWithChildren<{}>) {
  return (
    <NextThemeProvider>
      <CustomChakraProvider>{children}</CustomChakraProvider>
    </NextThemeProvider>
  );
}
