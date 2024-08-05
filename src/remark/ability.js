import { visit } from "unist-util-visit";
import yaml from "js-yaml";

const plugin = (options) => {
  const transformer = async (ast) => {
    visit(ast, { type: "code", lang: "ability" }, (node) => {
      const p = yaml.load(node.value);
      const a = {
        name: p.name,
        header: { icon: p.icon, color: p.color, text: p.text },
        effect: p.effect,
        decare: p.declare,
        keywords: p.keywords,
        usedBy: p.usedBy,
      };
      node.type = "mdxJsxFlowElement";
      node.name = "WarscrollAbility";
      node.attributes = [
        {
          type: "mdxJsxAttribute",
          name: "ability",
          value: JSON.stringify(a),
        },
      ];
      delete node.lang;
      delete node.meta;
      delete node.value;
    });
  };
  return transformer;
};

export default plugin;
