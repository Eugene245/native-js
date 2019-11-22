import Link from '../js/links-mouse-over.js'
import ModalWindow from '../js/modal.js'
import DistributeBlocks from '../js/distribute.js'
import CategoryLinks from '../js/category-links.js'
import PageTransition from '../js/page-transition.js'
import Cart from '../js/cart.js'

Link();
ModalWindow();
DistributeBlocks();
CategoryLinks();
PageTransition();

setTimeout(() => {
  Cart();
}, 0)