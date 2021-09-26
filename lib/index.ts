import ApiStack from "./ApiStack";
import * as sst from "@serverless-stack/resources";
import FrontendStack from "./FrontendStack";

export default function main(app: sst.App): void {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs12.x",
  });

  const apiStack = new ApiStack(app, "api");

  // Add more stacks
  new FrontendStack(app, "frontend", { api: apiStack.api });
}
