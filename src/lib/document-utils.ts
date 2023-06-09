namespace DocumentUtils {
  export function toggleLightTheme(isLightTheme: boolean, smooth: boolean) {
    if (smooth) {
      document.documentElement.classList.add("theme-transition");
      window.setTimeout(() => {
        document.documentElement.classList.remove("theme-transition");
      }, 500); // keep in sync with theme-transition class in base.scss
    }

    if (isLightTheme) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }

  export function toggleOperatingSystem(os: "macos" | "windows") {
    document.documentElement.setAttribute("data-os", os);
  }
}

export default DocumentUtils;
