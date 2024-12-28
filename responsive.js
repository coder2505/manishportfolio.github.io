// clicks ont the icons of files.


document.getElementById(`aboutme`).addEventListener("click", function () { 
  var div3 = document.getElementById(`page2`); // about me page
  var div4 = document.getElementById(`page3`);
  var div5 = document.getElementById(`page4`);
  var div6 = document.getElementById(`page5`);
  var div7 = document.getElementById(`page6`);

  if(div7.classList.contains(`shownav`)){
    div7.classList.remove(`shownav`);
    div7.classList.add(`hidden`);
}

  if(div6.classList.contains(`show`)){
      div6.classList.remove(`show`);
      div6.classList.add(`hidden`);
  }


  if(div4.classList.contains(`show`)){
      div4.classList.remove(`show`);
      div4.classList.add(`hidden`)
  }

  if(div5.classList.contains(`show`)){
      div5.classList.remove(`show`);
      div5.classList.add(`hidden`)
  }



  div3.classList.remove('hidden');
  div3.classList.add('show');
  
 });


 document.getElementById(`interests_file`).addEventListener("click", function () {
  var div3 = document.getElementById(`page2`);
  var div4 = document.getElementById(`page3`);
  var div5 = document.getElementById(`page4`);
  var div6 = document.getElementById(`page5`);
  var div7 = document.getElementById(`page6`);

  if(div7.classList.contains(`shownav`)){
    div7.classList.remove(`shownav`);
    div7.classList.add(`hidden`);
}

  if(div6.classList.contains(`show`)){
      div6.classList.remove(`show`);
      div6.classList.add(`hidden`);
  }


  if(div3.classList.contains(`show`)){
    div3.classList.remove(`show`);
    div3.classList.add(`hidden`);
}

  if(div4.classList.contains(`show`)){
      div4.classList.remove(`show`);
      div4.classList.add(`hidden`);
  }

  if(div5.classList.contains(`show`)){
      div5.classList.remove(`show`);
      div5.classList.add(`hidden`);
  }


  div4.classList.remove('hidden');
  div4.classList.add('show');
  
 });

 document.getElementById(`education_files`).addEventListener("click", function () {
    var div1 = document.getElementById(`page1`);
    var div3 = document.getElementById(`page2`);
    var div4 = document.getElementById(`page3`);
    var div5 = document.getElementById(`page4`);
    var div6 = document.getElementById(`page5`);
    var div7 = document.getElementById(`page6`);

    if(div7.classList.contains(`shownav`)){
      div7.classList.remove(`shownav`);
      div7.classList.add(`hidden`);
  }

    if(div6.classList.contains(`show`)){
        div6.classList.remove(`show`);
        div6.classList.add(`hidden`);
    }
  
    if(div1.classList.contains(`show`)){
        div1.classList.remove(`show`);
        div1.classList.add(`hidden`);
    }
  
    if(div3.classList.contains(`show`)){
      div3.classList.remove(`show`);
      div3.classList.add(`hidden`);
  }
  
    if(div4.classList.contains(`show`)){
        div4.classList.remove(`show`);
        div4.classList.add(`hidden`);
    }

  
  
    div5.classList.remove('hidden');
    div5.classList.add('show');
    
   });

   document.getElementById(`projects_files`).addEventListener("click", function () {
    var div1 = document.getElementById(`page1`);
    var div3 = document.getElementById(`page2`);
    var div4 = document.getElementById(`page3`);
    var div5 = document.getElementById(`page4`);
    var div6 = document.getElementById(`page5`);
    var div7 = document.getElementById(`page6`);

    if(div7.classList.contains(`shownav`)){
      div7.classList.remove(`shownav`);
      div7.classList.add(`hidden`);
  }
  
    if(div1.classList.contains(`show`)){
        div1.classList.remove(`show`);
        div1.classList.add(`hidden`);
    }
  
    if(div3.classList.contains(`show`)){
      div3.classList.remove(`show`);
      div3.classList.add(`hidden`);
  }
  
    if(div4.classList.contains(`show`)){
        div4.classList.remove(`show`);
        div4.classList.add(`hidden`);
    }

    if(div5.classList.contains(`show`)){
        div5.classList.remove(`show`);
        div5.classList.add(`hidden`);
    }

  
  
    div6.classList.remove('hidden');
    div6.classList.add('show');
    
   });

   document.getElementById(`contactme_files`).addEventListener("click", function () {
    var div1 = document.getElementById(`page1`);
    var div3 = document.getElementById(`page2`);
    var div4 = document.getElementById(`page3`);
    var div5 = document.getElementById(`page4`);
    var div6 = document.getElementById(`page5`);
    var div7 = document.getElementById(`page6`);

    if(div6.classList.contains(`show`)){
        div6.classList.remove(`show`);
        div6.classList.add(`hidden`);
    }
  
    if(div1.classList.contains(`show`)){
        div1.classList.remove(`show`);
        div1.classList.add(`hidden`);
    }
  
    if(div3.classList.contains(`show`)){
      div3.classList.remove(`show`);
      div3.classList.add(`hidden`);
  }
  
    if(div4.classList.contains(`show`)){
        div4.classList.remove(`show`);
        div4.classList.add(`hidden`);
    }

    if(div5.classList.contains(`show`)){
        div5.classList.remove(`show`);
        div5.classList.add(`hidden`);
    }

  
  
    div7.classList.remove('hidden');
    div7.classList.add('shownav');
    
   });
