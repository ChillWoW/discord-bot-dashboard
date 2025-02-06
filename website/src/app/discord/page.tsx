"use client";

import Button from "@/components/ui/Button";
import Loader from "@/components/ui/Loader/Loader";
import Text from "@/components/ui/Text";
import { createStyles } from "@mantine/emotion";
import { MOBILE_BREAKPOINT } from "@/utils/breakpoints";
import { useEffect, useState } from "react";

const useStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "500px",
        height: "200px",
        backgroundColor: theme.colors.purple[8],
        border: `1px solid ${theme.colors.purple[6]}`,
        borderRadius: 7,

        [`@media (max-width: ${MOBILE_BREAKPOINT}px)`]: {
            width: "300px",
            height: "200px"
        }
    },
    button: {
        backgroundColor: theme.colors.purple[6],
        border: `1px solid ${theme.colors.purple[5]}`,
        borderRadius: 7,
        transition: "all 0.2s ease",

        "&:hover": {
            backgroundColor: theme.colors.purple[7],
            transform: "translateY(-2px)"
        }
    }
}));

const Discord = () => {
    const { classes } = useStyles();

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowButton(true);
        }, 5000);
    }, []);

    const redirectToDiscord = () => {
        window.location.href = "https://discord.gg/aDJA7WJhHe";
    };

    useEffect(() => {
        //redirectToDiscord();
    }, []);

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <Loader />
                <Text>Redirecting to Discord...</Text>
                {showButton && (
                    <Button
                        className={classes.button}
                        onClick={redirectToDiscord}
                    >
                        Redirect
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Discord;
