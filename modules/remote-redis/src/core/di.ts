import { createActivator } from "di-kit";

export const { init, inject, provide } = createActivator("remote-redis");
