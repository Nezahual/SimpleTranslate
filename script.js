var cr= [];

$(document).on({
  'mouseup': function() {
    cr= window.getSelection().getRangeAt(0).getClientRects();
  },
  'mousemove': function(ev) {
    //hide the pop up
    for(var i = 0 ; i < cr.length ; i++) {
      if(ev.pageX >= cr[i].left && ev.pageX <= cr[i].right &&
         ev.pageY >= cr[i].top  && ev.pageY <= cr[i].bottom
        ) {
            Materialize.toast(window.getSelection(), 4000);
        break;
      }
      else{
        var toastElement = $('.toast').first()[0];

        if(toastElement != undefined){
            var toastInstance = toastElement.M_Toast;
            toastInstance.remove();
        }
      }
    }
  }
});

//sacado de aquí https://stackoverflow.com/questions/30599608/detect-hover-on-selected-text