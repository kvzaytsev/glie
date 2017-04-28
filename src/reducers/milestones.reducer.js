import { TOKEN_ACCEPTED } from '../events';

const apiTokenReducer = (state = {}, { type, payload }) => type === TOKEN_ACCEPTED ? payload : state;

export default apiTokenReducer;