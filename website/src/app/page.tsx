"use client";

import { createStyles } from "@mantine/emotion";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import { MOBILE_BREAKPOINT } from "@/utils/breakpoints";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
    wrapper: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "80px",
        padding: "0 40px",
        backgroundColor: theme.colors.purple[8],
        borderBottom: `1px solid ${theme.colors.purple[6]}`,

        [`@media (max-width: ${MOBILE_BREAKPOINT}px)`]: {
            padding: "0 20px"
        }
    },
    dashboardButton: {
        backgroundColor: theme.colors.purple[6],
        border: `1px solid ${theme.colors.purple[5]}`,
        transition: "all 0.2s ease",

        "&:hover": {
            backgroundColor: theme.colors.purple[7],
            transform: "translateY(-2px)"
        }
    },
    content: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        padding: "0 20px",
        textAlign: "center"
    },
    title: {
        fontSize: 48,
        fontWeight: 700,
        background: `linear-gradient(45deg, ${theme.colors.blue[4]}, ${theme.colors.purple[3]})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",

        [`@media (max-width: ${MOBILE_BREAKPOINT}px)`]: {
            fontSize: 36
        }
    },
    description: {
        fontSize: 18,
        color: theme.colors.gray[4],
        maxWidth: 600,
        lineHeight: 1.6,

        [`@media (max-width: ${MOBILE_BREAKPOINT}px)`]: {
            fontSize: 16
        }
    },
    statsContainer: {
        display: "flex",
        gap: 48,
        marginTop: 16,

        [`@media (max-width: ${MOBILE_BREAKPOINT}px)`]: {
            flexDirection: "column",
            gap: 24
        }
    },
    statItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8
    },
    statValue: {
        fontSize: 32,
        fontWeight: 700,
        color: theme.colors.blue[4]
    },
    statLabel: {
        fontSize: 14,
        color: theme.colors.gray[5],
        textTransform: "uppercase",
        letterSpacing: "0.5px"
    },
    ctaButton: {
        backgroundColor: theme.colors.purple[6],
        border: `1px solid ${theme.colors.purple[5]}`,
        fontSize: 16,
        fontWeight: 600,
        transition: "all 0.2s ease",

        "&:hover": {
            backgroundColor: theme.colors.purple[7],
            transform: "translateY(-2px)"
        }
    }
}));

const Home = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <nav className={classes.navbar}>
                <Text size="xl" weight={700}>
                    Echelon
                </Text>
                <Link href="/dashboard">
                    <Button className={classes.dashboardButton}>
                        Open dashboard
                    </Button>
                </Link>
            </nav>

            <main className={classes.content}>
                <Text className={classes.title}>Multipurpose Discord Bot</Text>
                <Text className={classes.description}>
                    We offer you a <b>powerful</b> Discord Bot with a lot of
                    awesome features and a dashboard to manage your bot. We
                    currently offer everything <b>for free!</b>
                </Text>

                <div className={classes.statsContainer}>
                    <div className={classes.statItem}>
                        <Text className={classes.statValue}>500+</Text>
                        <Text className={classes.statLabel}>
                            Active Servers
                        </Text>
                    </div>
                    <div className={classes.statItem}>
                        <Text className={classes.statValue}>50K+</Text>
                        <Text className={classes.statLabel}>Users</Text>
                    </div>
                </div>

                <Link href="/discord">
                    <Button
                        className={classes.ctaButton}
                        leftIcon={["fab", "discord"]}
                        size="lg"
                    >
                        Add to Discord
                    </Button>
                </Link>
            </main>
        </div>
    );
};

export default Home;
