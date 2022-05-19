// handlers.ts

// mocks
import { userInfo } from '@mocks/user/userInfo';

import { rest } from 'msw';
import API_URL from '~/api/urls';

export const handlers = [
  rest.get(`/test`, (req, res, ctx) => {
    return res(ctx.json({ test: '123' }));
  }),
  rest.get(`${API_URL.USER_PROFILE}`, (req, res, ctx) => {
    return res(ctx.json(userInfo));
  }),
];
