# Action Logging

The site collects anonymised data for service improvement, debugging, and popularity analysis. All information is stored on the server in `/logs/` and is accessible only to the administrator.

## Collected data

For each request (PAGE_VIEW) and each user action (TOOL_USE, LANG_CHANGE, THEME_CHANGE, BVI_ENABLE/DISABLE, CLIENT_INFO, etc.), the log file records:

- **Time** (Y-m-d H:i:s)
- **UserID** – persistent identifier (stored in `user_id` cookie for 365 days)
- **Client IP** and **port**
- **Action** (PAGE_VIEW, TOOL_USE, etc.)
- **Details** (e.g. `tool=password_generator`)
- **HTTP method** (GET/POST)
- **Request URL**
- **Referer**
- **User‑Agent** (browser, OS)
- **Query string** (GET parameters)
- **Accept‑Language**
- **Cookies** (all except `user_id`) as JSON
- **Headers** (Accept, Accept‑Language, Accept‑Encoding, Connection, Upgrade‑Insecure‑Requests, Sec‑Fetch‑*)
- **Geolocation** (via ip‑api.com: city, country, coordinates, ISP, timezone)

## Client‑side logging (JavaScript)

Additionally, `client-logger.js` collects:

- **Device information**: screen resolution, colour depth, pixel ratio, platform, language, browser version, CPU cores, memory, plugins.
- **Connection type**: 4G/3G/WiFi, speed, RTT.
- **Browser fingerprint** (combination of parameters).
- **Cookies and localStorage** content.
- **Clicks** (coordinates, time between clicks).
- **Scroll depth** (percentage).
- **Mouse positions** (throttled to every 3 seconds).
- **Time on page** (sent when the tab is closed).

All client‑side data is sent via AJAX to `/ajax-logger.php` and written to the same log files with actions `CLIENT_INFO`, `FINGERPRINT`, `USER_CLICK`, `SCROLL_DEPTH`, `MOUSE_POS`, `PAGE_DURATION`, `COOKIES`, `LOCALSTORAGE`.

## Access to logs

- **Through the admin panel** (`/admin.php`): charts, filters, CSV export.
- **Through `view-logs.php`** (separate password) – simple log viewer.
- **Via FTP**: the `/logs/` folder is protected by `.htaccess` (access forbidden).

## Legal notice

The collection of the described data is performed **only after obtaining explicit user consent** via the cookie consent banner (items “Analytical cookies” and “Aggressive logging”). Users can disable collection at any time in the banner settings.