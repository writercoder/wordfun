import * as sst from "@serverless-stack/resources";

export default class FrontendStack extends sst.Stack {
constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // Define our React app
    const site = new sst.ReactStaticSite(this, "ReactSite", {
      path: "frontend",
    });

    // Show the url in the output
    this.addOutputs({
      SiteUrl: site.url,
    });
  }
}