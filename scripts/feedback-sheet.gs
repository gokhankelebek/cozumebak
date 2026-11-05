// Google Apps Script behind FEEDBACK_WEBHOOK_URL: appends one row per student
// feedback event to the Sheet this script is bound to.
//
// Setup (about 5 minutes):
//   1. Create a Google Sheet, then Extensions > Apps Script.
//   2. Replace the editor contents with this file and save.
//   3. Deploy > New deployment > type "Web app".
//      Execute as: Me. Who has access: Anyone.
//   4. Copy the /exec URL into Vercel as FEEDBACK_WEBHOOK_URL (Production) and redeploy.
//
// The buttons on the site stay hidden until that variable is set at build time.

var HEADERS = ["Tarih", "Tür", "Sayfa", "Soru", "Oy", "Yorum"];

// A leading = + - @ would make Sheets evaluate student text as a formula.
function plainText(value) {
  var s = String(value == null ? "" : value);
  return /^[=+\-@\t\r]/.test(s) ? "'" + s : s;
}

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
    sheet.appendRow([
      new Date(),
      plainText(data.kind),
      plainText(data.slug),
      plainText(data.questionId),
      plainText(data.vote),
      plainText(data.comment),
    ]);
  } finally {
    lock.releaseLock();
  }
  return ContentService.createTextOutput("ok");
}
