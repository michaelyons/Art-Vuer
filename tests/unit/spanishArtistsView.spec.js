import { shallowMount } from "@vue/test-utils";
import SpanishArtists from "@/views/SpanishArtists.vue";

describe("SpanishArtists.vue", () => {
  it("matches snapshot", () => {
    const wrapper = shallowMount(SpanishArtists);
    expect(wrapper).toMatchSnapshot();
  });
});
