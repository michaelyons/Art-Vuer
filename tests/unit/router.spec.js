import { shallowMount } from "@vue/test-utils";
import Router from "@/router.js";

describe("Router.js", () => {
  it("matches snapshot", () => {
    const wrapper = shallowMount(Router);
    expect(wrapper).toMatchSnapshot();
  });
});
