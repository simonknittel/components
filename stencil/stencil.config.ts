import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import fs from 'fs';

export const config: Config = {
  namespace: 'components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    {
      type: 'docs-custom',
      generator(docs) {
        const customElements = {
          tags: docs.components.map(component => {
            return {
              name: component.tag,
              properties: component.props.map((property) => {
                return {
                  name: property.name,
                  type: property.type,
                  default: property.default,
                  defaultValue: property.default, // used by storybook
                }
              }),
              events: component.events.map((event) => {
                return {
                  name: event.event,
                  type: event.detail,
                }
              })
            }
          })
        }

        fs.writeFileSync('./custom-elements.json', JSON.stringify(customElements, undefined, 2))
      }
    }
  ],
  plugins: [
    sass()
  ]
};
