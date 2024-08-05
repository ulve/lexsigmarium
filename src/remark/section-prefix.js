import { visit } from "unist-util-visit";

const parseAbilityBlock = (text) => {
  let icon = text.match(/icon: (.*)/)[1];
  let phase = text.match(/phase: (.*)/)[1];
  let qualifier = text.match(/qualifier: (.*)/)[1];

  return { icon, phase, qualifier };
};

const plugin = (options) => {
  const transformer = async (ast) => {
    visit(ast, "code", (node) => {
      if (node.lang === "ability") {
        let { icon, phase, qualifier } = parseAbilityBlock(node.value);
        node.type = "mdxJsxFlowElement";
        node.name = "JsxTest";
        node.attributes = [
          {
            type: "mdxJsxAttribute",
            name: "icon",
            value: icon,
          },
          {
            type: "mdxJsxAttribute",
            name: "phase",
            value: phase,
          },
          {
            type: "mdxJsxAttribute",
            name: "qualifier",
            value: qualifier,
          },
        ];
      }
    });
  };

  return transformer;
};

export default plugin;
