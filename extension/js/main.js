///////////////////////////////////////////////////////////
// (c)2013 casley consulting inc, all right reserved.
// サンプル
// author y.Hata 2013/09/20
///////////////////////////////////////////////////////////

$(document).ready(main);

var setTemplate = function(element) {
  if (element.val() === '') {
    chrome.storage.local.get(['template'], function(items){
      element.val(items.template);
    });
  }
};

function main() {
  var $issueBody       = $('#issue_body'),
      $pullRequestBody = $('#pull_request_body');

  if ($issueBody.length) {
    setTemplate($issueBody);
  }
  else if ($pullRequestBody.length) {
    setTemplate($pullRequestBody);
  }
}
