import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          You can <span class="highlight">count</span>
          <br /> on me
        </h3>
      </div>

      <div class="container container-flex">
        <div q:slot="title" class="icon icon-cli">
          CLI Commands
        </div>
        <div>
          <p>
            <code>npm run dev</code>
            <br />
            Starts the development server and watches for changes
          </p>
          <p>
            <code>npm run preview</code>
            <br />
            Creates production build and starts a server to preview it
          </p>
          <p>
            <code>npm run build</code>
            <br />
            Creates production build
          </p>
          <p>
            <code>npm run qwik add</code>
            <br />
            Runs the qwik CLI to add integrations
          </p>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
