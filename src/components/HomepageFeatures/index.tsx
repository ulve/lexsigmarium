import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Rules",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>All the rules in a simple format.</>,
  },
  {
    title: "Warscrolls",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>All the army rules including warscrolls.</>,
  },
  {
    title: "Points",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>All the points costs for all warscrolls.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  let iconUrl = useBaseUrl(`img/logo.jpeg`);
  return (
    <img
      src={iconUrl}
      style={{
        display: "block",
        width: "25%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
  );
}
