import './tsconfig';

import * as fills from '../polyfills';

Object.values(fills).forEach(f => f());