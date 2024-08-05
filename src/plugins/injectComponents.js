import { visit } from "unist-util-visit";

module.exports = function injectComponents() {
  return (tree) => {
    visit(tree, "root", (node) => {
      node.children.unshift({
        type: "import",
        value:
          "import WarscrollAbility from '@site/src/components/WarscrollAbility';",
      });
    });
  };
};
