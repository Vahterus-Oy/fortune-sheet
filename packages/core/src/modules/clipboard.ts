export default class clipboard {
  static writeHtml(str: string) {
    try {
      let ele = document.getElementById("fortune-copy-content");
      if (!ele) {
        ele = document.createElement("div");
        ele.setAttribute("contentEditable", "true");
        ele.id = "fortune-copy-content";
        ele.style.position = "fixed";
        ele.style.height = "0";
        ele.style.width = "0";
        ele.style.left = "-10000px";
        document.querySelector(".fortune-container")?.append(ele);
      }
      const previouslyFocusedElement = document.activeElement as HTMLElement;
      ele.style.display = "block";
      ele.innerHTML = str;
      ele.focus({ preventScroll: true });
      document.execCommand("selectAll");
      document.execCommand("copy");

      // Fallback setup
      const plainText = ele.innerText || ele.textContent || ""; // In order to match the clipboard which only stores the visible text without formatting
      sessionStorage.setItem("localClipboard", plainText); // Also store in sessionStorage for fallback access

      setTimeout(() => {
        ele?.blur();
        previouslyFocusedElement?.focus?.();
      }, 10);
    } catch (e) {
      console.error(e);
    }
  }
}
