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

    document.body.prepend(selector);
});