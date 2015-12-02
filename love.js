(function(){
  var title = document.createElement('h1');
  title.innerText = 'L-O-V-E';
  document.body.appendChild(title);

  var contentArea = document.createElement('div');
  contentArea.innerText = 'In the immortal words of Nat King Cole';
  document.body.appendChild(contentArea);

  var pageLButton = [];
  var pageOButton = [];
  var pageVButton = [];
  var pageEButton = [];

  var pageLContent = [];
  var pageOContent = [];
  var pageVContent = [];
  var pageEContent = [];

  pageLButton = document.createElement('button');
  pageLButton.innerText = 'L';
  document.body.appendChild(pageLButton);

   pageLButton.addEventListener('click', function(e){
    contentArea.innerText = pageLContent;
  });

  pageOButton = document.createElement('button');
  pageOButton.innerText = 'O';
  document.body.appendChild(pageOButton);

   pageOButton.addEventListener('click', function(e){
    contentArea.innerText = pageOContent;
   });

  pageVButton = document.createElement('button');
  pageVButton.innerText = 'V';
  document.body.appendChild(pageVButton);

   pageVButton.addEventListener('click', function(e){
    contentArea.innerText = pageVContent;
   });

  pageEButton = document.createElement('button');
  pageEButton.innerText = 'E';
  document.body.appendChild(pageEButton);

   pageEButton.addEventListener('click', function(e){
    contentArea.innerText = pageEContent;
   });

  pageLContent = 'L is for the way you look at me';

  pageOContent = 'O is for the only one I see';

  pageVContent = 'V is very, very extraordinary';

  pageEContent = 'E is even more than anyone that you adore can';
  
})();
