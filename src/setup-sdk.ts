import * as core from "@actions/core";
import cp from "child_process";
import * as tc from "@actions/tool-cache";
import * as installer from "./installer";

export async function install() {
  try {
    let versionSpec = core.getInput("version");
    if (!versionSpec) {
      throw new Error("Provide operator-sdk version!");
    }
    console.log(`Setup operator-sdk version spec ${versionSpec}`);
    let installPath: string | undefined = tc.find("operator-sdk", versionSpec);
    if (!installPath) {
      console.log(
        `A version satisfying ${versionSpec} not found locally, attempting to download ...`
      );
      installPath = await installer.installSdk(versionSpec);
      console.log("Installed");
    }

    if (installPath) {
      core.addPath(installPath);
    } else {
      throw new Error(
        `Could not find a version that satisfied version spec: ${versionSpec}`
      );
    }

    let cmd = "operator-sdk version";
    core.startGroup(cmd);
    console.log((cp.execSync(cmd) || "").toString());
    core.endGroup();
  } catch (error) {
    core.setFailed(error.message);
  }
}
