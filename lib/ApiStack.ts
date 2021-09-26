import * as sst from "@serverless-stack/resources";

export default class ApiStack extends sst.Stack {
  api: sst.Api

  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // Create a HTTP API
    this.api = new sst.Api(this, "Api", {
      routes: {
        "GET /": "src/lambda.handler",
      },
    });

    // Show the endpoint in the output
    this.addOutputs({
      "ApiEndpoint": this.api.url,
    });
  }
}
