export function getSkillsIcon() {
  const matches = import.meta.glob("../assets/icons/*", {
    eager: true,
  });

  return Object.values(matches).map((i: any) => {
    const path = i.default.src;
    return {
      src: path,
      skill: path.split("/").at(-1).split(".png")[0].toLowerCase(),
    };
  });
}
