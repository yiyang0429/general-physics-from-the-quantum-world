# 自願支持設定：讓書免費，讓讀者可以選擇支持

本書的閱讀、下載與 CC BY-NC 4.0 授權不以付款為條件。網站按鈕使用「自願支持這本書 / Support this book」。

## 先選擇收款方式

| 你最在意的情境 | 建議從哪裡開始 | 要知道的差異 |
| --- | --- | --- |
| 台灣讀者方便支持 | Portaly 的單筆贊助 | 內建信用卡金流；須依平台要求完成收款資料／身分認證，並留意抽成與提領費用。 |
| 海外讀者、已經有可收款 PayPal | Ko-fi＋PayPal | 款項直接進 PayPal；台灣 PayPal 帳戶之間不能互付，所以不適合當作台灣讀者唯一入口。 |

**這本書可以先採 Portaly 單筆贊助；不必一開始就訂閱付費方案。** 若你主要想收海外支持，Ko-fi 也可以，網站同樣支援它的連結。

### A. Portaly：台灣讀者的起步方式

1. 前往 [Portaly](https://portaly.cc/)，註冊並建立個人頁。顯示名稱可用「楊毅 Yi Yang」。
2. 進入後台 **變現工具 → 贊助設定 → 編輯**，開啟「單筆贊助」。目前先不開每月定額。
3. 方案名稱建議「支持《從量子出發的普通物理》的後續修訂」。金額可以從 **NT$100、NT$300、自訂金額**開始；這些是建議值，以後台允許的金額範圍為準。
4. 將下方介紹放入方案說明，封面圖片可使用書封。回饋內容可以不填，避免另外承諾課程或專屬解答。
5. 依後台要求完成身分與收款資料。這些資料只在平台安全頁面填寫，不放入 GitHub。提領資格、時間與費用依實際帳戶顯示辦理。
6. 儲存後開啟自己的公開贊助頁，**從瀏覽器複製實際網址**。先確認方案文字、幣別與可選付款方式都正確。
7. 把該網址貼進網站 `config.js` 的 `supportURL`，再將修改上傳 GitHub。

可直接使用的中文說明：

> 《從量子出發的普通物理》中英文版皆可免費閱讀與下載。如果這本書對你有幫助，歡迎自願支持後續修訂、插圖與教學內容的製作。贊助完全自願，不影響任何人的閱讀、下載與既有授權。謝謝你讓更多人有機會一起理解物理。

英文說明：

> General Physics from the Quantum World is freely available in Chinese and English. If the book has helped you, you are welcome to support future revisions, illustrations, and teaching materials. Support is entirely optional; access to the book and the existing license do not depend on payment. Thank you for helping more people explore physics.

費用查核（2026-11-11）：[目前方案頁](https://portaly.cc/pricing)列基本會員的贊助／商品費率 **12%**，頂級會員 **6%**；[較早教學](https://portaly.cc/blog/selected-examples-support1)仍寫 6%，兩處不一致，不能據此保證免費方案只抽 6%。申請時請以實際後台的完整費用說明為準，包括適用的發票、提領等費用；這裡不把平台費率當作所有成本的總和。

### B. Ko-fi＋PayPal：海外支持的選項

1. 準備一個以本人實際居住地註冊、完成驗證且可收款的 PayPal 帳戶。
2. 到 [Ko-fi](https://ko-fi.com/) 建立創作者頁，填入姓名、書籍介紹與書封。
3. 在 **Settings → Payment** 連接 PayPal。單次支持可先用 USD；金額可從 US$3 或 US$5 開始。
4. 若只需要單筆支持，選 **Ko-fi Free**，關閉 **Standard / Get all of Ko-fi** 類型的升級模式；部分說明仍稱為 Contributor。
5. Ko-fi Free 的單次小費平台費為 **0%**；Standard 為 **5%**。PayPal 自己的交易、換匯等費用另計，不能說完全零手續費。
6. 複製自己實際的 Ko-fi 公開網址，貼入 `config.js` 的 `supportURL`。款項直接進連結的 PayPal，不是等 Ko-fi 累積後再提款。

**台灣限制：**PayPal 官方目前說明，台灣帳戶僅支援向台灣境外註冊的 PayPal 帳戶跨國付款。因此若你的收款帳戶是台灣帳戶，另一位台灣 PayPal 使用者不能用這條路互付。Ko-fi 並不解除這個限制。

依據：[Ko-fi 收款流程](https://help.ko-fi.com/hc/en-us/articles/115003980093-How-do-I-get-paid)、[Ko-fi 費用](https://help.ko-fi.com/hc/en-us/articles/360002506494-Does-Ko-fi-take-a-fee)、[PayPal 台灣付款限制](https://www.paypal.com/tw/cshelp/article/how-do-i-send-payments-help293?locale.x=en_TW)。

## 在 GitHub 網頁直接填入贊助網址

1. 打開 repository 的 `config.js`，按鉛筆圖示 **Edit this file**。
2. 找到 `supportURL: "",`，將空字串換成自己的完整 HTTPS 贊助網址；保留雙引號與行尾逗號。
3. 按 **Commit changes**。GitHub Pages 會重新發布。
4. 開啟你的網站，往下找到贊助區。中英文切換後都確認按鈕可通往你的頁面，且免費閱讀按鈕仍可直接使用。

不用在網站貼付款程式碼，不用在 GitHub 存金流 API key。`supportURL` 留空即可暫時關閉贊助入口。

## Copyright 字樣與授權

網頁不放 `© Copyright` 或 `All rights reserved`。依台灣智慧財產局說明，著作權取得不以標示該符號或字樣為要件；這和是否採 CC 授權是不同的事。網站保留作者、版本、CC BY-NC 4.0 連結，以及第三方素材各自授權的說明。

依據：[智慧財產局電子郵件 980819c](https://www.tipo.gov.tw/tw/copyright/692-13335.html)、[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)。

查核日期：2026-11-11。平台介面、費率與收款條件可能調整；本教學使用公開官方文件，尚未登入你的金流帳戶或完成實際收款。
