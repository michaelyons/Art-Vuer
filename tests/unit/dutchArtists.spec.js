import { shallowMount } from "@vue/test-utils";
import DutchArtists from "@/components/DutchArtists.vue";

describe("DutchArtists.vue", () => {
  it("matches snapshot", () => {
    const wrapper = shallowMount(DutchArtists);
    expect(wrapper).toMatchSnapshot();
  });
});
