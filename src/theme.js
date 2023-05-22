import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const styles = {
    global: (props) => ({
        body: {
            bg: mode(
                // light mode value retrieved from theme
                props.theme.semanticTokens.colors['chakra-body-bg']._light,
                // your custom value for dark mode
                '#000',
              )(props),
        }
    })
}

export default extendTheme({config, styles});