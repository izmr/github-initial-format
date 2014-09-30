$(function() {
  var $issueTemplate        = $('#issue-template'),
      $issueTemplateDefault = $('#issue-template-default'),
      $issueTemplateSave    = $('#issue-template-save');

  chrome.storage.local.get(['template'], function(items){
    if (chrome.extension.lastError !== undefined || typeof items.template === 'undefined') {
      $issueTemplate.val($issueTemplateDefault.text());
    } else {
      $issueTemplate.val(items.template);
    }
  });

  $issueTemplateSave.on('click', function(){
    var items = {
      template: $issueTemplate.val()
    };
    chrome.storage.local.set(items, function(){});
  });
});
