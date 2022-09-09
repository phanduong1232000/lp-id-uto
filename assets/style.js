//scroll to popup

$(window).scroll(function () {
  
  if ($(window).scrollTop() + $(window).height() == $(document).height()) {
    $('#signup').addClass('show')
  }
});

$("i").click(function () {
    $("#signup").removeClass('show');
    setTimeout(function(){
      $('#signup').addClass('show');
    }, 15000)
});

// timeout
  $(document).ready(function () {
    timer = setTimeout(function () {
        $('#signup').addClass('show');
    }, 15000);
});  

// onclick
$( "#target" ).click(function() {
  $('#signup').addClass('show')
});

// swiper
var slickopts = {
  slidesToShow: 5,
  slidesToScroll: 5,
  loop: true,
  autoplay:true,
  autoplaySpeed:1500,
  rows: 2, // Removes the linear order. Would expect card 5 to be on next row, not stacked in groups.
  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 776,
      settings: {
        slidesToShow: 3,
        rows: 1 // This doesn't appear to work in responsive (Mac/Chrome)
      }
    }
  ]
};

$('.carousel').slick(slickopts);

// preloader
window.onload = function () {
  setInterval(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 200);
}



// prevent copy
function killCopy(e) {
  return false;
}

function reEnable() {
  return true;
}

document.onselectstart = new Function("return false");

if (window.sidebar) {
  document.onmousedown = killCopy;
  document.onclick = reEnable;
}

//wowjs
new WOW().init();


//number animation 
function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
  let currentNumber = startNumber
  const interval = window.setInterval(updateNumber, 17)

  function updateNumber() {
    if (currentNumber >= finalNumber) {
      clearInterval(interval)
    } else {
      let inc = Math.ceil(finalNumber / (duration / 17))
      if (currentNumber + inc > finalNumber) {
        currentNumber = finalNumber
        clearInterval(interval)
      } else {
        currentNumber += inc
      }
      callback(currentNumber)
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  animateNumber(2000000, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('count1').innerText = formattedNumber;
  })
  animateNumber(300, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('count2').innerText = formattedNumber + '+';
  })
  animateNumber(1000, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('count3').innerText = formattedNumber + '+';
  })
})




// animaiton gif