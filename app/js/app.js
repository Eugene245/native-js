import Link from './links-mouse-over.js'
import ModalWindow from './modal.js'
import DistributeBlocks from './distribute.js'
import CategoryLinks from './category-links.js'
import {pageTransition} from './page-transition.js'
import Cart from './cart.js'

localStorage.clear()

Link();
ModalWindow();
DistributeBlocks();
CategoryLinks();
pageTransition();

setTimeout(() => {
  Cart();
}, 0)