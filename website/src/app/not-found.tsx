"use client";

import { createStyles } from "@mantine/emotion";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

const useStyles = createStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 15
    },
    title: {
        fontSize: 45,
        fontWeight: 500,
        color: theme.white
    },
    text: {
        color: theme.colors.dark[1]
    },
    button: {
        marginTop: 10,
        backgroundColor: theme.colors.purple[7],
        border: `1px solid ${theme.colors.purple[6]}`,
        transition: "all 0.2s ease",

        "&:hover": {
            backgroundColor: theme.colors.purple[8],
            transform: "translateY(-2px)"
        }
    }
}));

const NotFound = () => {
    const router = useRouter();
    const { classes } = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.textContainer}>
                <Text className={classes.title}>Something went wrong.</Text>
                <Text className={classes.text}>
                    The page you are looking for does not exist or has been
                    removed.{" "}
                </Text>
            </div>
            <Button className={classes.button} onClick={() => router.push("/")}>
                Back to home page
            </Button>
        </div>
    );
};

export default NotFound;
