const version = import("./version");

export default function Diagram() {
  return version.then(v => "Diagram" + v.default())
}
