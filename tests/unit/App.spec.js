import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import 'jest-localstorage-mock';

describe('App', () => {
  it('should test if an event is pushed to localStorage', async () => {
    const wrapper = mount(App);
    const KEY = 'events-attending',
    VALUE = [{ id: 1, name: 'Not a Sunrise', date: '2021/11/15', time: '14:00', going: false, review: '' }];
    const data = { id: 1, name: 'Not a Sunrise', date: '2021/11/15', time: '14:00', going: false, review: '' };
    const StriData = JSON.stringify(VALUE)
    await wrapper.vm.addToAttending(data);
    const eventsAttending = wrapper.vm.attending.length;
    expect(eventsAttending).toBe(1);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, StriData);
    expect(localStorage.__STORE__[KEY]).toBe(StriData);
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });
});
