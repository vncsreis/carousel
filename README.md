# Carousel

***WIP***

React Carousel experiment. At the moment, lacks responsiveness and autoplay. Infinite loop is default and cannot be changed.

Styles are inline, for minimum size and maximum encapsulation.


---

## How to use

Import the Carousel component, and set items/slides as children. The length is calculated automatically.

Set the width and height of each slide (px), the speed of the animation (ms), the amount of padding for the slides - if any - (px), the amount of slides in view and the amount of slides scrolled on each click.

The back and forward button can be passed to the component. In this case, both buttons must have the onClick prop defined, as it is overwritten on React.cloneElement.
