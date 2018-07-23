# CodeLou_FrontEnd

## Description
```
This project is a very basic redesign of the site momandmetreats.com, a local peanut brittle company, using the basic skills I've learning through the Front End Web Development course with Code Louisville. My basic goal was to simplify the site and par it down to one page where customers could quickly see basic info and easily place orders.

```



## Custom CSS Classes
```
The class(es) I created are:
.mainpage:
Creates flex container and center contents, and stretches the columns to matching heights.

.nav ul:
Removes padding and default from footer navigation links.

.mainpage .col1, .col2:
Creates a two column layout with each column taking 50% of the viewport. Adds a top and bottom black border, bottom margin, padding on 3 sides, red background color, and white text color.

.orderform
Makes order form takes up 50% of viewport, with a beige background and rounded courses. Added padding and margin.

.footer
Creates flex container and puts equal space around contents. Adds margin, padding, background color to match colums, white text, and top black border.

.jumbotron
Overrides default Bootstrap styles, specifies background image that tiles over the entire jumbotron, adds fall-back white background and removes margin.

```



## Custom JavaScript Functions
```
The javascript functions I created are:

1. Using jQuery, I selected the submit button class and added a click event. On the click event, I ran a function to compare the user inputted value of the submit button to a regular expression string that matches a standard email address. If the function evaluates as true, a success message appears thanking the user for their order; if not, a request for a valid email.

```
