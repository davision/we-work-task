import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import UsernameField from "../UsernameField.vue";

describe("UsernameField", () => {
  it("renders properly", () => {
    const wrapper = mount(UsernameField);
    expect(wrapper.text()).toContain("Username");
  });
});
