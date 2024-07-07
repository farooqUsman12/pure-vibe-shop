import localFont from "next/font/local"

export const gilroyBold = localFont({ src: "../../public/fonts/Gilroy-Bold.ttf" });
export const gilroySemiBold = localFont({ src: "../../public/fonts/Gilroy-SemiBold.ttf" });
export const gilroyMedium = localFont({ src: "../../public/fonts/Gilroy-Medium.ttf" });
export const gilroyLight = localFont({ src: "../../public/fonts/Gilroy-Light.ttf" });
export const gilroyBlack = localFont({ src: "../../public/fonts/Gilroy-Black.ttf" });     
export const gilroyBlackItalic = localFont({ src: "../../public/fonts/Gilroy-BlackItalic.ttf" });     


export function fontSetToCss() {
  const root = document.documentElement;
  root.style.setProperty("--font-bold", gilroyBold.className);
  root.style.setProperty("--font-semibold", gilroySemiBold.className);
  root.style.setProperty("--font-medium", gilroyMedium.className);
  root.style.setProperty("--font-light", gilroyLight.className);
  root.style.setProperty("--font-black", gilroyBlack.className);
  root.style.setProperty("--font-blackItalic", gilroyBlackItalic.className);
}