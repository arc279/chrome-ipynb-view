chrome.tabs.query({active:true}, function(tab) {
  chrome.tabs.sendMessage(tab[0].id, 'text2json', function(response) {
    const div = document.getElementById('preview');
    console.log(response.content);
    nbv.render(JSON.parse(response.content), div);
  });
});
