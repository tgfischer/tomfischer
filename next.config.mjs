import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * @type {import("next").NextConfig}
 */
const config = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")]
  }
};

export default config;
