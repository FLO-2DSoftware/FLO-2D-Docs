document.addEventListener("DOMContentLoaded", function () {
    const selector = document.createElement("select");

    selector.innerHTML = `
        <option value="">🌐 Translate</option>
        <option value="es">Español</option>
        <option value="ko">한국어 (Korean)</option>
        <option value="it">Italiano</option>
        <option value="de">Deutsch</option>
        <option value="pt">Português</option>
        <option value="zh-CN">简体中文 (Chinese)</option>
        <option value="ar">العربية (Arabic)</option>
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
        selector.style.cssText = `
            display: block;
            width: 90%;
            margin: 10px auto;
            padding: 6px;
            border-radius: 5px;
            background: white;
            color: #333;
            border: 1px solid #ccc;
            cursor: pointer;
        `;
    
        sidebar.appendChild(selector);
    }
});