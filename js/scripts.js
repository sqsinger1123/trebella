/*                                                         
                                   SSSSSSSSSSSSSSS      QQQQQQQQQ        SSSSSSSSSSSSSS 
         This page                SS::::::::::::::S   QQ:::::::::QQ    SS::::::::::::::S
       built with love            S:::::SSSSSS:::::S QQ:::::::::::::QQ S:::::SSSSSS:::::S
      by Samuel Q Singer          S:::::S     SSSSSSQ:::::::QQQ:::::::QS:::::S     SSSSSS
                                  S:::::S           Q::::::O   Q::::::QS:::::S            
    For more information,         S:::::S           Q:::::O     Q:::::QS:::::S  
  please visit: sqsinger.com       S::::SSSS        Q:::::O     Q:::::Q S::::SSSS
        or contact:                 SS:::::SSSSS    Q:::::O     Q:::::Q  SS::::::SSSSS
  hello[at]sqsinger[dot]com           SSS:::::::SS  Q:::::O     Q:::::Q    SSS::::::::SS  
                                         SSSSSS:::S Q:::::O     Q:::::Q       SSSSSS::::S 
 Welcome to the source code :)                S::::SQ:::::O  QQQQ:::::Q            S::::S
                                              S::::SQ::::::O Q::::::::Q            S::::S
                       @@@#       SSSSSSS     S::::SQ:::::::QQ::::::::Q SSSSSS     S::::S
            @@         @@@@       S::::::SSSSSS::::S QQ::::::::::::::Q  S:::::SSSSSS::::S
           @@@@@@     @@@@@@      S:::::::::::::::SS   QQ:::::::::::Q    S::::::::::::SS 
         @@@@@@@@@@#  @@@@@@       SSSSSSSSSSSSSSS       QQQQQQQQ::::QQ   SSSSSSSSSSSSS
        @@@@   @@@@@@@@@@@@                                       Q:::::Q 
       @@@      @@@@@@@@@@                                         QQQQQQ     
     @@@@       @@@@@@@@@   @@     
     @@@       @@@@@@@@@@   @@     
     @@@       @@@@@@@@@@   @@            .,,~~.                ,~"~.
              @@@@@@@@@@@@  @            { /`,__\     ,Wk       > ::::     x%F
             @@@@@@@@@ @@@ @@           { `}'~.~/   ,' /       <, ?::;   ,'"7
             @@@@@@@@   @@@@            {`}'\._/  ,' ,'         l_  f  ,'  /
            @@@@@@@@    @@@@             ,__/ l_.'`,'         ,__}--{_'  ,'
           @@@@@@@'      @              {  `.__.' <          /          7
           @@@@@@                        \ \    )  )        /   +----+ /
          @@@@@@@@                        \-\`-'`-'        /  , | 42 |7              
          @@@@@@@@@@                       \ \___l,-_,___.'  /1 +----/              
          @@@@@@@@@@@@                      k____-~'-l_____.' |     f               
          @@@@@@@@@@@@@@                   /===#==\           l     j                
         #@@@@@@@@@@@@@@                 .'        `.         I===I=I                 
         @@@@@    '@@@@@               ,' ,'       `.`.       f     }                 
         @@@@     @@@@@              ,' ,'  /      \ `.`.     |     }                
        @@@@@    @@@@              .'^.^.^.'`.'`.^.'`.'`.^.   l    Y;               
        @@@@    @@@@                          `.   \          }    |                 
      @@@@@    @@@                             !`,  \         |    |                  
     @@@@@`  @@@@                              l /   }       ,1    |                  
    @@@@@   '@@@                               l/   /        !l   ,l                 
    @@@      @@@                               /  ,'         ! \    \               
   @@@        @@@                             /  /!          !  \    \             
  @@#          @@@                           / ,f l          l___j.   \               
@@@@             @                          (_ \l_ `_    ,.-'`--(  `.,'`.             
@@@@                                         Y\__Y`--'   `-'~x__J    j'  >     
 @@@                                                               ,/ ,^'
  @@,                                                             f__J  
                                


Welcome once again to my source code! Nice to meet you :)

Feel free to take a look around and send any comments my way: sqsinger [at] post [dot] harvard [dot] edu 

*/


// Utility function: style the top menu by assigning .current to the active page.
function update_current(linkname) {
    $(".current").removeClass("current"); // By default: no current link.
    linkname = linkname + "_link"; // Linkname should be a jQuery selector starting with "#".
    $(linkname).addClass("current"); // Given this class, CSS will style appropriately.
}


// ---------------------------------------------------------- Semi-Ajax Page Loading
// All sections start off shown (for those no-script types)

// The "main" function, if you will, of this page.
function loadpage() {
   $(".page").addClass("smoothScroll");

    // Determine and load the current page on pageload (if applicable)
    var page = window.location.hash.substring(1);
    update_current("#" + page);
    
    // page transition support
    $(".menu a, #home_top a").click(function(e) {
        // Update the top menu appropriately.
        linkname = "." + ($(this).attr("href")).substring(1);
        update_current(linkname); // See my above function for this.        
    });

}

// This is the part that calls other functions above.
$(window).load(function() {
    loadpage();

});