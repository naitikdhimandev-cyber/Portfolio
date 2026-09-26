import { useEffect } from 'react';

const GOOGLE_SCRIPT_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxs8oHXJ6KXswp_t6ho2gQ1_7zEAZux6qKdzKPKhas-k32gL7muquB5yeH_ZMUaszcy1Q/exec";

const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return "Tablet";
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return "Mobile";
    return "Desktop";
};

const getBrowserAndOS = () => {
    const ua = navigator.userAgent;
    let browser = "Unknown Browser";
    let os = "Unknown OS";

    // OS Detection
    if (ua.indexOf("Win") !== -1) os = "Windows";
    else if (ua.indexOf("Mac") !== -1) os = "macOS";
    else if (ua.indexOf("Linux") !== -1) os = "Linux";
    else if (ua.indexOf("Android") !== -1) os = "Android";
    else if (ua.indexOf("like Mac") !== -1) os = "iOS";

    // Browser Detection
    if (ua.indexOf("Edg") !== -1) browser = "Edge";
    else if (ua.indexOf("Chrome") !== -1) browser = "Chrome";
    else if (ua.indexOf("Safari") !== -1) browser = "Safari";
    else if (ua.indexOf("Firefox") !== -1) browser = "Firefox";

    return { browser, os };
};

const VisitorTracker = () => {
    useEffect(() => {
        const alreadyCounted = sessionStorage.getItem('portfolio_visited_session');
        if (alreadyCounted) return;

        const timer = setTimeout(() => {
            sessionStorage.setItem('portfolio_visited_session', 'true');

            if (GOOGLE_SCRIPT_WEBHOOK_URL && GOOGLE_SCRIPT_WEBHOOK_URL.trim() !== "") {
                const { browser, os } = getBrowserAndOS();
                const device = getDeviceType();
                const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown";
                const screenRes = `${window.screen.width}x${window.screen.height}`;
                const language = navigator.language || "Unknown";

                fetch(GOOGLE_SCRIPT_WEBHOOK_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        event: 'page_view',
                        browser: browser,
                        os: os,
                        device: device,
                        timeZone: timeZone,
                        screenRes: screenRes,
                        language: language
                    })
                }).catch((err) => console.log('Visitor tracking ping error:', err));
            }
        }, 10000); // 10-second dwell filter

        return () => clearTimeout(timer);
    }, []);

    return null;
};

export default VisitorTracker;
