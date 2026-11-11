# General Physics from the Quantum World — book website

這是《從量子出發的普通物理》的 GitHub Pages 網頁 package。中英文介面、實際書封、教學路徑、七部內容、Zenodo 連結與引用複製功能皆已做好。

公開版本稱 **v1**；內部稿次為 **v4.2**。這兩個名稱指向同一次教材發布。網頁對讀者只顯示 v1。

| 版本 | DOI |
| --- | --- |
| 中文 | https://doi.org/10.5281/zenodo.24122647 |
| English | https://doi.org/10.5281/zenodo.24122845 |

## 第一次上架：只用 GitHub 網頁即可

1. 將下載的 ZIP **解壓縮**。不要直接把 ZIP 上傳為網站。
2. 登入 GitHub，按右上角 **＋ → New repository**。
3. Repository name 建議填 `general-physics-from-the-quantum-world`。選 **Public**，建立 repository；不用套用其他網站模板。
4. 在新 repository 按 **uploading an existing file**，或 **Add file → Upload files**。
5. 將解壓縮後的**內部檔案與 assets 資料夾**拖入。`index.html` 必須直接位於 repository 最外層，不能多包一層資料夾。按 **Commit changes**。
6. 進入 repository 的 **Settings → Pages**。在 **Build and deployment** 將 Source 選為 **Deploy from a branch**，Branch 選 **main**，資料夾選 **/(root)**，按 **Save**。
7. 等待 GitHub 完成部署；在 Pages 設定頁按 **Visit site**。實際網址以 GitHub 顯示的結果為準。

一般 project site 的網址形式是 `https://你的帳號.github.io/general-physics-from-the-quantum-world/`。這是格式示例，尚未替你建立 GitHub repository 或公開網站。

若 Mac 的 Finder 沒顯示 `.nojekyll`，可按 `Command + Shift + .` 顯示隱藏檔。這個網站沒有必須依賴它才能使用的特殊檔名；其他檔案與 `assets/` 上傳完整仍是重點。

官方步驟：[建立 GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)、[設定發布來源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 開啟自願贊助按鈕

先看 [DONATION_SETUP_zh-TW.md](./DONATION_SETUP_zh-TW.md)。網址設定只需改 `config.js`：

```javascript
supportURL: "你的完整 HTTPS 贊助頁網址",
```

請填你實際建立的贊助頁，不要把上面的說明文字照貼為網址。網址留空時，本站顯示「免費閱讀，歡迎分享」，並隱藏贊助按鈕；填入有效 HTTPS 網址後，中英文介面會自動顯示贊助按鈕與自願支持說明。

網站只連到外部付款頁，不自行收集卡號、銀行資料或處理金流。贊助不影響閱讀、下載或授權。

`feedbackURL` 可填公開的意見表單或 GitHub Issues 網址；`repositoryURL` 可填本 repository 的公開網址。都可以保持空白。**不要在任何網站檔案放密碼、身分證、銀行帳號或金流 API 金鑰。**

## 日後更新

- 改文字與樣式：`index.html`、`app.js`、`styles.css`。中英翻譯在 `app.js` 的 `strings`。
- 改連結：`config.js`。
- 替換封面：`assets/cover-cn.webp`、`assets/cover-en.webp`。
- 發布新版書：更新 `config.js`、`index.html` 的靜態 DOI 與 JSON-LD、`app.js` 的版本／引用資訊，以及 `RELEASE_INFO.json`。頁數或例題統計有改動時，一起更新。
- 目前使用你提供的 **v1 版本 DOI**，沒有猜測或冒用 Concept DOI。日後取得 Concept DOI 後，可另增「最新版本」入口；舊版引用仍保留原版本 DOI。

書籍 PDF、Word 沒有重複放進這份 package。閱讀按鈕會開啟你提供的 Zenodo DOI，讓讀者在該紀錄選擇書檔。這也讓 GitHub repository 保持輕巧。這次製作環境未能讀取 Zenodo 公開頁，因此未假造各書檔的直接下載路徑；上架後請自行確認兩個 DOI 可開啟，且 Zenodo 上的版本欄、檔名與授權符合 v1。

## 頁面與檔案

| 檔案 | 用途 |
| --- | --- |
| `index.html` | 網站入口與完整預設中文內容 |
| `styles.css` | 桌面、平板、手機與列印樣式 |
| `app.js` | 語言切換、跨尺度範例、引用複製 |
| `config.js` | DOI、贊助與選用公開連結 |
| `assets/` | 實際書封縮圖、裝飾波形圖示 |
| `DONATION_SETUP_zh-TW.md` | Portaly 與 Ko-fi 設定教學 |
| `RELEASE_INFO.json` | v1／內部 v4.2 與 DOI 對應 |
| `LICENSE.md` | CC BY-NC 4.0 與第三方素材說明 |

本網站不需 Node.js、不需安裝套件、不需執行編譯。所有資源使用相對路徑，適用於 GitHub Pages 的 repository 子路徑。

你也可以直接用瀏覽器開啟 `index.html` 預覽。若本機禁止剪貼簿寫入，按「複製引用」後會顯示文字供手動複製。語言選擇只儲存在讀者自己的瀏覽器；本站未載入追蹤、第三方字型或付款小工具。

## 授權與作者

頁尾按作者偏好不放 `© Copyright` 或 `All rights reserved`，保留作者、公開版本與 **CC BY-NC 4.0**。本書第三方照片／圖像依書內各別標示處理，不會被這個頁尾重新授權。

網站摘要取自作者提供的兩份 v1 PDF；封面亦擷取自同一書檔。教材與 AI 協作說明見網站「關於」及書內作者頁。

## English quick start

Unzip, upload the contents (not the outer directory) to a public GitHub repository, and enable **Settings → Pages → Deploy from a branch → main → /(root)**. No build step is required. Put your real HTTPS support-page URL in `config.js` to enable the optional support button. Book links point to the supplied version-specific Zenodo DOIs. Public release **v1** corresponds to internal manuscript revision **v4.2**.
