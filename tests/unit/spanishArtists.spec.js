import { shallowMount } from "@vue/test-utils";
import SpanishArtists from "@/components/SpanishArtists.vue";

describe("SpanishArtists.vue", () => {
  it("matches snapshot", () => {
    const wrapper = shallowMount(SpanishArtists);
    expect(wrapper).toMatchSnapshot();
  });
});
