import { shallowMount } from '@vue/test-utils';
import Event from '@/components/Event.vue';

describe('Event', () => {
  let wrapper, data;
  beforeEach(() => {
    data = { id: 1, name: 'Not a Sunrise', date: '2021/11/15', time: '14:00', going: false, review: '' };
    wrapper = shallowMount(Event, {
      propsData: {
        event: data,
      },
    });
  });

  it('should check if button add - going toggles ', async () => {
    let expected = 'going';
    const button = wrapper.find('button.not-going');
    await button.trigger('click');
    const btnText = button.text();
    expect(btnText).toBe(expected);
  });

  it("should ")

});
