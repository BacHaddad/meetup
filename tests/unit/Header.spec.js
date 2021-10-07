import { shallowMount } from '@vue/test-utils';
import Header from '../../src/components/Header';

describe('Header', () => {
  let wrapper, data;
  beforeEach(() => {
    data = [
      { id: 1, name: 'Not a Sunrise', date: '2021/11/15', time: '14:00', going: false, review: '' },
      { id: 2, name: 'Ocean Decipherment', date: '2021/11/15', time: '15:00', going: false, review: '' },
      { id: 3, name: 'Universe Trillion', date: '2021/11/15', time: '11:45', going: false, review: '' },
    ];
    wrapper = shallowMount(Header, {
      propsData: {
        attending: data,
      },
    });
  });
  it('Should check if showCalender function toggles between true and false', async () => {
    let expected = true;
    await wrapper.setData({ background: false });
    const button = wrapper.find('div.calender-button');
    await button.trigger('click');
    expect(wrapper.vm.background).toBe(expected);
    await button.trigger('click');
    expected = false;
    expect(wrapper.vm.background).toBe(expected);
  });

  it('Should check if emit happends', async () => {
    await wrapper.vm.$emit('toggleAttending');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('toggleAttending')).toBeTruthy();
  });
});
