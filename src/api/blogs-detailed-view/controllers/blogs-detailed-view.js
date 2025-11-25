'use strict';

/**
 * blogs-detailed-view controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::blogs-detailed-view.blogs-detailed-view',
  ({ strapi }) => ({
    async find(ctx) {
      const { slug } = ctx.query; 
      const filters = {};

      // If ?slug=... is provided, filter by related blog.slug
      if (slug) {
        filters.blog = { slug };
      }

      const data = await strapi.entityService.findMany(
        'api::blogs-detailed-view.blogs-detailed-view',
        {
          filters,
          sort: 'createdAt:desc',
          populate: {
            blog : true
          },
        }
      ); 
         // If nothing found, return null
      if (!data || data.length === 0) {
        return { data: null };
      }
      
      return { data: data[0]  };
    },
  })
);

