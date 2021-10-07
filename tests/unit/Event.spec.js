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

    expected = 'add';
    await button.trigger('click');
    const btnAddText = button.text();
    expect(btnAddText).toBe(expected);
  });

  it('should check if input field for review is shown after clicking on add button once, not before! ', async () => {
    let expected = 0;
    let inputElemCount = wrapper.findAll('input').length;
    expect(inputElemCount).toEqual(expected);

    expected = 1;
    const button = wrapper.find('button.not-going');
    await button.trigger('click');
    inputElemCount = wrapper.findAll('input').length;
    expect(inputElemCount).toEqual(expected);
  });

  it(' should check if the user can write a review ', async () => {
    let expected = 'your review: it was a fun night';
    const btn = wrapper.find('button.not-going');
    await btn.trigger('click');

    const inputElem = wrapper.find('input');
    await inputElem.setValue('it was a fun night');
    const sendBTN = wrapper.find('button#send-rev');
    await sendBTN.trigger('click');

    const reviewText = wrapper.find('p.rev').text();
    expect(expected).toBe(reviewText);
  });
});
