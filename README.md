# General Physics from the Quantum World — book website

《從量子出發的普通物理》中英雙語課本網站。公開版本維持 **v1**；本次同步日期為 **2026-11-17**。

網站：https://yiyang0429.github.io/general-physics-from-the-quantum-world/

| 版本 | DOI | PDF 頁數 |
| --- | --- | --- |
| 中文 | https://doi.org/10.5281/zenodo.24157018 | 517 |
| English | https://doi.org/10.5281/zenodo.24156964 | 533 |

## 本次更新：書籍閱讀下載旁加入支持連結

公開贊助頁：https://portaly.cc/yiyang0429/support

中文與英文書封卡片內，各自的「閱讀與下載 / Read & download」按鈕旁已加入「支持本書 / Support」連結；頁尾支持入口保留。首頁大標題下方恢復原本的閱讀與教學路徑連結。支持連結均通往此頁，較窄的螢幕會自動換行。讀者會在 Portaly 選擇 100、200、300、400、500 元並填寫付款資料；網站不直接處理付款。

**現有網站請覆蓋上傳 `index.html`、`app.js`、`styles.css` 與 `config.js`。** `index.html` 已更新程式與樣式的快取版本。也可以按下方流程上傳完整套件。

已確認公開頁面可開啟並顯示金額與信用卡付款欄位；作者另已回報實際付款測試成功。此回報不代表已驗證平台撥款。

## 重新上傳現有網站

1. 將本 ZIP 解壓縮。
2. 開啟 [既有 repository 的上傳頁面](https://github.com/yiyang0429/general-physics-from-the-quantum-world/upload/main)。
3. 將解壓縮後的**內部檔案與 `assets` 資料夾**拖入。`index.html` 應直接位於 repository 最外層；不要多包一層資料夾，也不要只上傳 ZIP。
4. 按 **Commit changes** 儲存到 `main`，等既有 GitHub Pages 部署完成後重新整理網站。

這份套件提供完整網站，不需要重新建立 repository、不需要安裝 Node.js 或執行編譯，也不需更動現有 Pages 發布設定。PDF 與 Word 仍由 Zenodo 提供。

## 本次同步範圍

- 中英文閱讀按鈕、封面連結、DOI 顯示與引用複製功能。
- `index.html` 的靜態連結與 JSON-LD、`app.js` 的備援網址、`config.js`、`RELEASE_INFO.json` 及本說明中的 DOI。
- 中文 517 頁、英文 533 頁；34 章、411 個編號範例與 563 道練習題。
- 第三部：連續介質、波動與熱學，第 15–18 章。
- 第四部：相對論、反物質與核能，第 19–20 章與專題 N。
- 第五部：電磁學與電路，第 21–28 章與專題 S。
- 跨尺度例子的章號：能階與熱容為第 3、17 章；載子與電路為第 23、28 章。
- 書封縮圖重新取自定稿 PDF；更新的程式與封面加上版本查詢字串，避免瀏覽器沿用前次快取。

## 日後維護

| 檔案 | 用途 |
| --- | --- |
| `index.html` | 靜態中文內容、閱讀連結、搜尋引擎用的 JSON-LD |
| `app.js` | 中英翻譯、跨尺度例子、DOI 備援值、引用複製 |
| `config.js` | DOI、贊助、意見表單及選用公開連結 |
| `RELEASE_INFO.json` | 公開版本、各語言 DOI、檔名與頁數 |
| `styles.css` | 桌面、平板、手機與列印樣式 |
| `assets/` | 中英文書封及網站圖示 |
| `DONATION_SETUP_zh-TW.md` | 自願贊助設定說明 |
| `LICENSE.md` | 授權及第三方素材說明 |

更新書籍版本時，同步上述各處 DOI、頁數、章序與封面即可。網站使用作者提供的版本 DOI；保留公共版本名稱 v1，不自行推定 Concept DOI。

## 自願贊助與意見表單

`config.js` 的 `supportURL` 已設定為作者的 Portaly 公開贊助頁；`feedbackURL`、`repositoryURL` 維持空白。若日後將贊助網址清空，網站會隱藏贊助按鈕。

詳細設定見 [DONATION_SETUP_zh-TW.md](./DONATION_SETUP_zh-TW.md)。網站只連到外部頁面，不自行處理付款；贊助不影響免費閱讀、下載或既有授權。請勿在公開檔案放入密碼或 API 金鑰。

## 授權與作者

作者為楊毅 Yi Yang。保留既有 AI 協作說明與 CC BY-NC 4.0 授權；第三方素材依書內及 `LICENSE.md` 各別標示。

## English upload instructions

For this update, replace `index.html`, `app.js`, `styles.css`, and `config.js` in the existing repository. Each Chinese and English edition card now places “Support” beside its “Read & download” button. The hero returns to its original reading and learning-route links; the bottom support section remains. All support links use https://portaly.cc/yiyang0429/support. The author has reported a successful payment test; payout has not been verified.


Unzip this package and upload its **contents**, including `assets/`, to the root of the existing repository. Commit to `main`; the existing GitHub Pages deployment will publish the update. Do not upload only the ZIP or put the files inside an extra directory. No build step is required. Public release remains **v1**, with Chinese **517 pages** and English **533 pages**. Book files remain hosted on the edition-specific Zenodo records above.
