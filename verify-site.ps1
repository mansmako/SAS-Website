# verify-site.ps1 — pre-deploy smoke test for SAS-Website-revamp
# Run from repo root AFTER `npm run build`, with the Firebase emulator up:
#   npx firebase emulators:start --only hosting
# Then in a second terminal:  .\verify-site.ps1
# PowerShell-native on purpose: Git Bash curl mangles leading-slash URLs
# (MSYS path conversion), which is how the old emulator check silently broke.

$base = "http://localhost:5000"
$routes = @("/", "/about/", "/services/", "/case-studies/", "/contact/",
            "/learn/", "/process/", "/industries/", "/pricing/")
$fail = 0

Write-Host "== Route checks (expect 200 + non-trivial body) =="
foreach ($r in $routes) {
    try {
        $resp = Invoke-WebRequest -Uri "$base$r" -UseBasicParsing -MaximumRedirection 0 -ErrorAction Stop
        $len = $resp.Content.Length
        if ($resp.StatusCode -eq 200 -and $len -gt 2000) {
            Write-Host ("  OK   {0}  ({1} bytes)" -f $r, $len)
        } else {
            Write-Host ("  FAIL {0}  status={1} bytes={2}  <-- possibly blank page" -f $r, $resp.StatusCode, $len) -ForegroundColor Red
            $fail++
        }
    } catch {
        Write-Host ("  FAIL {0}  {1}" -f $r, $_.Exception.Message) -ForegroundColor Red
        $fail++
    }
}

Write-Host "`n== cleanUrls redirect checks (expect 301 -> trailing slash) =="
foreach ($r in @("/about", "/services", "/case-studies", "/contact")) {
    try {
        $resp = Invoke-WebRequest -Uri "$base$r" -UseBasicParsing -MaximumRedirection 0 -ErrorAction SilentlyContinue
        $code = $resp.StatusCode
    } catch {
        $code = $_.Exception.Response.StatusCode.value__
    }
    if ($code -eq 301) { Write-Host ("  OK   {0} -> 301" -f $r) }
    else { Write-Host ("  FAIL {0} -> {1} (expected 301)" -f $r, $code) -ForegroundColor Red; $fail++ }
}

Write-Host "`n== 404 check (catch-all rewrite must stay gone) =="
try {
    $resp = Invoke-WebRequest -Uri "$base/definitely-not-a-page/" -UseBasicParsing -ErrorAction SilentlyContinue
    $code = $resp.StatusCode
} catch { $code = $_.Exception.Response.StatusCode.value__ }
if ($code -eq 404) { Write-Host "  OK   unknown route -> 404" }
else { Write-Host ("  FAIL unknown route -> {0} (catch-all rewrite may be back!)" -f $code) -ForegroundColor Red; $fail++ }

Write-Host ""
if ($fail -eq 0) { Write-Host "ALL CHECKS PASSED" -ForegroundColor Green; exit 0 }
else { Write-Host "$fail CHECK(S) FAILED — do not deploy" -ForegroundColor Red; exit 1 }
