export function getSkillsIcon() {
  const matches = import.meta.glob("../assets/icons/*", {
    eager: true,
  });

  return Object.values(matches).map((i: any) => {
    const path = i.default.src;

    const fileName = path.split("/").pop() || "";

    return {
      src: path,
      skill: fileName.replace(/\.[^/.]+$/, "").toLowerCase(),
    };
  });
}
