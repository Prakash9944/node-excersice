## Different types of Selectors in CSS

   #  Universal Selector

    The universal selector works like a wildcard character, selecting all elements on a page. In the given example, the provided styles will get applied to all the elements on the page.

       * {
          color: "green";
          font-size: 20px;
          line-height: 25px;
        }

   # Element Type Selector

        matches one or more HTML elements of the same name

        p {
            font-size: 20px;
        }

   # Class Selectors

      .class selector is used to select all elements which belong to a particular class attribute.

        .unique {
            font-size: 20px;
        }

   # id selector

     #id selector is used to set the style of the given id

        #unique {
            font-size: 20px;
        }

   # Attribute Selector

        # Attribute Selector: Selects elements with a specific attribute.

        [type="text"] {
            border: 1px solid black;
        }

## What is the difference between margin and padding

    Margin is used to create space around elements and padding is used to create space around elements inside the border

## can we hide an element in CSS

    # display
    # visibility

## Pseudo-elements

    # Pseudo-elements are used to style specific parts of an element. They are specified with double colons (::) followed by the name of the pseudo-element.

    ::before: Inserts content before an element's content.

    ::after: Inserts content after an element's content.

    ::first-letter: Styles the first letter of an element.

    ::first-line: Styles the first line of an element.

        p::first-line {
            font-weight: bold;
            color: red;
        }

## Pseudo-classes

    # Pseudo-classes are used to define a special state of an element. They are specified with a single colon (:) followed by the name of the pseudo-class

        :hover: Applies when the user designates an element (with a pointing device), but does not activate it.

        :active: Applies when an element is activated.

        :focus: Applies when an element has focus.

        :nth-child(n): Matches elements based on their position in a group of siblings

            a:hover {
                color: green;
            }

## Combinators (Combinators define the relationship between selectors. )

    # Descendant Combinator (space): Selects all elements that are descendants of a specified element.

        div p {
            color: red;
        }

    # Child Combinator (>): Selects all elements that are direct children of a specified element.

        div > p {
            color: blue;
        }

     # Adjacent Sibling Combinator (+): Selects the element that is immediately adjacent to a specified element.

        h1 + p {
            margin-top: 0;
        }

    # General Sibling Combinator (~): Selects all elements that are siblings of a specified element.

        h1 ~ p {
            color: green;
        }

# Position

    static:
        The default position; elements are positioned according to the normal flow of the document.

    relative:
        Element is positioned relative to its normal position.

    absolute:
        Element is positioned relative to the nearest positioned ancestor.

    fixed:
        Element is positioned relative to the browser window.

    sticky:
        Element is positioned based on the user's scroll position.