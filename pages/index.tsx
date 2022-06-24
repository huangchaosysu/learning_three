import type { NextPage } from "next";
import styles from "../styles/scene.module.css";
import Link from "next/link";

interface MyLinkProps {
  href: string;
  text: string;
}

const MyLink = (props: MyLinkProps) => {
  const { href, text } = props;
  return (
    <div>
      <Link href={href}>{text}</Link>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MyLink href="/simple_scene/" text={"simple_scene"} />
      <MyLink
        href="/simple_scene_with_light/"
        text={"simple_scene_with_light"}
      />
      <MyLink
        href="/simple_scene_with_animation/"
        text={"simple_scene_with_animation"}
      />
    </div>
  );
};

export default Home;
