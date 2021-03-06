import Link from './links-mouse-over.js'
import ModalWindow from './modal.js'
import DistributeBlocks from './distribute.js'
import CategoryLinks from './category-links.js'
import {pageTransition} from './page-transition.js'
import Cart from './cart.js'
import {CartTotalAmountDraw} from '../api/templates/cart-template.js'

Link();
ModalWindow();
DistributeBlocks();
CategoryLinks();
pageTransition();
setTimeout(() => {
  Cart();
  CartTotalAmountDraw();
}, 0)