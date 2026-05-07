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


export const slugify = (name: string) =>
  name.toLowerCase().replace(/\s+/g, '_');

export const getSkillsMap = () => {
  const icons = getSkillsIcon();
  const map = new Map();
  icons.forEach((icon) => {
    map.set(slugify(icon.skill), icon.src);
  });
  return map;
};
