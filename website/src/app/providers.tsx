"use client";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { createTheme, MantineProvider } from "@mantine/core";
import { MantineEmotionProvider } from "@mantine/emotion";
import { NotificationProvider } from "@/contexts/NotificationContext";

library.add(fas, fab);

const theme = createTheme({
    colors: {
        purple: [
            "#f0e4f4",
            "#d2b7d8",
            "#a78cb0",
            "#846f8a",
            "#6a5d73",
            "#514055",
            "#3b2a3f",
            "#2a1f2d",
            "#221922",
            "#1b161b"
        ]
    }
});

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <MantineProvider theme={theme}>
            <MantineEmotionProvider>
                <NotificationProvider>{children}</NotificationProvider>
            </MantineEmotionProvider>
        </MantineProvider>
    );
}
