import * as core from "@actions/core";
import cp from "child_process";
import * as tc from "@actions/tool-cache";
import * as installer from "./installer";
import * as semver from "semver";
import constant from "./constant";

export async function install() {
  try {
    const versionSpec = semver.validRange(core.getInput("version"));
    if (!versionSpec) {
      throw new Error(
        "Provide valid operator-sdk version according to semver spec!"
      );
    }
    console.log(`Setup operator-sdk version spec ${versionSpec}`);
    const cachedVersions = tc.findAllVersions(constant.CACHE_KEY);
    const targetVersion = cachedVersions.find((version) =>
      semver.satisfies(installer.makeSemver(version), versionSpec)
    );
    let installPath: string | undefined = tc.find(
      constant.CACHE_KEY,
      targetVersion || versionSpec
    );
    if (!installPath) {
      console.log(
        `A version satisfying ${versionSpec} not found locally, attempting to download ...`
      );
      installPath = await installer.installSdk(versionSpec);
      if (installPath) console.log("Installed");
    }

    if (installPath) {
      core.addPath(installPath);
    } else {
      throw new Error(
        `Could not find a version that satisfied version spec: ${versionSpec}`
      );
    }

    const cmd = "operator-sdk version";
    core.startGroup(cmd);
    console.log((cp.execSync(cmd) || "").toString());
    core.endGroup();
  } catch (error) {
    core.setFailed(error.message);
  }
}
