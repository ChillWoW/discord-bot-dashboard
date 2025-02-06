import { CustomClient, EventProps } from "../../types";

export const event: EventProps = {
  name: "ready",
  once: true,
  run: (client: CustomClient) => {
    console.log("Test");
  },
};
