document.addEventListener("DOMContentLoaded", function () {
    const selector = document.createElement("select");

    selector.innerHTML = `
        <option value="">🌐 Translate</option>
        <option value="ar">العربية (Arabic)</option>
        <option value="zh-CN">简体中文 (Chinese)</option>
        <option value="de">Deutsch (German)</option>
        <option value="it">Italiano (Italian)</option>
        <option value="ko">한국어 (Korean)</option>
        <option value="pt">Português (Portuguese)</option>
        <option value="es">Español (Spanish)</option>
    `;

    selector.addEventListener("change", function () {
        if (!this.value) return;

        const url = new URL("https://translate.google.com/translate");
        url.searchParams.set("sl", "en");
        url.searchParams.set("tl", this.value);
        url.searchParams.set("u", window.location.href);

        window.location.href = url.toString();
    });

    const sidebar = document.querySelector(".wy-side-nav-search");

    if (sidebar) {
        const form = document.createElement("div");

        selector.style.width = "100%"
        selector.style.borderRadius = "50px";
        selector.style.padding = "6px 12px";


        form.appendChild(selector);
        sidebar.appendChild(form);
    }
});