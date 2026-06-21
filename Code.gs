function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('화림 ERP')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
