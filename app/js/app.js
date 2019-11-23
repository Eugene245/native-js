import Link from './links-mouse-over.js'
import ModalWindow from './modal.js'
import DistributeBlocks from './distribute.js'
import CategoryLinks from './category-links.js'
import PageTransition from './page-transition.js'
import Cart from './cart.js'

Link();
ModalWindow();
DistributeBlocks();
CategoryLinks();
PageTransition();

setTimeout(() => {
  Cart();
}, 0)