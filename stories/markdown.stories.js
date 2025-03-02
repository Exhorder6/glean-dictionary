import { text, boolean } from "@storybook/addon-knobs";
import Markdown from "../src/components/Markdown.svelte";

const mark =
  "A *text* in markdown [moz](https://mozilla.org).\n\nA list:\n\n* Lorem\n* Ipsum\n\nThis is an ordered list starting from 2:\n\n2. Foo\n3. Bar";

const inline = false;

export default {
  title: "Markdown",
};

export const Text = () => ({
  Component: Markdown,
  props: {
    text: text("text", mark),
    inline: boolean("inline", inline),
  },
});
