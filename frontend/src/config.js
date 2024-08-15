/** Volto Project Configuration
 * The recommended way for configuring a Volto project is using an add-on.
 * The project should only be considered as boilerplate, and all the code and
 * configuration should happen and be placed in add-ons.
 *
 * Both configuring directly and placing code in a project is discouraged, and might be
 * removed at some point from Volto.
 *
 * The local project is left for backwards compatibility for existing projects.
 */
import {
  MeetingViewBlock,
  MeetingEditBlock,
} from 'addons/volto-frontend/src/components';
import {
  MattermostViewBlock,
  MattermostEditBlock,
} from 'addons/volto-frontend/src/components';
import {
  DonateEditBlock,
  DonateViewBlock,
} from 'addons/volto-frontend/src/components';
import {
  FocomapEditBlock,
  FocomapViewBlock,
} from 'addons/volto-frontend/src/components';
import {
  NetEditBlock,
  NetViewBlock,
} from 'addons/volto-frontend/src/components';
import {
  MeshmapEditBlock,
  MeshmapViewBlock,
} from './addons/volto-frontend/src/components';
import MeetingListEditWidget from './addons/volto-frontend/src/components/Blocks/meetingBlock/MeetingListEditWidget';
import sliderSVG from '@plone/volto/icons/slider.svg';
// [Internal] All the imports of modules required for the configuration *must* happen
// here BEFORE the following line
import '@plone/volto/config';

export default function applyConfig(config) {
  config.blocks.blocksConfig.meetingBlock = {
    id: 'meetingBlock',
    title: 'Meeting Block',
    icon: sliderSVG,
    group: 'common',
    view: MeetingViewBlock,
    edit: MeetingEditBlock,
    restricted: false,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.mattermostBlock = {
    id: 'mattermostBlock',
    title: 'Mattermost Block',
    icon: sliderSVG,
    group: 'common',
    view: MattermostViewBlock,
    edit: MattermostEditBlock,
    restricted: false,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.donateBlock = {
    id: 'donateBlock',
    title: 'Donate Block',
    icon: sliderSVG,
    group: 'common',
    view: DonateViewBlock,
    edit: DonateEditBlock,
    restricted: false,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.focomapBlock = {
    id: 'focomapBlock',
    title: 'FoCoMap Block',
    icon: sliderSVG,
    group: 'common',
    view: FocomapViewBlock,
    edit: FocomapEditBlock,
    restricted: false,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.netBlock = {
    id: 'netBlock',
    title: 'Weekly Net Block',
    icon: sliderSVG,
    group: 'common',
    view: NetViewBlock,
    edit: NetEditBlock,
    restricted: false,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.meshmapBlock = {
    id: 'meshmapBlock',
    title: 'MeshMap Block',
    icon: sliderSVG,
    group: 'common',
    view: MeshmapViewBlock,
    edit: MeshmapEditBlock,
    restricted: false,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.widgets.type.meetlist = MeetingListEditWidget;

  config.settings.externalRoutes = [{ match: '/mattermost' }];

  return config;
}
