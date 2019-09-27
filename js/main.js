jQuery(document).ready(function ($) {

  $('#like').on('click', function (e) {
    e.preventDefault();
    $(this).removeClass('f');
    localStorage.setItem('Like', true);
  });

  if (localStorage.Like) {
    $('#like').removeClass('f');
  }
  console.log(localStorage.Like);

  let circles = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false
  };

  if (localStorage.getItem('circles')) {
    circles = JSON.parse(localStorage.getItem('circles'));
  }

  $('.circle').on('click', function() {
    let item = $(this);
    let circle = item.attr('circle');

    for(key in circles) {
      if(circle === key) {
        circles[key] = true;
        localStorage.setItem('circles', JSON.stringify(circles));
        item.addClass('success');
      }
    }
  });

  for(key in circles) {
    if(circles[key] === true) {
      $('.circle').each(function() {
        let item = $(this);
        let circle = item.attr('circle');
        if(key === circle) {
          item.addClass('success');
        }
      });
    }
  }

});