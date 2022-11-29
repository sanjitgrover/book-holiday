import {handler} from '../services/spaceTable/Create';

const event = {
    body: {
        location: 'Paris'
    }
}

handler(event as any, {} as any);