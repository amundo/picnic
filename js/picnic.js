function searchFlickr(query){
  var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + query + "&tagmode=any&ss=1&format=json&l=commderiv&jsoncallback=?"
  $.getJSON(url,
    function(data){
      var $thumbs = $('#thumbs');
      $thumbs.html('');
      $.each(data.items, function(i,item){
        var img = $('<img class="thumb" />').attr({"author": item.author, "src": item.media.m, "href": item.link}).appendTo($thumbs);
        if ( i == 40 ) return false;
      });
   });
}

function disableSaveButton(){
  $('#saveButton').attr('disabled', 'True')
};

function extractAuthor(author){
  return author.split('(')[1].split(')')[0]
}

function makePicsSelectable(){
  $('#thumbs img').live('click', function(){
    $('#pic img').html('<img src="img/spinner.gif" />');
    var href = $(this).attr('href');
    var author = extractAuthor( $(this).attr('author') );
    mediumImageLink = $(this).attr('src');
    bigImageLink = mediumImageLink.replace("_m","_b");
    console.log(mediumImageLink + '\n' +  bigImageLink);
    var citation = $('<a>').attr({'href':$(this).attr('href')}).html('<p>photo by: ' +  author + '</p>' );
    $('#pic img').attr('src', bigImageLink)
    //$('#pic img').attr('src', mediumImageLink)
    $('#citation').html('').html(citation);
  })
}

$(function(){

  $('.object').hide();
  //$('#translation').autogrow();

  makePicsSelectable();

  $('#saveButton').click(function(){ 
    //alert('OOPS! It doesn\'t actually save yet. Shi:bathyaw!') 
    return false;
  })

  $('#search_button').click(
    function(){ 
      $('#thumbs').html('<img src="img/spinner.gif" />');
      //$('#translation').attr('value', '');
      var query = $('#query').val();
      searchFlickr(query);
      return false; 
    }
  )
})
