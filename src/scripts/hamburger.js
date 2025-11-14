const navElement = document.querySelector('.navbar');
const hamElement = document.querySelector('.hamburger');

hamElement.addEventListener('click', () => {
    navElement.classList.toggle('navbar--open');
    hamElement.classList.toggle('hamburger--open');
});

// Easter Egg TODO: Move to separate file whenever I decide to merge all scripts
console.log(`
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#5~ 
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@J
@@@@@@@@@@@@@@GYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
@@@@@@@@@@@@@@7                                   
@@@@@@@@@@@@@@&################B:  J#############B
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#7  :&@@@@@@@@@@@@@G
PPPPPPPPPPPPPPPPPPPPPPPPPPP5J!.  !#@@@@@@@@@@@@@#:
                             .^?B@@@@@@@@@@@@@@B: 
GGGGGGGGGGGGGGGGGGGGGGGGGGGBB&@@@@@@@@@@@@@@@#?   
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#P7.  !!
@@@@@@@@@@@@@@#GGGGGGGGGGGGGGGGGGGGGGP5J7^   :?B@#
@@@@@@@@@@@@@@7                         .^!YG&@@@@
@@@@@@@@@@@@@@7                    JPPGB&@@@@@@@@#
@@@@@@@@@@@@@@?                   7@@@@@@@@@@@@@@?
@@@@@@@@@@@@@@?                 :Y@@@@@@@@@@@@@@5 
@@@@@@@@@@@@@@?              :!5&@@@@@@@@@@@@@@J  
@@@@@@@@@@@@@@?  :YYYYYYYY5PB&@@@@@@@@@@@@@@@P^   
@@@@@@@@@@@@@@?  ~@@@@@@@@@@@@@@@@@@@@@@@@BJ^     
@@@@@@@@@@@@@@?  ~@@@@@@@@@@@@@@@@@@&#G57^   

electron.observer - Observing you through the console...
Source: https://github.com/electronobserver/website
`);