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

  config.widgets.type.meetlist = MeetingListEditWidget;

  config.settings.externalRoutes = [{ match: '/mattermost' }];

  return config;
}
