import { shallowMount } from "@vue/test-utils";
import Main from "@/main.js";

describe("Main.js", () => {
  it("matches snapshot", () => {
    const wrapper = shallowMount(Main);
    expect(wrapper).toMatchSnapshot();
  });
});
