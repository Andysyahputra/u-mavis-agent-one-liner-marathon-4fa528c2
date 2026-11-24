import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My Roomba mapped the whole house and filed a complaint: the floors are spotless, the humans are the mess, and it now charges hazard pay.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
