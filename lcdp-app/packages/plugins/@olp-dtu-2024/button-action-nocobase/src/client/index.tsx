import { Plugin, useSchemaInitializer } from '@nocobase/client';

export class ButtonActionNocobaseClient extends Plugin {
  async afterAdd() {
    // await this.app.pm.add()
  }

  async beforeLoad() {}

  // You can get and modify the app instance here
  async load() {}
}

export default ButtonActionNocobaseClient;
