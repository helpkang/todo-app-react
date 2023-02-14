import { createTheme } from "@mui/material/styles";

export const shades = {
    light: {
        100: "#hsl(0, 0%, 98%)",
        200: "hsl(236, 33%, 92%)",
        300: "hsl(234, 39%, 85%)",
        400: "hsl(236, 9%, 61%)",
        500: "hsl(234, 11%, 52%)",
        600: "hsl(235, 19%, 35%)",
        700: "hsl(237, 14%, 26%)",
        800: "hsl(235, 24%, 19%)",
        900: "hsl(235, 21%, 11%)",
    },

    dark: {
        100: "hsl(235, 21%, 11%)",
        200: "hsl(235, 24%, 19%)",
        300: "hsl(237, 14%, 26%)",
        400: "hsl(235, 19%, 35%)",
        500: "hsl(234, 11%, 52%)",
        600: "hsl(236, 9%, 61%)",
        700: "hsl(234, 39%, 85%)",
        800: "hsl(236, 33%, 92%)",
        900: "#hsl(0, 0%, 98%)",
    },

    accent: {
        100: "hsl(192, 100%, 67%)",
        200: "hsl(220, 98%, 61%)",
        300: "hsl(280, 87%, 65%)",
    },
};

declare module "@mui/material/styles" {
    interface Theme {
        palette: {
            primary: {
                main: string;
                dark: string;
                light: string;
            };
            secondary: {
                main: string;
                dark: string;
                light: string;
            };
            accent: {
                main: string;
            };
        };
    }

}

export const theme = createTheme({
    palette: {
        primary: {
            main: shades.dark[500],
            dark: shades.dark[500],
            light: shades.light[500],
        },
        secondary: {
            main: shades.dark[700],
            dark: shades.dark[700],
            light: shades.light[700],
        },
    },
});
