import initialize from './initialize.js';
import storeRecentlyVisited from './recently-visited.js';

const elementId = 'dnsimple-support-widget';

const app = initialize(document);
storeRecentlyVisited(app);
