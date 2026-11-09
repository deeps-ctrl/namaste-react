const heading = React.createElement("h1", {}, "Hello World!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

/** How to create this structure using createElement in react
 * <div>
 *      <div id=child>
 *          <h1> Hello World</h1>
 *       </div>
 * </div>
 */

const nestedStructure = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "hello World"),
  ),
);

/** How to create this structure using createElement in react
 * <div>
 *      <div id=child>
 *          <h1> Hello World</h1>
 *          <h1> Hello World 1</h1>
 *       </div>
 * </div>
 */
const nestedStructureWithSiblings = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello World"),
    React.createElement("h1", {}, "hello World 1"),
  ]),
);
