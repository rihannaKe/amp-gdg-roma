# [amp-bind](https://amp.dev/documentation/components/amp-bind/)

Allows elements to mutate in response to user actions or data changes via data binding and simple JS-like expressions.

amp-bind has three main concepts:
 - State: A document-scope, mutable JSON state. State variables update in response to user actions. amp-bind does not evaluate expressions on page load. Visual elements should have their default "state" defined and not rely amp-bind for initial render.
 - Expressions: JavaScript-like expressions that can reference the state.
 - Bindings: Special attributes that link an element's property to a state via an expression [property].