import MyStack from "./MyStack";
import * as sst from "@serverless-stack/resources";
import FrontendStack from "./FrontendStack";

export default function main(app: sst.App): void {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs12.x"
  });

  new MyStack(app, "my-stack");

  // Add more stacks
  new FrontendStack(app, "frontend")
}
