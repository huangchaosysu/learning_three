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
      <MyLink href="/simple_scene_with_grid/" text={"simple_scene_with_grid"} />
      <MyLink href="/simple_scene_with_axis/" text={"simple_scene_with_axis"} />
      <MyLink
        href="/simple_scene_with_light/"
        text={"simple_scene_with_light"}
      />
      <MyLink
        href="/simple_scene_with_animation/"
        text={"simple_scene_with_animation"}
      />
      <MyLink
        href="/simple_scene_with_control/"
        text={"simple_scene_with_control"}
      />
      <MyLink
        href="/simple_scene_with_models/"
        text={"simple_scene_with_model"}
      />
      <MyLink
        href="/simple_scene_with_transform_control/"
        text={"simple_scene_with_transform_control"}
      />
      <MyLink
        href="/simple_scene_with_shader/"
        text={"simple_scene_with_shader"}
      />
      <MyLink
        href="/simple_scene_with_loading/"
        text={"simple_scene_with_loading"}
      />
      <MyLink
        href="/simple_scene_with_model_animation/"
        text={"simple_scene_with_model_animation"}
      />
      <MyLink href="/simple_scene_instances/" text={"simple_scene_instances"} />
      <MyLink
        href="/simple_scene_move_object/"
        text={"simple_scene_move_object"}
      />
    </div>
  );
};

export default Home;
