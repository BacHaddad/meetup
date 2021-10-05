import { shallowMount } from '@vue/test-utils';
import EventsList from '@/components/EventsList.vue';

describe('EventsList', () => {
  it('should recieve the products as props', () => {
    const wrapper = shallowMount(EventsList, {
      propsData: {
        events: [
          { id: 1, name: 'Not a sunrise', date: '2021/11/15', time: '14:00', location: 'Gothenburg', img: 'https://dummyimage.com/600x400/fff/000.jpg&text=events' },
          { id: 2, name: 'ocean decipherment', date: '2021/11/15', time: '15:00', location: 'Gothenburg', img: 'https://dummyimage.com/600x400/fff/000.jpg&text=events' },
          { id: 3, name: 'universe trillion', date: '2021/11/15', time: '11:45', location: 'Gothenburg', img: 'https://dummyimage.com/600x400/fff/000.jpg&text=events' },
          { id: 4, name: 'two ghostly white figures', date: '2021/11/15', time: '10:30', location: 'Gothenburg', img: 'https://dummyimage.com/600x400/fff/000.jpg&text=events' },
          { id: 5, name: 'sky calls to us', date: '2021/11/15', time: '18:15', location: 'Gothenburg', img: 'https://dummyimage.com/600x400/fff/000.jpg&text=events' },
        ],
      },
    });

    expect(wrapper.props().events).toContainEqual({ id: 1, name: 'Not a sunrise', date: '2021/11/15', time: '14:00', location: 'Gothenburg', img: 'https://dummyimage.com/600x400/fff/000.jpg&text=events' });
  });
});
