import { shallowMount } from "@vue/test-utils";
import AmericanArtists from "@/views/AmericanArtists.vue";

describe("AmericanArtists.vue", () => {
  it("matches snapshot", () => {
    const wrapper = shallowMount(AmericanArtists);
    expect(wrapper).toMatchSnapshot();
  });
});
