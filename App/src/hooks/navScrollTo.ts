import getCoords from "./getCoords";
import { animateScroll } from "./animateScroll";

export const scrollTo = ( position: number, duration = 3000 ) => {
       // the position of the scroll bar before the user clicks the button
       let start: number;
       const initialPosition = window.scrollY;

       // decide what type of reference that is
       // if neither ref or id is provided  set element to null

       start = initialPosition < position ? position + 200 : position + 95 ;



       animateScroll({
              targetPosition: start,
              initialPosition,
              duration
       });

};