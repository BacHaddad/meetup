import { shallowMount } from '@vue/test-utils';
import Header from '../../src/components/Header';

describe('Header', () => {
  it('Should check if showCalender function toggles between true and false', async () => {
    let expected = true;
    const wrapper = shallowMount(Header);
    await wrapper.setData({ background: false });
    const button = wrapper.find('.calender-button');
    await button.trigger('click');
    expect(wrapper.vm.toggle).toBe(expected);
    await button.trigger('click');
    expected = false;
    expect(wrapper.vm.toggle).toBe(expected);
  });

  it('Should check if emit happends', async () => {
    const wrapper = shallowMount(Header, {});
    await wrapper.vm.$emit('deleteItem');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('deleteItem')).toBeTruthy();
  });
});
