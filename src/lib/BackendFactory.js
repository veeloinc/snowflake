'use string';

import CONFIG from './config';
import Veelo from './Veelo';

export default function BackendFactory(token = null) {
  return new Veelo(token);
}
