import * as os from "os";

export function getPlatform(): string {
  let targetPlat: string;
  let plat = os.platform();
  switch (plat) {
    case "linux":
      targetPlat = "linux-gnu";
      break;
    case "darwin":
      targetPlat = "apple-darwin";
      break;
    default:
      targetPlat = plat;
  }
  return targetPlat;
}
export function getArch(): string {
  let arch = os.arch();
  switch (arch) {
    case "x64":
      arch = "x86_64";
      break;
    case "ppc64":
      arch = "ppc64le";
      break;
    case "arm64":
      arch = "aarch64";
      break;
  }
  return arch;
}
